import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  techStack: string[];
  description: string;
  liveDemoUrl?: string;
  highlight?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  serviceType: string;
  description: string;
  budget: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

export type ViewState = 'home' | 'services' | 'portfolio' | 'about' | 'contact' | 'search';