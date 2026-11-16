'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import type { Iti } from 'intl-tel-input';
import 'intl-tel-input/styles';

import { ASSIST_OPTIONS, JOB_FILE_MAX_BYTES, JOB_FILE_TYPES, formSchemas, type FormType } from '@/lib/forms/schemas';

// Renders the same markup Contact Form 7 produced (wpcf7-* / cfc-input-* classes),
// so the existing theme styles apply unchanged.

type Field = 'name' | 'email' | 'phone' | 'service' | 'message' | 'file';

const FIELDS: Record<FormType, Field[]> = {
  contact: ['name', 'email', 'message'],
  plan: ['name', 'email', 'phone', 'message'],
  job: ['name', 'email', 'message', 'file'],
  'contacts-page': ['name', 'email', 'phone', 'service', 'message'],
};

type Status = 'init' | 'submitting' | 'sent' | 'invalid' | 'failed';

const RESPONSE: Record<Exclude<Status, 'init' | 'submitting'>, string> = {
  sent: 'Thank you for your message. It has been sent.',
  invalid: 'One or more fields have an error. Please check and try again.',
  failed: 'There was an error trying to send your message. Please try again later.',
};

export default function Cf7Form({ type }: { type: FormType }) {
  const fields = FIELDS[type];
  const formRef = useRef<HTMLFormElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const itiRef = useRef<Iti | null>(null);
  const [status, setStatus] = useState<Status>('init');
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  useEffect(() => {
    if (!fields.includes('phone') || !phoneRef.current) return;
    let cancelled = false;
    import('intl-tel-input/intlTelInputWithUtils').then(({ default: intlTelInput }) => {
      if (cancelled || !phoneRef.current) return;
      itiRef.current = intlTelInput(phoneRef.current, { initialCountry: 'us' });
    });
    return () => {
      cancelled = true;
      itiRef.current?.destroy();
      itiRef.current = null;
    };
  }, [fields]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const values: Record<string, string> = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
    };
    if (fields.includes('phone')) values.phone = itiRef.current?.getNumber() || String(data.get('phone') ?? '');
    if (fields.includes('service')) values.service = String(data.get('service') ?? '');
    if (type === 'plan') {
      // The popup shows which package was clicked (set by data-pack, see ThemeScripts).
      values.plan = form.closest('.popup')?.querySelector('.popup-plan__plan')?.textContent?.trim() ?? '';
    }

    const nextErrors: Partial<Record<Field, string>> = {};
    const parsed = formSchemas[type].safeParse(values);
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as Field;
        nextErrors[key] ??= issue.message;
      }
    }
    if (fields.includes('phone') && itiRef.current && values.phone && itiRef.current.isValidNumber() === false) {
      nextErrors.phone ??= 'Please enter a valid phone number.';
    }
    const file = data.get('file');
    if (fields.includes('file')) {
      if (!(file instanceof File) || file.size === 0) nextErrors.file = 'Please fill out this field.';
      else if (!JOB_FILE_TYPES.some((ext) => file.name.toLowerCase().endsWith(ext))) nextErrors.file = 'You are not allowed to upload files of this type.';
      else if (file.size > JOB_FILE_MAX_BYTES) nextErrors.file = 'The uploaded file is too large.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus('invalid');
      return;
    }

    const body = new FormData();
    body.set('type', type);
    for (const [k, v] of Object.entries(values)) body.set(k, v);
    if (file instanceof File && fields.includes('file')) body.set('file', file);
    body.set('website', String(data.get('website') ?? '')); // honeypot

    setStatus('submitting');
    try {
      const res = await fetch('/api/forms/', { method: 'POST', body });
      if (res.ok) {
        setStatus('sent');
        form.reset();
        itiRef.current?.setNumber('');
      } else {
        setStatus(res.status === 400 ? 'invalid' : 'failed');
      }
    } catch {
      setStatus('failed');
    }
  }

  const invalid = (f: Field) => (errors[f] ? ' wpcf7-not-valid' : '');
  const tip = (f: Field) => (errors[f] ? <span className="wpcf7-not-valid-tip" aria-hidden="true">{errors[f]}</span> : null);
  const n = (f: Field) => `cfc-input-0${fields.indexOf(f) + 1}`;

  return (
    <div className="wpcf7 js" lang="en-US" dir="ltr">
      <form
        ref={formRef}
        className={`wpcf7-form ${status === 'submitting' ? 'submitting' : status}`}
        aria-label="Contact form"
        noValidate
        data-status={status}
        onSubmit={onSubmit}
      >
        {/* Honeypot: real visitors never see or fill it. */}
        <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <span className="wpcf7-form-control-wrap" data-name="name">
          <input size={40} className={`wpcf7-form-control wpcf7-text wpcf7-validates-as-required ${n('name')}${invalid('name')}`} aria-required="true" aria-invalid={!!errors.name} placeholder="Name*" type="text" name="name" />
          {tip('name')}
        </span>
        <span className="wpcf7-form-control-wrap" data-name="email">
          <input size={40} className={`wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email ${n('email')}${invalid('email')}`} aria-required="true" aria-invalid={!!errors.email} placeholder="Email*" type="email" name="email" />
          {tip('email')}
        </span>
        {fields.includes('phone') && (
          <span className="wpcf7-form-control-wrap" data-name="phone">
            <input ref={phoneRef} className={`wpcf7-form-control wpcf7-intl_tel wpcf7-validates-as-required wpcf7-intl-tel ${n('phone')}${invalid('phone')}`} aria-required="true" aria-invalid={!!errors.phone} type="tel" name="phone" />
            {tip('phone')}
          </span>
        )}
        {fields.includes('service') && (
          <span className="wpcf7-form-control-wrap" data-name="service">
            <select className={`wpcf7-form-control wpcf7-select wpcf7-validates-as-required ${n('service')}${invalid('service')}`} aria-required="true" aria-invalid={!!errors.service} name="service" defaultValue="">
              <option value="">How can we assist you?</option>
              {ASSIST_OPTIONS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            {tip('service')}
          </span>
        )}
        <span className="wpcf7-form-control-wrap" data-name="message">
          <input size={40} className={`wpcf7-form-control wpcf7-text ${n('message')}${invalid('message')}`} aria-invalid={!!errors.message} placeholder="Message" type="text" name="message" />
          {tip('message')}
        </span>
        {fields.includes('file') && (
          <span className="wpcf7-form-control-wrap" data-name="file">
            <input size={40} className={`wpcf7-form-control wpcf7-file wpcf7-validates-as-required ${n('file')}${invalid('file')}`} accept={JOB_FILE_TYPES.join(',')} aria-required="true" aria-invalid={!!errors.file} type="file" name="file" />
            {tip('file')}
          </span>
        )}
        <span className="btn-submit">
          <input className="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Send" disabled={status === 'submitting'} />
          <span className="wpcf7-spinner"></span>
        </span>
        <div className="wpcf7-response-output" aria-hidden={status === 'init' || status === 'submitting'} role="status">
          {status !== 'init' && status !== 'submitting' ? RESPONSE[status] : null}
        </div>
      </form>
    </div>
  );
}
