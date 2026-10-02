import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Trash2,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { GYM_DETAILS, MEMBERSHIP_PLANS } from '../data/gymData';
import { GymEnquiry } from '../types';

interface ContactSectionProps {
  selectedPlanId?: string;
  selectedGoal?: string;
  selectedCoach?: string;
}

const STORAGE_KEY = 'fitness_matters_enquiries';

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedPlanId = 'quarterly',
  selectedGoal = '',
  selectedCoach = '',
}) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [planId, setPlanId] = useState(selectedPlanId);
  const [fitnessGoal, setFitnessGoal] = useState(selectedGoal || 'Muscle Building & Strength');
  const [preferredBatch, setPreferredBatch] = useState('Evening (4:30 PM - 7:30 PM)');
  const [notes, setNotes] = useState('');

  // UI State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReceipt, setSubmittedReceipt] = useState<GymEnquiry | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [showStoredEnquiries, setShowStoredEnquiries] = useState(false);
  const [storedEnquiries, setStoredEnquiries] = useState<GymEnquiry[]>([]);

  // Update plan if selected from outside
  useEffect(() => {
    if (selectedPlanId) {
      setPlanId(selectedPlanId);
    }
  }, [selectedPlanId]);

  useEffect(() => {
    if (selectedGoal) {
      setFitnessGoal(selectedGoal);
    }
  }, [selectedGoal]);

  useEffect(() => {
    if (selectedCoach) {
      setNotes((prev) => (prev ? `${prev} | Coach Request: ${selectedCoach}` : `Coach Request: ${selectedCoach}`));
    }
  }, [selectedCoach]);

  // Load stored inquiries from localStorage
  const loadStored = () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        setStoredEnquiries(JSON.parse(data));
      }
    } catch (e) {
      console.error('Failed to read stored inquiries', e);
    }
  };

  useEffect(() => {
    loadStored();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }

    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    const newEnquiry: GymEnquiry = {
      id: `FM-${Date.now().toString().slice(-6)}`,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      planId,
      fitnessGoal,
      preferredBatch,
      notes: notes.trim() || undefined,
      submittedAt: new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
      status: 'new',
    };

    // Save to localStorage
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      const parsed: GymEnquiry[] = existing ? JSON.parse(existing) : [];
      const updated = [newEnquiry, ...parsed];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setStoredEnquiries(updated);
    } catch (err) {
      console.error('Could not persist to localStorage', err);
    }

    // Simulate swift confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedReceipt(newEnquiry);
      // Reset form fields
      setFullName('');
      setPhone('');
      setEmail('');
      setNotes('');
    }, 450);
  };

  const handleClearAudit = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setStoredEnquiries([]);
    } catch (err) {
      console.error(err);
    }
  };

  const selectedPlanDetails = MEMBERSHIP_PLANS.find((p) => p.id === planId) || MEMBERSHIP_PLANS[1];

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Fitness Matters Gym! I'm interested in joining the gym for the ${selectedPlanDetails.name} (${selectedPlanDetails.price}). Please share trial details!`
    );
    window.open(`https://wa.me/${GYM_DETAILS.contacts.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#121418] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Business Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="eyebrow mb-3">CONTACT US</span>
            <h2 className="font-display uppercase text-4xl sm:text-6xl text-white font-black leading-none mb-6">
              START YOUR <br />
              <span className="text-gradient-brand">JOURNEY TODAY</span>
            </h2>

            <p className="text-sm sm:text-base text-[#9ba1b0] leading-relaxed mb-8 font-sans">
              Have questions regarding membership rates, coaching, or equipment? Reach out directly or drop by 
              our facility at our location. Our team will tour you through the floor and test your initial baseline strength.
            </p>

            {/* Business Contact Cards with Primary Brand Icons */}
            <div className="space-y-4 mb-8">
              {/* Physical Address */}
              <div className="flex items-start gap-4 p-4 rounded-sm bg-[#181b22] border border-white/10 group hover:border-[#e52538] transition-colors">
                <div className="w-10 h-10 rounded-sm bg-[#e52538]/20 border border-[#e52538]/40 text-[#e52538] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading uppercase text-xs tracking-wider font-bold text-white mb-0.5">
                    Physical Address
                  </h4>
                  <p className="text-xs sm:text-sm text-[#9ba1b0] font-sans leading-relaxed">
                    {GYM_DETAILS.address.full}
                  </p>
                  <span className="text-[10px] font-mono text-[#e52538] mt-1 inline-block">
                    Landmark: Central Accessibility & Parking
                  </span>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4 p-4 rounded-sm bg-[#181b22] border border-white/10 group hover:border-[#e52538] transition-colors">
                <div className="w-10 h-10 rounded-sm bg-[#e52538]/20 border border-[#e52538]/40 text-[#e52538] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading uppercase text-xs tracking-wider font-bold text-white mb-0.5">
                    Phone & WhatsApp
                  </h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:${GYM_DETAILS.contacts.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm text-white font-mono hover:text-[#e52538] transition-colors"
                    >
                      {GYM_DETAILS.contacts.phoneFormatted}
                    </a>
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="inline-flex items-center gap-1 text-[11px] font-heading uppercase tracking-wider text-emerald-400 hover:text-emerald-300 font-bold"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-sm bg-[#181b22] border border-white/10 group hover:border-[#e52538] transition-colors">
                <div className="w-10 h-10 rounded-sm bg-[#e52538]/20 border border-[#e52538]/40 text-[#e52538] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading uppercase text-xs tracking-wider font-bold text-white mb-0.5">
                    Email Inquiries
                  </h4>
                  <a
                    href={`mailto:${GYM_DETAILS.contacts.email}`}
                    className="text-xs sm:text-sm text-white hover:text-[#e52538] font-mono transition-colors"
                  >
                    {GYM_DETAILS.contacts.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 rounded-sm bg-[#181b22] border border-white/10 group hover:border-[#e52538] transition-colors">
                <div className="w-10 h-10 rounded-sm bg-[#e52538]/20 border border-[#e52538]/40 text-[#e52538] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading uppercase text-xs tracking-wider font-bold text-white mb-0.5">
                    Gym Hours
                  </h4>
                  <p className="text-xs sm:text-sm text-[#9ba1b0]">
                    Monday – Saturday: <strong className="text-white font-medium">{GYM_DETAILS.hours.weekdays}</strong>
                  </p>
                  <p className="text-xs text-[#9ba1b0]">
                    Sunday: {GYM_DETAILS.hours.sunday}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Enquiry Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#181b22] border-2 border-white/10 rounded-sm p-6 sm:p-9 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#e52538] rounded-full" />
                  <h3 className="font-heading uppercase text-base sm:text-lg font-bold text-white tracking-wide">
                    Membership & Free Assessment Request
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase text-[#e52538] font-bold">
                  LOCATION
                </span>
              </div>

              {/* Confirmation Receipt State */}
              {submittedReceipt ? (
                <div className="py-6 px-4 sm:px-6 bg-[#121418] border border-[#e52538] rounded-sm text-center animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 bg-[#e52538] text-white rounded-sm flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <span className="text-xs font-mono uppercase tracking-widest text-[#e52538] font-bold">
                    RECEIPT #{submittedReceipt.id}
                  </span>
                  <h4 className="font-display uppercase text-3xl font-black text-white mt-1 mb-2">
                    ENQUIRY REGISTERED!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#9ba1b0] max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-white">{submittedReceipt.fullName}</strong>. Your membership request 
                    has been recorded in our front-desk queue. Coach Rohit or our desk team will call you within 2 hours.
                  </p>

                  {/* Summary Breakdown */}
                  <div className="bg-[#181b22] border border-white/10 rounded-sm p-4 text-left max-w-md mx-auto mb-6 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#9ba1b0]">Registered Mobile:</span>
                      <span className="font-mono text-white">{submittedReceipt.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ba1b0]">Selected Plan:</span>
                      <span className="font-heading uppercase font-bold text-[#e52538]">
                        {MEMBERSHIP_PLANS.find((p) => p.id === submittedReceipt.planId)?.name || 'Custom'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ba1b0]">Training Goal:</span>
                      <span className="text-white">{submittedReceipt.fitnessGoal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ba1b0]">Preferred Batch:</span>
                      <span className="text-white">{submittedReceipt.preferredBatch}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSubmittedReceipt(null)}
                      className="btn-ghost text-xs py-2 px-5"
                    >
                      Submit Another Request
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="btn-primary text-xs py-2 px-5 flex items-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Instant WhatsApp Ping</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Active Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  {formError && (
                    <div className="p-3 bg-red-950/60 border border-red-500/50 rounded-sm text-xs text-red-200">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-heading uppercase tracking-wider text-white font-bold mb-1.5">
                        Full Name <span className="text-[#e52538]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Omkar Jadhav"
                        className="w-full bg-[#121418] border border-white/15 focus:border-[#e52538] focus:ring-1 focus:ring-[#e52538] rounded-sm py-2.5 px-3.5 text-sm text-white placeholder-white/30 outline-none transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-heading uppercase tracking-wider text-white font-bold mb-1.5">
                        Phone Number <span className="text-[#e52538]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 94237 00000"
                        className="w-full bg-[#121418] border border-white/15 focus:border-[#e52538] focus:ring-1 focus:ring-[#e52538] rounded-sm py-2.5 px-3.5 text-sm text-white placeholder-white/30 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Plan Selector */}
                    <div>
                      <label className="block text-xs font-heading uppercase tracking-wider text-white font-bold mb-1.5">
                        Membership Plan
                      </label>
                      <select
                        value={planId}
                        onChange={(e) => setPlanId(e.target.value)}
                        className="w-full bg-[#121418] border border-white/15 focus:border-[#e52538] rounded-sm py-2.5 px-3 text-sm text-white outline-none cursor-pointer"
                      >
                        {MEMBERSHIP_PLANS.map((plan) => (
                          <option key={plan.id} value={plan.id} className="bg-[#121418] text-white">
                            {plan.name} — {plan.price} {plan.period}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Batch */}
                    <div>
                      <label className="block text-xs font-heading uppercase tracking-wider text-white font-bold mb-1.5">
                        Preferred Batch
                      </label>
                      <select
                        value={preferredBatch}
                        onChange={(e) => setPreferredBatch(e.target.value)}
                        className="w-full bg-[#121418] border border-white/15 focus:border-[#e52538] rounded-sm py-2.5 px-3 text-sm text-white outline-none cursor-pointer"
                      >
                        <option value="Morning Early (5:30 AM - 8:00 AM)" className="bg-[#121418]">
                          Morning Early (5:30 AM – 8:00 AM)
                        </option>
                        <option value="Morning Standard (8:00 AM - 10:30 AM)" className="bg-[#121418]">
                          Morning Standard (8:00 AM – 10:30 AM)
                        </option>
                        <option value="Ladies Batch (11:00 AM - 1:00 PM)" className="bg-[#121418]">
                          Exclusive Ladies Batch (11:00 AM – 1:00 PM)
                        </option>
                        <option value="Evening Rush (4:30 PM - 7:30 PM)" className="bg-[#121418]">
                          Evening Rush (4:30 PM – 7:30 PM)
                        </option>
                        <option value="Night Owls (7:30 PM - 10:00 PM)" className="bg-[#121418]">
                          Night Owls (7:30 PM – 10:00 PM)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Primary Fitness Goal */}
                  <div>
                    <label className="block text-xs font-heading uppercase tracking-wider text-white font-bold mb-1.5">
                      Your Primary Goal
                    </label>
                    <input
                      type="text"
                      value={fitnessGoal}
                      onChange={(e) => setFitnessGoal(e.target.value)}
                      placeholder="e.g. Muscle Building, Fat Loss, Powerlifting, General Stamina"
                      className="w-full bg-[#121418] border border-white/15 focus:border-[#e52538] rounded-sm py-2.5 px-3.5 text-sm text-white placeholder-white/30 outline-none"
                    />
                  </div>

                  {/* Optional Notes */}
                  <div>
                    <label className="block text-xs font-heading uppercase tracking-wider text-white font-bold mb-1.5">
                      Special Requirements / Injury History (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any prior medical conditions, knee/back issues, or coach preferences..."
                      className="w-full bg-[#121418] border border-white/15 focus:border-[#e52538] rounded-sm py-2 px-3.5 text-sm text-white placeholder-white/30 outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-base py-3.5 shadow-glow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Registering...</span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-[#9ba1b0] pt-1">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Privacy guaranteed · No spam calls</span>
                    </span>
                    <span className="font-mono text-white/50">Storage: Local & Session</span>
                  </div>
                </form>
              )}

              {/* Discreet "View Stored Enquiries" Accordion Toggle requested by prompt */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setShowStoredEnquiries(!showStoredEnquiries)}
                  className="w-full flex items-center justify-between text-xs font-mono text-[#9ba1b0] hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span>Audit Local Inquiries Registry ({storedEnquiries.length})</span>
                  </span>
                  {showStoredEnquiries ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {showStoredEnquiries && (
                  <div className="mt-4 p-4 bg-[#121418] border border-white/10 rounded-sm space-y-3">
                    <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/10">
                      <span className="font-mono text-white/70">Local Database: {STORAGE_KEY}</span>
                      {storedEnquiries.length > 0 && (
                        <button
                          type="button"
                          onClick={handleClearAudit}
                          className="text-red-400 hover:text-red-300 flex items-center gap-1 text-[10px]"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Clear Audit Log</span>
                        </button>
                      )}
                    </div>

                    {storedEnquiries.length === 0 ? (
                      <div className="text-center py-4 text-xs text-[#9ba1b0]">
                        No recorded enquiries in browser storage yet.
                      </div>
                    ) : (
                      <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                        {storedEnquiries.map((item) => (
                          <div
                            key={item.id}
                            className="p-3 bg-[#181b22] border border-white/5 rounded-sm text-xs space-y-1"
                          >
                            <div className="flex justify-between items-center">
                              <strong className="text-white font-heading tracking-wide uppercase">
                                {item.fullName}
                              </strong>
                              <span className="text-[10px] font-mono text-[#e52538]">{item.id}</span>
                            </div>
                            <div className="flex justify-between text-[11px] text-[#9ba1b0]">
                              <span>Tel: {item.phone}</span>
                              <span>{item.submittedAt}</span>
                            </div>
                            <div className="text-[11px] text-white/80">
                              Plan: {item.planId} · Goal: {item.fitnessGoal}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
