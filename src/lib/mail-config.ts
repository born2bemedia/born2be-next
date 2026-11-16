// Which way of sending form emails is configured (see .env.example). No secrets are returned.
export type MailMode = 'gmail-oauth' | 'smtp';

export function getMailConfig(env: NodeJS.ProcessEnv = process.env): { mode: MailMode | null; problems: string[] } {
  const problems: string[] = [];
  const hasOAuth = !!(env.GMAIL_USER && env.GMAIL_CLIENT_ID && env.GMAIL_CLIENT_SECRET && env.GMAIL_REFRESH_TOKEN);
  const hasSmtp = !!(env.SMTP_HOST && env.SMTP_USER && env.SMTP_PASS);
  const mode: MailMode | null = hasOAuth ? 'gmail-oauth' : hasSmtp ? 'smtp' : null;

  if (!mode) problems.push('no mail transport: set SMTP_HOST/SMTP_USER/SMTP_PASS (or the GMAIL_* OAuth variables)');
  if (!env.ADMIN_EMAIL?.trim()) problems.push('ADMIN_EMAIL is not set (where form submissions are sent)');
  return { mode, problems };
}
