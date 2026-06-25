import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { api } from '../api.js';
import { useLang } from '../i18n/LanguageContext.jsx';

const empty = { name: '', email: '', message: '' };

export default function Contact({ profile, live }) {
  const { t } = useLang();
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // When the backend API isn't reachable (e.g. a static GitHub Pages deploy),
  // hand the message off to the visitor's email client instead of failing.
  const mailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio contact — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus({ state: 'ok', msg: t.contact.okMailto });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!live) { mailtoFallback(); return; }
    setStatus({ state: 'sending', msg: t.contact.sending });
    try {
      const res = await api.contact(form);
      setStatus({ state: 'ok', msg: res.stored ? t.contact.okStored : t.contact.okDemo });
      setForm(empty);
    } catch (err) {
      mailtoFallback();
    }
  };

  return (
    <Reveal>
      <section id="contact" className="block contact">
        <h2><span className="hash">#</span> {t.headings.contact}</h2>
        <p className="lead">{t.contact.lead}</p>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="row">
            <input name="name" value={form.name} onChange={onChange} placeholder={t.contact.name} required maxLength={120} />
            <input name="email" type="email" value={form.email} onChange={onChange} placeholder={t.contact.email} required maxLength={200} />
          </div>
          <textarea name="message" value={form.message} onChange={onChange} placeholder={t.contact.message} required rows={5} maxLength={4000} />
          <button className="btn primary" type="submit" disabled={status.state === 'sending'}>
            {status.state === 'sending' ? t.contact.sending : t.contact.send}
          </button>
          {status.msg && <p className={`form-status ${status.state}`}>{status.msg}</p>}
        </form>

        <div className="cta">
          <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
          {profile.cv && <a className="btn" href={profile.cv} download>{t.hero.cv}</a>}
          <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
    </Reveal>
  );
}
