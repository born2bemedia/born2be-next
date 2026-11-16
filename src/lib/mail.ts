import 'server-only';
import nodemailer from 'nodemailer';

import { getMailConfig } from './mail-config';

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

/*
 * Two ways to send (see .env.example):
 * 1. Gmail OAuth (what WP Mail SMTP used on WordPress): GMAIL_USER + GMAIL_CLIENT_ID + GMAIL_CLIENT_SECRET + GMAIL_REFRESH_TOKEN.
 * 2. Plain SMTP login: SMTP_HOST + SMTP_USER + SMTP_PASS (e.g. a Google App Password).
 * OAuth is used when its variables are set.
 */
function createTransport() {
  const env = process.env;
  if (env.GMAIL_USER && env.GMAIL_CLIENT_ID && env.GMAIL_CLIENT_SECRET && env.GMAIL_REFRESH_TOKEN) {
    return {
      user: env.GMAIL_USER,
      transporter: nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: env.GMAIL_USER,
          clientId: env.GMAIL_CLIENT_ID,
          clientSecret: env.GMAIL_CLIENT_SECRET,
          refreshToken: env.GMAIL_REFRESH_TOKEN,
        },
      }),
    };
  }
  if (env.SMTP_HOST && env.SMTP_USER && env.SMTP_PASS) {
    const port = Number(env.SMTP_PORT || 465);
    return {
      user: env.SMTP_USER,
      transporter: nodemailer.createTransport({
        host: env.SMTP_HOST,
        port,
        secure: port === 465,
        auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
      }),
    };
  }
  throw new Error(`Email configuration is missing: ${getMailConfig().problems.join('; ')}`);
}

export async function sendAdminMail(opts: { subject: string; html: string; replyTo?: string; attachments?: MailAttachment[] }) {
  const to = parseEmailList(process.env.ADMIN_EMAIL);
  if (to.length === 0) throw new Error('ADMIN_EMAIL is not set.');
  const { user, transporter } = createTransport();

  await transporter.sendMail({
    from: process.env.MAIL_FROM?.trim() || user,
    to,
    replyTo: opts.replyTo,
    subject: opts.subject,
    html: opts.html,
    attachments: opts.attachments,
  });
}
