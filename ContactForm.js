'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('contact_messages').insert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
      ]);

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg(
        err?.message ||
          'Something went wrong. Please check your Supabase setup or try again.'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm uppercase tracking-widest text-muted mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full bg-surface2 border border-white/10 focus:border-primary rounded-md px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm uppercase tracking-widest text-muted mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full bg-surface2 border border-white/10 focus:border-primary rounded-md px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm uppercase tracking-widest text-muted mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full bg-surface2 border border-white/10 focus:border-primary rounded-md px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm uppercase tracking-widest text-muted mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us what you're looking for..."
          className="w-full bg-surface2 border border-white/10 focus:border-primary rounded-md px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-primary hover:bg-primaryDark disabled:opacity-60 transition-all duration-200 text-white font-semibold uppercase tracking-widest text-sm px-8 py-4 rounded-md flex items-center justify-center gap-2"
      >
        {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <div className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 border border-green-400/30 rounded-md px-4 py-3">
          <CheckCircle2 size={18} />
          Thanks! Your message has been received. We&apos;ll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-start gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/30 rounded-md px-4 py-3">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}
    </form>
  );
}
