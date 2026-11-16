// Runs once when the server starts (locally and on Vercel). The site works without mail settings,
// only the forms cannot send, so warn loudly in the logs instead of failing the deploy.
export async function register() {
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;
  const { getMailConfig } = await import('@/lib/mail-config');
  const { mode, problems } = getMailConfig();
  if (problems.length) {
    console.warn(`[forms] Emails from the site forms will NOT be sent: ${problems.join('; ')}. See .env.example.`);
  } else {
    console.info(`[forms] Form emails are sent via ${mode}.`);
  }
}
