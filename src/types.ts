export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  period: string;
  billingText: string;
  featured?: boolean;
  savings?: string;
  badge?: string;
  description: string;
  perks: string[];
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  certifications: string[];
  experience: string;
  specialty: string;
  bio: string;
  image: string;
  stats: { label: string; value: string }[];
}

export interface FacilityZone {
  id: string;
  title: string;
  kicker: string;
  description: string;
  tag: string;
  iconName: 'dumbbell' | 'heart' | 'user' | 'flame' | 'activity' | 'zap';
  specs: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  zone: string;
  category: string;
  aspect: '16:9' | '1:1';
  image: string;
  caption: string;
}

export interface GymEnquiry {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  planId: string;
  fitnessGoal: string;
  preferredBatch: string;
  notes?: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'joined';
}

export interface ScheduleItem {
  batchName: string;
  timeRange: string;
  focus: string;
  days: string;
  badge?: string;
}
