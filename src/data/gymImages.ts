/**
 * Curated high-resolution fitness photography and graphics
 * Specifically selected to match the user's provided images:
 * 1. Modern luxury dark gym interior with "DISCIPLINE TODAY STRENGTH TOMORROW" wall, dumbbell racks & benches
 * 2. High-intensity athlete performing battle ropes conditioning in a dark power rack arena
 * Plus complementary Olympic lifting, personal training, and cardio deck photography.
 */

export interface GymPhoto {
  id: string;
  title: string;
  category: 'interior' | 'conditioning' | 'strength' | 'coaching' | 'cardio';
  url: string;
  alt: string;
  tag: string;
  caption: string;
}

export const GYM_PHOTOS = {
  // Matches User Image 2: Luxury Dark Gym Interior with "DISCIPLINE TODAY STRENGTH TOMORROW" aesthetic
  facilityInterior: {
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1400&auto=format&fit=crop',
    alt: 'Modern luxury dark gym floor with racks, workout benches, and motivational wall',
    tag: 'TRAINING FLOOR',
    title: 'Discipline Today · Strength Tomorrow',
    caption: '5,000 sq. ft. of dark industrial rubber flooring, precision benches, and selectorized machines.',
  },

  // Matches User Image 1: Muscular athlete slamming battle ropes with focused expression
  battleRopesAthlete: {
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    alt: 'Muscular athlete performing heavy battle ropes conditioning in front of power rack',
    tag: 'METABOLIC CONDITIONING',
    title: 'High-Velocity Battle Ropes Arena',
    caption: 'Explosive metabolic work capacity, core endurance, and full-body conditioning.',
  },

  // Heavy Olympic Barbell & Squat Cage
  heavyStrengthBarbell: {
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    alt: 'Olympic barbell loaded with bumper plates in dark gym setting with chalk dust',
    tag: 'HEAVY IRON',
    title: 'Olympic Free-Weight Bay',
    caption: 'Heavy-gauge power racks, deadlift platforms, and calibrated bumper plates up to 300 KG.',
  },

  // 1-on-1 Personal Coaching Mentorship
  personalTrainingCoach: {
    url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
    alt: 'Certified trainer supervising dumbbell exercise with form correction',
    tag: '1-ON-1 COACHING',
    title: 'Elite Certified Mentorship',
    caption: 'Personalized biomechanics guidance, progressive overload tracking, and nutrition planning.',
  },

  // Dumbbell Tier Rack in Ambient Lighting
  dumbbellBay: {
    url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop',
    alt: 'Rows of precision urethane dumbbells from 2.5kg to 50kg on multi-tier racks',
    tag: 'FREE WEIGHTS',
    title: 'Calibrated Dumbbell Deck (2.5KG – 50KG)',
    caption: 'Full progressive increments with ergonomic knurled steel grips and shock-absorbing flooring.',
  },

  // Cardio Deck & Conditioning
  cardioDeck: {
    url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Row of commercial treadmills and endurance machines in atmospheric gym lighting',
    tag: 'ENDURANCE & RECOVERY',
    title: 'Commercial Cardio Deck',
    caption: 'Touchscreen consoles, heart-rate telemetry, spin bikes, and air assault rowers.',
  },

  // Coaches Portraits
  coaches: {
    rohit: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    snehal: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    ajay: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
  },
};
