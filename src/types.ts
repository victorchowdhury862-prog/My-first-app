export type GigCategory =
  | 'all'
  | 'electrical'
  | 'medical'
  | 'mobile'
  | 'web'
  | 'logo'
  | 'video'
  | 'seo'
  | 'ecommerce';

export type EETopicId =
  | 'all-ee'
  | 'power-systems'
  | 'plc-automation'
  | 'power-electronics'
  | 'solar-ev'
  | 'cad-circuits'
  | 'embedded-iot'
  | 'electrician-service';

export interface GigItem {
  id: string;
  title: string;
  fiverrTitle: string;
  category: GigCategory;
  categoryLabel: string;
  eeTopic?: EETopicId;
  eeTopicLabel?: string;
  image: string;
  dimensions: string;
  ctrIncrease: string;
  clicksBeforeAfter: { before: string; after: string };
  sellerLevel: 'New' | 'Level 1' | 'Level 2' | 'Top Rated' | "Fiverr's Choice";
  sellerName: string;
  sellerAvatar: string;
  rating: number;
  reviewsCount: number;
  startingPrice: number;
  headlineHook: string;
  designHighlights: string[];
  colorPalette: { name: string; hex: string }[];
  clientNiche: string;
  deliverables: string[];
  hasSourceFile: boolean;
  testimonial?: {
    author: string;
    country: string;
    comment: string;
    stars: number;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  deliveryTime: string;
  revisions: string;
  popular?: boolean;
  features: { name: string; included: boolean }[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  handle: string;
  role: string;
  location: string;
  avatar: string;
  stars: number;
  comment: string;
  ctrBeforeAfter: string;
  verifiedOrder: boolean;
}
