import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Instagram, Linkedin, Dribbble, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: 'Brand Identity',
    budget: '$5k - $10k',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti Burst
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#0EA5E9', '#D97706', '#10B981', '#F43F5E'],
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Contact Copy & Socials */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#5E5963] dark:text-slate-300 font-sans block mb-2">
              Let's Build Together
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black text-[#16141A] dark:text-white tracking-[-0.04em] leading-[0.92] mb-4">
              Initiate a <span className="italic font-serif font-normal text-[#E8502F]">Project</span>
            </h2>
            <p className="text-base text-[#5E5963] dark:text-slate-200 leading-[1.7] font-medium">
              Have a brand identity vision, 3D kinetic campaign, or AI art direction inquiry? Drop a line and let's turn your vision into tactile art.
            </p>
          </div>

          {/* Quick Direct Info */}
          <div className="p-6 rounded-3xl glass-card border border-[#DCCFE8] dark:border-white/10 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#E8502F]/15 text-[#E8502F]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-[#5E5963] dark:text-slate-300 font-bold uppercase tracking-wider">Direct Email</div>
                <a href="mailto:zaid.zaman.design@example.com" className="font-heading font-black text-sm text-[#16141A] dark:text-white hover:text-[#E8502F] transition-colors">
                  zaid.zaman.design@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#E8502F]/15 text-[#E8502F]">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-[#5E5963] dark:text-slate-300 font-bold uppercase tracking-wider">Studio Location</div>
                <div className="font-heading font-black text-sm text-[#16141A] dark:text-white">San Francisco, CA (PST / UTC-8)</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-[#16141A] dark:text-slate-200 mb-3">
              Social Design Outlets
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {[
                { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-[#E8502F]' },
                { name: 'Behance', icon: Globe, href: 'https://behance.net', color: 'hover:text-[#E8502F]' },
                { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-[#E8502F]' },
                { name: 'Dribbble', icon: Dribbble, href: 'https://dribbble.com', color: 'hover:text-[#E8502F]' },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#1A1A1A] text-xs font-heading font-extrabold text-[#16141A] dark:text-slate-100 border border-[#DCCFE8] dark:border-white/10 ${social.color} transition-all hover:scale-105 shadow-2xs`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border border-[#DCCFE8] dark:border-white/10 shadow-xl">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E8502F]/10 text-[#E8502F] flex items-center justify-center border border-[#E8502F]/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[#16141A] dark:text-white">
                Message Received!
              </h3>
              <p className="text-sm text-[#5E5963] dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-[#16141A] dark:text-white">{formData.name}</span>. I've received your project inquiry and will get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'Brand Identity', budget: '$5k - $10k', message: '' });
                }}
                className="btn-primary px-6 py-2.5 font-heading font-bold text-xs"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#16141A] dark:text-white mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#EAE3EF]/60 dark:bg-slate-900 border border-[#DCCFE8] dark:border-white/15 focus:outline-none focus:border-[#E8502F] focus:ring-2 focus:ring-[#E8502F]/20 text-sm font-semibold text-[#16141A] dark:text-white placeholder-[#5E5963] shadow-2xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#16141A] dark:text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#EAE3EF]/60 dark:bg-slate-900 border border-[#DCCFE8] dark:border-white/15 focus:outline-none focus:border-[#E8502F] focus:ring-2 focus:ring-[#E8502F]/20 text-sm font-semibold text-[#16141A] dark:text-white placeholder-[#5E5963] shadow-2xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#16141A] dark:text-white mb-2">
                    Project Category
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#EAE3EF]/60 dark:bg-slate-900 border border-[#DCCFE8] dark:border-white/15 focus:outline-none focus:border-[#E8502F] focus:ring-2 focus:ring-[#E8502F]/20 text-sm font-semibold text-[#16141A] dark:text-white shadow-2xs"
                  >
                    <option value="Brand Identity">Brand Identity &amp; Logo</option>
                    <option value="Re-Branding">Re-Branding Design</option>
                    <option value="3D & Motion">3D Kinetic &amp; Motion Art</option>
                    <option value="UI/UX Design">UI/UX &amp; Web Experience</option>
                    <option value="Generative AI">Generative AI Art Direction</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#16141A] dark:text-white mb-2">
                    Budget Scope
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#EAE3EF]/60 dark:bg-slate-900 border border-[#DCCFE8] dark:border-white/15 focus:outline-none focus:border-[#E8502F] focus:ring-2 focus:ring-[#E8502F]/20 text-sm font-semibold text-[#16141A] dark:text-white shadow-2xs"
                  >
                    <option value="<$5k">&lt; $5,000 USD</option>
                    <option value="$5k - $10k">$5,000 - $10,000 USD</option>
                    <option value="$10k - $25k">$10,000 - $25,000 USD</option>
                    <option value="$25k+">$25,000+ USD</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#16141A] dark:text-white mb-2">
                  Project Brief &amp; Details *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your brand goals, timelines, and visual expectations..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#EAE3EF]/60 dark:bg-slate-900 border border-[#DCCFE8] dark:border-white/15 focus:outline-none focus:border-[#E8502F] focus:ring-2 focus:ring-[#E8502F]/20 text-sm font-medium text-[#16141A] dark:text-white leading-relaxed placeholder-[#5E5963] shadow-2xs"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 font-heading font-extrabold text-base flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Inquiry...
                  </span>
                ) : (
                  <>
                    <span>Submit Project Brief</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
