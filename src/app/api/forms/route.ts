import { NextResponse } from 'next/server';

import { escapeHtml, sendAdminMail, type MailAttachment } from '@/lib/mail';
import { FORM_TYPES, JOB_FILE_MAX_BYTES, JOB_FILE_TYPES, formSchemas, type FormType } from '@/lib/forms/schemas';

export const runtime = 'nodejs';

// Subjects match the old Contact Form 7 mails ("[_site_title] ...").
const SUBJECTS: Record<FormType, string> = {
  contact: 'Born2be Media',
  plan: 'Born2be Media Plan',
  job: 'Born2be Media Job Offering',
  'contacts-page': 'Born2be Media Contacts page',
};

const LABELS: Record<string, string> = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  service: 'How can we assist you?',
  plan: 'Package',
  message: 'Message',
};

export async function POST(request: Request) {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot filled in -> a bot. Pretend success so it does not retry.
  if (String(data.get('website') ?? '').trim()) {
    return NextResponse.json({ message: 'ok' });
  }

  const type = String(data.get('type') ?? '') as FormType;
  if (!FORM_TYPES.includes(type)) {
    return NextResponse.json({ message: 'Unknown form.' }, { status: 400 });
  }

  const raw: Record<string, string> = {};
  for (const key of Object.keys(LABELS)) {
    const v = data.get(key);
    if (typeof v === 'string') raw[key] = v;
  }

  const parsed = formSchemas[type].safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ message: 'Validation failed.', issues: parsed.error.issues }, { status: 400 });
  }
  const values = parsed.data as Record<string, string>;

  const attachments: MailAttachment[] = [];
  if (type === 'job') {
    const file = data.get('file');
    if (!(file instanceof File) || file.size === 0) {
      return NextResponse.json({ message: 'CV is required.' }, { status: 400 });
    }
    if (!JOB_FILE_TYPES.some((ext) => file.name.toLowerCase().endsWith(ext)) || file.size > JOB_FILE_MAX_BYTES) {
      return NextResponse.json({ message: 'File type or size is not allowed.' }, { status: 400 });
    }
    attachments.push({ filename: file.name, content: Buffer.from(await file.arrayBuffer()), contentType: file.type || undefined });
  }

  const rows = Object.entries(values)
    .filter(([, v]) => v)
    .map(([k, v]) => `<p><strong>${escapeHtml(LABELS[k] ?? k)}:</strong> ${escapeHtml(v)}</p>`)
    .join('\n');
  const html = `<h2>${escapeHtml(SUBJECTS[type])}</h2>\n${rows}${attachments.length ? `\n<p><strong>CV:</strong> ${escapeHtml(attachments[0].filename)} (attached)</p>` : ''}`;

  try {
    await sendAdminMail({ subject: SUBJECTS[type], html, replyTo: values.email, attachments });
    return NextResponse.json({ message: 'ok' });
  } catch (error) {
    console.error('Form mail failed:', error instanceof Error ? error.message : error);
    return NextResponse.json({ message: 'Failed to send.' }, { status: 500 });
  }
}
