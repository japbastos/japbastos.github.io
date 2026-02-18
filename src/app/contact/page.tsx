'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
// @ts-ignore
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const token = await executeRecaptcha('contact_form');
      
      const formData = new URLSearchParams();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('recaptchaToken', token);

      await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      // With mode: 'no-cors', we can't read response data, 
      // but a successful POST will trigger the script.
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="mb-6 rounded-full bg-green-500/10 p-4 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
          <CheckCircle2 className="h-12 w-12 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold">Message Sent!</h2>
        <p className="mt-2 text-zinc-400">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
        <Button 
          onClick={() => setStatus('idle')}
          variant="outline"
          className="mt-8 border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-md w-full space-y-6">
      {status === 'error' && (
        <div className="flex items-center gap-3 rounded-xl bg-red-500/10 p-4 text-sm text-red-400 border border-red-500/20">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-600 dark:text-zinc-300">
            Name
          </label>
          <Input 
            id="name" 
            placeholder="How should I call you?" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-zinc-100 dark:bg-zinc-900/50 border-zinc-200 dark:border-white/10 focus:border-purple-500/50 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-600 dark:text-zinc-300">
            Email
          </label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Where can I reply to?" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-zinc-100 dark:bg-zinc-900/50 border-zinc-200 dark:border-white/10 focus:border-purple-500/50 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-600 dark:text-zinc-300">
            Message
          </label>
          <Textarea 
            id="message" 
            placeholder="What's on your mind?" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5} 
            className="bg-zinc-100 dark:bg-zinc-900/50 border-zinc-200 dark:border-white/10 focus:border-purple-500/50 transition-colors resize-none"
          />
        </div>
      </div>

      <div className="flex justify-center md:justify-start">
        <Button
          type="submit"
          disabled={status === 'loading'}
          className="bg-brand-secondary hover:bg-purple-600 w-full md:w-auto rounded-xl px-6 py-3 text-base font-semibold text-white transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(151,74,170,0.3)] h-auto disabled:opacity-70"
        >
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </Button>
      </div>
      
      <p className="mt-4 text-[10px] text-zinc-500 text-center">
        This site is protected by reCAPTCHA and the Google{' '}
        <a href="https://policies.google.com/privacy" className="underline hover:text-zinc-400">Privacy Policy</a> and{' '}
        <a href="https://policies.google.com/terms" className="underline hover:text-zinc-400">Terms of Service</a> apply.
      </p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <GoogleReCaptchaProvider 
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      <section className="centred container px-6 py-6 md:py-10">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Get in Touch
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            Have a project in mind or just want to chat? <br/> Send me a message and I'll get back to you soon!
          </p>
        </div>
   
        <ContactForm />
      </section>
    </GoogleReCaptchaProvider>
  );
}
