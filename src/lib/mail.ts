import 'server-only';
import nodemailer from 'nodemailer';

export type MailAttachment = { filename: string; content: Buffer; contentType?: string };

export function escapeHtml(text: unknown): string {
  return String(text ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/** "a@x.com, b@y.com" -> ["a@x.com", "b@y.com"] */
export function parseEmailList(value: string | undefined): string[] {
  return (value ?? '')
    .split(/[,\n;]/)
    .map((v) => v.trim())
    .filter(Boolean);
}

function getConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT || 465);
  const from = process.env.MAIL_FROM?.trim() || user;
  const to = parseEmailList(process.env.ADMIN_EMAIL);

  if (!host || !user || !pass || !from || to.length === 0) {
    throw new Error('Email configuration is missing (SMTP_HOST, SMTP_USER, SMTP_PASS, ADMIN_EMAIL).');
  }
  return { host, port, user, pass, from, to };
}

export async function sendAdminMail(opts: { subject: string; html: string; replyTo?: string; attachments?: MailAttachment[] }) {
  const cfg = getConfig();
  const transporter = nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.port === 465,
    auth: { user: cfg.user, pass: cfg.pass },
  });

  await transporter.sendMail({
    from: cfg.from,
    to: cfg.to,
    replyTo: opts.replyTo,
    subject: opts.subject,
    html: opts.html,
    attachments: opts.attachments,
  });
}
