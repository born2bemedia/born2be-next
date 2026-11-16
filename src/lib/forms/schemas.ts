import { z } from 'zod';

// Same forms as the WordPress site (Contact Form 7). Used on the client and in /api/forms.
export const FORM_TYPES = ['contact', 'plan', 'job', 'contacts-page'] as const;
export type FormType = (typeof FORM_TYPES)[number];

export const ASSIST_OPTIONS = ['SEO Promotion', 'SMM Solutions', 'SMO Services', 'SERM Marketing', 'Other'] as const;

export const JOB_FILE_TYPES = ['.doc', '.docx', '.pdf'];
// Vercel limits a request body to 4.5 MB, so the CV has to stay below that.
export const JOB_FILE_MAX_BYTES = 4 * 1024 * 1024;

const REQUIRED = 'Please fill out this field.';
const name = z.string().trim().min(1, REQUIRED).max(200);
const email = z.string().trim().min(1, REQUIRED).email('Please enter an email address.').max(200);
const message = z.string().trim().max(5000).optional().default('');
const phone = z.string().trim().min(5, 'Please enter a valid phone number.').max(40);

export const formSchemas = {
  contact: z.object({ name, email, message }),
  plan: z.object({ name, email, phone, message, plan: z.string().trim().max(200).optional().default('') }),
  job: z.object({ name, email, message }),
  'contacts-page': z.object({
    name,
    email,
    phone,
    service: z.enum(ASSIST_OPTIONS, { message: 'Please choose an option.' }),
    message,
  }),
} satisfies Record<FormType, z.ZodType>;

export type FormValues<T extends FormType> = z.infer<(typeof formSchemas)[T]>;
