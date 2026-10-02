/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { About } from './components/About';
import { Facilities } from './components/Facilities';
import { PricingPlans } from './components/PricingPlans';
import { BmiCalculator } from './components/BmiCalculator';
import { Team } from './components/Team';
import { Gallery } from './components/Gallery';
import { Schedule } from './components/Schedule';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MembershipPlan } from './types';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('quarterly');
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [selectedCoach, setSelectedCoach] = useState<string>('');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPlans = () => {
    const plansElem = document.getElementById('plans');
    if (plansElem) {
      plansElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: MembershipPlan) => {
    setSelectedPlanId(plan.id);
    scrollToContact();
  };

  const handleSelectProgram = (programTitle: string) => {
    setSelectedGoal(programTitle);
    scrollToContact();
  };

  const handleApplyBmiGoal = (goalText: string) => {
    setSelectedGoal(goalText);
    scrollToContact();
  };

  const handleBookCoachSession = (coachName: string) => {
    setSelectedCoach(coachName);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f4f5f8] flex flex-col selection:bg-[#e52538] selection:text-white font-sans">
      {/* Fixed Sticky Header */}
      <Header onJoinClick={scrollToPlans} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onStartTraining={scrollToPlans}
          onOpenVideo={() => setIsVideoModalOpen(true)}
          onContactClick={scrollToContact}
        />

        {/* Stats Strip */}
        <StatsStrip />

        {/* About Section */}
        <About onLearnMore={scrollToContact} />

        {/* Facilities & Training Zones */}
        <Facilities onSelectProgram={handleSelectProgram} />

        {/* Pricing & Membership Plans */}
        <PricingPlans onSelectPlan={handleSelectPlan} />

        {/* Interactive BMI & Fitness Baseline Calculator */}
        <BmiCalculator onApplyGoal={handleApplyBmiGoal} />

        {/* Team & Certified Specialists */}
        <Team onBookSession={handleBookCoachSession} />

        {/* Visual Tour & Gallery */}
        <Gallery />

        {/* Daily Batch Schedule */}
        <Schedule />

        {/* Contact & Lead Capture Form */}
        <ContactSection
          selectedPlanId={selectedPlanId}
          selectedGoal={selectedGoal}
          selectedCoach={selectedCoach}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cinematic Gym Tour Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onStartTraining={() => {
          setIsVideoModalOpen(false);
          scrollToPlans();
        }}
      />

      {/* Quick WhatsApp Inquiry Floating Trigger */}
      <FloatingWhatsApp />
    </div>
  );
}
