import { GigItem, PricingPlan, TestimonialItem } from '../types';

export const GIGS_DATA: GigItem[] = [
  {
    id: 'gig-web-design',
    title: 'Modern Responsive Web Design & WordPress',
    fiverrTitle: 'I will design modern responsive wordpress website or landing page',
    category: 'web',
    categoryLabel: 'Web & Tech',
    image: '/src/assets/images/fiverr_web_design_gig_1789058231654.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+340%',
    clicksBeforeAfter: { before: '1.2% (14 clicks/wk)', after: '5.3% (62 clicks/wk)' },
    sellerLevel: 'Top Rated',
    sellerName: 'alex_webcraft',
    sellerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 4.98,
    reviewsCount: 684,
    startingPrice: 85,
    headlineHook: 'RESPONSIVE WEB DESIGN',
    designHighlights: [
      'Multi-device 3D composition (desktop + mobile) proving responsiveness instantly',
      'High-contrast emerald glow contrasting dark slate background',
      'Minimal text hierarchy: under 15% text coverage to respect Fiverr guidelines',
      'Mobile safe-zone tested: zero essential elements cut off by mobile app overlays'
    ],
    colorPalette: [
      { name: 'Emerald Glow', hex: '#10B981' },
      { name: 'Deep Slate', hex: '#0F172A' },
      { name: 'Cyan Accent', hex: '#06B6D4' },
      { name: 'Clean White', hex: '#FFFFFF' }
    ],
    clientNiche: 'WordPress & Elementor Developer',
    deliverables: ['1280x769 Ultra HD PNG', 'Lossless WebP', 'Layered Figma / PSD Source File', 'Commercial Rights'],
    hasSourceFile: true,
    testimonial: {
      author: 'Alexandre P.',
      country: 'France',
      comment: 'Within 48 hours of replacing my gig image with this design, my daily impressions doubled and I booked 4 direct orders without any buyer messaging first!',
      stars: 5
    }
  },
  {
    id: 'gig-logo-branding',
    title: 'Minimalist Luxury Logo & Brand Identity',
    fiverrTitle: 'I will create modern minimalist luxury logo and complete brand identity',
    category: 'logo',
    categoryLabel: 'Graphics & Design',
    image: '/src/assets/images/fiverr_logo_brand_gig_1789058248799.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+290%',
    clicksBeforeAfter: { before: '0.9% (11 clicks/wk)', after: '3.8% (49 clicks/wk)' },
    sellerLevel: 'Level 2',
    sellerName: 'studio_monochrome',
    sellerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5.0,
    reviewsCount: 412,
    startingPrice: 65,
    headlineHook: 'MINIMALIST LUXURY LOGO',
    designHighlights: [
      'Embossed gold foil stationery mockup signifying high-ticket luxury',
      'Clean negative space aesthetic matching premium corporate clients',
      'Strictly avoids cheesy stock badges and fake Fiverr choice icons',
      'Central optical anchor commanding immediate focus in competitive search grids'
    ],
    colorPalette: [
      { name: 'Champagne Gold', hex: '#D4AF37' },
      { name: 'Charcoal Matte', hex: '#1E293B' },
      { name: 'Warm Cream', hex: '#FDFBF7' },
      { name: 'Pure Ink', hex: '#09090B' }
    ],
    clientNiche: 'Graphic Designer & Brand Strategist',
    deliverables: ['1280x769 High Res JPG', 'Transparent PNG', 'Adobe Illustrator vector source', '3D Presentation Mockup'],
    hasSourceFile: true,
    testimonial: {
      author: 'Sarah Jenkins',
      country: 'United Kingdom',
      comment: 'My average order value jumped from $35 to $120. Clients perceive my gig as high-end now simply because the cover thumbnail screams premium agency quality.',
      stars: 5
    }
  },
  {
    id: 'gig-video-editing',
    title: 'Viral Video Editing for YouTube & TikTok',
    fiverrTitle: 'I will edit viral youtube shorts, tiktok reels, and podcast videos',
    category: 'video',
    categoryLabel: 'Video & Animation',
    image: '/src/assets/images/fiverr_video_editing_gig_1789058281994.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+415%',
    clicksBeforeAfter: { before: '1.4% (18 clicks/wk)', after: '7.2% (98 clicks/wk)' },
    sellerLevel: 'Top Rated',
    sellerName: 'cutflow_vids',
    sellerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 4.97,
    reviewsCount: 923,
    startingPrice: 45,
    headlineHook: 'VIRAL VIDEO EDITING',
    designHighlights: [
      'High-saturation neon accents engineered to stop fast-scrolling buyers',
      'Dynamic playhead and timeline graphic showing video editing craft',
      'Bold sans-serif typography visible even on small mobile screen grids',
      'Ultra HD quality badge compliant with platform content policy'
    ],
    colorPalette: [
      { name: 'Electric Violet', hex: '#8B5CF6' },
      { name: 'Neon Amber', hex: '#F59E0B' },
      { name: 'Cyber Magenta', hex: '#EC4899' },
      { name: 'Obsidian Black', hex: '#0B0F17' }
    ],
    clientNiche: 'Shorts & Longform Video Editor',
    deliverables: ['1280x769 Master Thumbnail', 'Fiverr Video Cover Frame', 'Source PSD file', 'Mobile safe version'],
    hasSourceFile: true,
    testimonial: {
      author: 'Marcus Vance',
      country: 'United States',
      comment: 'Video editing is the most crowded niche on Fiverr. This image literally pulled me out of page 12 straight to the first row of search results.',
      stars: 5
    }
  },
  {
    id: 'gig-seo-traffic',
    title: 'Rank #1 SEO & Monthly Backlinks Surge',
    fiverrTitle: 'I will do monthly seo service to rank your website number 1 on google',
    category: 'seo',
    categoryLabel: 'Digital Marketing',
    image: '/src/assets/images/fiverr_seo_growth_gig_1789058263723.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+320%',
    clicksBeforeAfter: { before: '0.8% (9 clicks/wk)', after: '3.6% (41 clicks/wk)' },
    sellerLevel: "Fiverr's Choice",
    sellerName: 'growth_surge_seo',
    sellerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    rating: 4.99,
    reviewsCount: 540,
    startingPrice: 95,
    headlineHook: 'RANK #1 ON GOOGLE',
    designHighlights: [
      'Vibrant 3D ascending analytics trajectory providing visual proof of results',
      'Deep navy and electric cyan contrast maximizing search visibility',
      'Concise outcome-driven messaging that speaks straight to business ROI',
      'Clean negative space leaving margin for Fiverr favorite heart and title'
    ],
    colorPalette: [
      { name: 'Electric Cyan', hex: '#06B6D4' },
      { name: 'Deep Indigo', hex: '#1E1B4B' },
      { name: 'Growth Green', hex: '#22C55E' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    clientNiche: 'SEO Consultant & Link Builder',
    deliverables: ['1280x769 PNG & WebP', 'Editable Figma Source File', 'Custom Icon Set', 'A/B Test Variant'],
    hasSourceFile: true,
    testimonial: {
      author: 'David Meyer',
      country: 'Germany',
      comment: 'Clients tell me all the time: "Your gig looked by far the most professional in the search result." Worth 100x what I paid for the thumbnail.',
      stars: 5
    }
  },
  {
    id: 'gig-mobile-app',
    title: 'Mobile App UI/UX Design & Prototype',
    fiverrTitle: 'I will design modern mobile app ui ux in figma for ios and android',
    category: 'mobile',
    categoryLabel: 'Mobile & UI/UX',
    image: '/src/assets/images/fiverr_mobile_app_gig_1789058338997.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+375%',
    clicksBeforeAfter: { before: '1.1% (15 clicks/wk)', after: '5.2% (70 clicks/wk)' },
    sellerLevel: 'Level 2',
    sellerName: 'uiux_craft',
    sellerAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    rating: 5.0,
    reviewsCount: 318,
    startingPrice: 120,
    headlineHook: 'MOBILE APP UI/UX',
    designHighlights: [
      'Dual clay iPhone mockups showcasing realistic fintech app screens',
      'Modern glassmorphic purple ambient illumination',
      'Balanced typographic focal point with crisp letter spacing',
      'Communicates modern product design expertise in a single glance'
    ],
    colorPalette: [
      { name: 'Ultra Violet', hex: '#7C3AED' },
      { name: 'Royal Blue', hex: '#2563EB' },
      { name: 'Slate Dark', hex: '#0F172A' },
      { name: 'Crystal White', hex: '#F8FAFC' }
    ],
    clientNiche: 'Figma UI/UX Product Designer',
    deliverables: ['1280x769 Master Cover', 'Figma Presentation Kit', 'Full 3D device renders', 'Vector SVG assets'],
    hasSourceFile: true,
    testimonial: {
      author: 'Chloe Dupont',
      country: 'Canada',
      comment: 'My conversion rate went up immediately. Prospective tech founders take my gig much more seriously now with this sleek presentation.',
      stars: 5
    }
  },
  {
    id: 'gig-shopify-store',
    title: 'High-Converting Shopify Store & Dropshipping',
    fiverrTitle: 'I will build a high converting automated shopify dropshipping store',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    image: '/src/assets/images/fiverr_ecommerce_store_gig_1789058359247.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+310%',
    clicksBeforeAfter: { before: '1.3% (17 clicks/wk)', after: '5.4% (73 clicks/wk)' },
    sellerLevel: 'Top Rated',
    sellerName: 'ecom_titan',
    sellerAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80',
    rating: 4.96,
    reviewsCount: 780,
    startingPrice: 150,
    headlineHook: 'HIGH CONVERTING SHOPIFY STORE',
    designHighlights: [
      'Vibrant 3D shopping cart and sales notification symbols signaling profitability',
      'Emerald green conversion aura triggering psychological trust and revenue',
      'Ultra legible headline that cuts through competitive clutter',
      'Strict adherence to the 20% text rule with zero blurry screenshots'
    ],
    colorPalette: [
      { name: 'Shopify Green', hex: '#10B981' },
      { name: 'Graphite Black', hex: '#111827' },
      { name: 'Mint Accent', hex: '#34D399' },
      { name: 'Snow White', hex: '#FFFFFF' }
    ],
    clientNiche: 'Shopify Partner & E-commerce Architect',
    deliverables: ['1280x769 Cover Thumbnail', '2 Matching PDF Carousel Slides', 'Source Figma File', 'Social Banner'],
    hasSourceFile: true,
    testimonial: {
      author: 'Liam O’Connor',
      country: 'Australia',
      comment: 'I was getting tired of competing with low-ball $10 gigs. This thumbnail positioned me as a true Shopify developer, allowing me to charge $150+ starting!',
      stars: 5
    }
  },
  {
    id: 'gig-medicine-tracker',
    title: 'Medicine Reminder & Pill Tracker App UI/UX',
    fiverrTitle: 'I will design modern medicine reminder and pill tracker mobile app ui ux in figma',
    category: 'medical',
    categoryLabel: 'Medicine & Health Apps',
    image: '/src/assets/images/fiverr_med_tracker_gig_1789058932327.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+390%',
    clicksBeforeAfter: { before: '0.9% (12 clicks/wk)', after: '4.8% (64 clicks/wk)' },
    sellerLevel: 'Top Rated',
    sellerName: 'medapp_studio',
    sellerAvatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80',
    rating: 5.0,
    reviewsCount: 428,
    startingPrice: 110,
    headlineHook: 'MEDICINE REMINDER APP UI',
    designHighlights: [
      '3D floating iPhone screen showing medication schedule, pill dosage alerts, and daily adherence rings',
      'Clinical cyan and tranquil navy theme inspiring immediate trust and health authority',
      'Clean 3D capsule graphics establishing unambiguous category relevance at thumbnail scale',
      'Tested under 15% text coverage to pass Fiverr automated quality screening with zero warnings'
    ],
    colorPalette: [
      { name: 'Medical Cyan', hex: '#06B6D4' },
      { name: 'Clinical Navy', hex: '#0F172A' },
      { name: 'Vital Teal', hex: '#14B8A6' },
      { name: 'Sanitary White', hex: '#FFFFFF' }
    ],
    clientNiche: 'HealthTech & Medical App Product Designer',
    deliverables: ['1280x769 Ultra HD PNG', 'Layered Figma Source File', '3D Pill & Device Mockups', 'Commercial Rights'],
    hasSourceFile: true,
    testimonial: {
      author: 'Dr. Evelyn Reed',
      country: 'United States',
      comment: 'Medical apps demand trust. This gig image redesign took my conversion rate from 1.1% to 5.4%. Clients immediately see medical grade professionalism!',
      stars: 5
    }
  },
  {
    id: 'gig-telemedicine-consult',
    title: 'Telemedicine & Doctor Consultation App',
    fiverrTitle: 'I will design telemedicine doctor video consultation and appointment app ui ux',
    category: 'medical',
    categoryLabel: 'Medicine & Health Apps',
    image: '/src/assets/images/fiverr_telemedicine_gig_1789058965532.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+440%',
    clicksBeforeAfter: { before: '1.0% (14 clicks/wk)', after: '5.9% (83 clicks/wk)' },
    sellerLevel: "Fiverr's Choice",
    sellerName: 'healthui_pro',
    sellerAvatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80',
    rating: 4.99,
    reviewsCount: 615,
    startingPrice: 135,
    headlineHook: 'DOCTOR CONSULTATION APP',
    designHighlights: [
      'Interactive 3D doctor video call UI screen paired with digital stethoscope and patient card',
      'Verified doctor badge graphics compliant with Fiverr TOS (no misleading platform badges)',
      'High-contrast teal & slate contrast optimized for high click-through in healthcare categories',
      'Centered focal layout guaranteeing key information remains untouched by mobile app search crops'
    ],
    colorPalette: [
      { name: 'Doctor Teal', hex: '#0D9488' },
      { name: 'Hospital Slate', hex: '#1E293B' },
      { name: 'Health Emerald', hex: '#10B981' },
      { name: 'Pure Clean White', hex: '#FFFFFF' }
    ],
    clientNiche: 'Telehealth & Digital Health UX Specialist',
    deliverables: ['1280x769 Master Gig Cover', 'Lossless WebP', 'Editable Figma UI Kit', 'Fiverr Gallery Slider 2 & 3'],
    hasSourceFile: true,
    testimonial: {
      author: 'Kareem Mansour',
      country: 'United Arab Emirates',
      comment: 'I closed two enterprise telehealth contracts within 3 weeks of updating to this thumbnail. Buyers literally mentioned the cover gave them instant confidence.',
      stars: 5
    }
  },
  {
    id: 'gig-pharmacy-delivery',
    title: 'Online Pharmacy & Medicine Delivery App',
    fiverrTitle: 'I will design 24/7 online pharmacy and medicine delivery app in figma',
    category: 'medical',
    categoryLabel: 'Medicine & Health Apps',
    image: '/src/assets/images/fiverr_pharmacy_gig_1789058980848.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+360%',
    clicksBeforeAfter: { before: '0.8% (10 clicks/wk)', after: '4.2% (56 clicks/wk)' },
    sellerLevel: 'Level 2',
    sellerName: 'pharma_flow',
    sellerAvatar: 'https://images.unsplash.com/photo-1594824813501-48358c8e653a?w=150&auto=format&fit=crop&q=80',
    rating: 4.95,
    reviewsCount: 290,
    startingPrice: 125,
    headlineHook: 'PHARMACY & RX DELIVERY',
    designHighlights: [
      'E-pharmacy checkout screen with prescription Rx upload interface and live rider tracking map',
      'Realistic 3D prescription medicine bottle and delivery badge that pop off the dark backdrop',
      'Clear legible text hierarchy: readable even in 200px smartphone search thumbnails',
      'Designed to attract pharmacy owners, medicine wholesalers, and digital health startups'
    ],
    colorPalette: [
      { name: 'Rx Pharmacy Green', hex: '#10B981' },
      { name: 'Midnight Medical', hex: '#0B132B' },
      { name: 'Prescription Cyan', hex: '#38BDF8' },
      { name: 'Ivory Light', hex: '#F8FAFC' }
    ],
    clientNiche: 'E-Pharmacy & On-Demand Delivery Designer',
    deliverables: ['1280x769 Ultra HD Cover', 'Figma Source File', 'Custom 3D Pill Bottle Assets', 'A/B Test Variant'],
    hasSourceFile: true,
    testimonial: {
      author: 'Sophia Rossi',
      country: 'Italy',
      comment: 'Top-tier work! This cover looks like it was designed by a Fortune 500 agency. Click-through rate shot up dramatically in the healthcare app design search.',
      stars: 5
    }
  },
  {
    id: 'gig-electrician-service',
    title: 'Electrician Booking & Service App UI/UX',
    fiverrTitle: 'I will design modern electrician booking and electrical service app in figma',
    category: 'electrical',
    categoryLabel: 'Electrical & Energy Apps',
    eeTopic: 'electrician-service',
    eeTopicLabel: 'Electrician & Field Services',
    image: '/src/assets/images/fiverr_electrician_app_gig_1789059005476.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+420%',
    clicksBeforeAfter: { before: '0.9% (11 clicks/wk)', after: '4.9% (68 clicks/wk)' },
    sellerLevel: 'Top Rated',
    sellerName: 'spark_craft',
    sellerAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    rating: 4.98,
    reviewsCount: 382,
    startingPrice: 115,
    headlineHook: 'ELECTRICIAN SERVICE APP UI',
    designHighlights: [
      '3D floating device screen displaying instant electrician dispatch scheduling & circuit diagnostics',
      'High-voltage electric blue and warm amber lightning accents driving high contrast in search feeds',
      'Clean technician dispatch icons communicating home electrical service instantly',
      'Engineered within 15% text coverage to respect Fiverr 2026 image quality guidelines'
    ],
    colorPalette: [
      { name: 'Electric Voltage Blue', hex: '#2563EB' },
      { name: 'Spark Amber', hex: '#F59E0B' },
      { name: 'Midnight Circuit', hex: '#0B0F19' },
      { name: 'Clean White', hex: '#FFFFFF' }
    ],
    clientNiche: 'Trades & Home Service App UI/UX Designer',
    deliverables: ['1280x769 Ultra HD PNG', 'Layered Figma Source File', '3D Device Renders', 'Commercial Rights'],
    hasSourceFile: true,
    testimonial: {
      author: 'Marcus Vance',
      country: 'United States',
      comment: 'Electrical contractors looking for custom dispatch apps immediately click on this. My inquiries shot up from 2 a week to 8 high-paying project leads!',
      stars: 5
    }
  },
  {
    id: 'gig-electrical-calculator',
    title: 'Electrical Engineering & Wire Sizing Calculator App',
    fiverrTitle: 'I will design electrical engineering load calculator and wire sizing app ui ux',
    category: 'electrical',
    categoryLabel: 'Electrical & Energy Apps',
    eeTopic: 'cad-circuits',
    eeTopicLabel: 'Circuits, Formulas & Wire Sizing',
    image: '/src/assets/images/fiverr_electrical_calc_gig_1789059023212.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+380%',
    clicksBeforeAfter: { before: '1.2% (16 clicks/wk)', after: '5.8% (77 clicks/wk)' },
    sellerLevel: "Fiverr's Choice",
    sellerName: 'volt_engineer',
    sellerAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
    rating: 5.0,
    reviewsCount: 512,
    startingPrice: 140,
    headlineHook: 'ELECTRICAL CALCULATOR APP',
    designHighlights: [
      'High-tech dark mode mobile UI showing schematic load calculations, Ohm law formulas, and voltage drop dials',
      'Vibrant electric neon yellow highlights against graphite carbon background for unmissable contrast',
      'Clean professional engineering iconography conveying precision and technical authority',
      'Zero edge clutter: 70px outer safe-zone margins prevent mobile search clipping'
    ],
    colorPalette: [
      { name: 'Neon Volt Yellow', hex: '#EAB308' },
      { name: 'Graphite Carbon', hex: '#18181B' },
      { name: 'Circuit Slate', hex: '#334155' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    clientNiche: 'Engineering & Calculator Tool UX Specialist',
    deliverables: ['1280x769 Master Gig Cover', 'Editable Figma UI System', 'Vector Circuit Icons', 'A/B Test Variant'],
    hasSourceFile: true,
    testimonial: {
      author: 'Sven Lindqvist',
      country: 'Sweden',
      comment: 'The electrical engineering niche is crowded with ugly screenshot thumbnails. This cover instantly established me as a high-end UI expert. Ranked #1 within a month!',
      stars: 5
    }
  },
  {
    id: 'gig-solar-smart-electrical',
    title: 'Solar Energy & Smart Electrical Home App',
    fiverrTitle: 'I will design smart home electrical solar energy monitoring and ev charger app',
    category: 'electrical',
    categoryLabel: 'Electrical & Energy Apps',
    eeTopic: 'solar-ev',
    eeTopicLabel: 'CleanTech, Solar & Smart Grid',
    image: '/src/assets/images/fiverr_solar_electrical_gig_1789059054353.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+460%',
    clicksBeforeAfter: { before: '0.8% (12 clicks/wk)', after: '5.2% (75 clicks/wk)' },
    sellerLevel: 'Level 2',
    sellerName: 'greenwatt_ux',
    sellerAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 4.97,
    reviewsCount: 265,
    startingPrice: 130,
    headlineHook: 'SOLAR & SMART ELECTRICAL APP',
    designHighlights: [
      '3D glassmorphic energy dashboard with live solar generation dial and EV charging metrics',
      'Eco-electric green energy gradient with high visual punch in dark mode search views',
      'Fiverr compliant minimal text hierarchy guaranteeing maximum readability on 375px mobile screens',
      'Showcases clean IoT connected device management flow at a single glance'
    ],
    colorPalette: [
      { name: 'Eco Electric Green', hex: '#22C55E' },
      { name: 'Solar Gold', hex: '#F59E0B' },
      { name: 'Space Indigo', hex: '#0F172A' },
      { name: 'Clean White', hex: '#FFFFFF' }
    ],
    clientNiche: 'CleanTech & Smart Home IoT Product Designer',
    deliverables: ['1280x769 Ultra HD Cover', 'Figma Presentation System', '3D Energy Dial Components', 'Commercial License'],
    hasSourceFile: true,
    testimonial: {
      author: 'David Chen',
      country: 'Singapore',
      comment: 'Solar companies and EV startup founders love this gig presentation. It immediately conveys modern CleanTech expertise.',
      stars: 5
    }
  },
  {
    id: 'gig-ev-charging',
    title: 'EV Charging Station & Battery Manager App',
    fiverrTitle: 'I will design ev charging station finder and battery management app in figma',
    category: 'electrical',
    categoryLabel: 'Electrical & Energy Apps',
    eeTopic: 'solar-ev',
    eeTopicLabel: 'EV Mobility & Battery Systems',
    image: '/src/assets/images/ev_charging_app_1789059111241.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+450%',
    clicksBeforeAfter: { before: '0.8% (12 clicks/wk)', after: '5.4% (81 clicks/wk)' },
    sellerLevel: 'Top Rated',
    sellerName: 'ev_designlab',
    sellerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5.0,
    reviewsCount: 470,
    startingPrice: 135,
    headlineHook: 'EV CHARGING & BATTERY APP',
    designHighlights: [
      'Live charging telemetry gauge with kW flow rate, station route mapping, and battery charge curve',
      'Ultra-modern neon cyan electric glow framed against dark carbon fiber matrix',
      '3D supercharger plug and battery indicators instantly identifiable in search results',
      'Engineered specifically to land high-ticket EV network founders and fleet operators'
    ],
    colorPalette: [
      { name: 'EV Supercharger Cyan', hex: '#06B6D4' },
      { name: 'Neon Electric Blue', hex: '#3B82F6' },
      { name: 'Carbon Black', hex: '#0A0E17' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    clientNiche: 'EV Infrastructure & Mobility App UI Designer',
    deliverables: ['1280x769 Ultra HD PNG', 'Layered Figma Source File', '3D Battery Assets', 'Fiverr Gallery Slider 2 & 3'],
    hasSourceFile: true,
    testimonial: {
      author: 'Julian Meyer',
      country: 'Germany',
      comment: 'The EV charging niche is booming. This gig cover allowed me to position my service at $135 instead of the typical $20 gig, and orders have doubled!',
      stars: 5
    }
  },
  {
    id: 'gig-electric-cad-schematic',
    title: 'Electrical CAD, Schematics & PCB Wiring App',
    fiverrTitle: 'I will design electrical cad circuit schematic and wiring diagram mobile app ui',
    category: 'electrical',
    categoryLabel: 'Electrical & Energy Apps',
    eeTopic: 'cad-circuits',
    eeTopicLabel: 'CAD, Schematics & Circuit Blueprints',
    image: '/src/assets/images/electric_blueprint_1789059122598.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+410%',
    clicksBeforeAfter: { before: '1.0% (14 clicks/wk)', after: '5.1% (72 clicks/wk)' },
    sellerLevel: 'Level 2',
    sellerName: 'cad_engineer',
    sellerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 4.98,
    reviewsCount: 319,
    startingPrice: 145,
    headlineHook: 'ELECTRICAL CAD & SCHEMATIC',
    designHighlights: [
      'Interactive 3D iPad Pro presentation with multi-layer circuit schematics and IEEE symbol library',
      'Technical electrical engineering blueprint aesthetic commanding high project fees',
      'Zero visual clutter with centered layout that prevents title or button clipping on mobile',
      'High-contrast schematic traces instantly communicate deep technical competence'
    ],
    colorPalette: [
      { name: 'Blueprint Cyan', hex: '#38BDF8' },
      { name: 'Circuit Amber', hex: '#F59E0B' },
      { name: 'CAD Navy', hex: '#0F172A' },
      { name: 'Schematic White', hex: '#F8FAFC' }
    ],
    clientNiche: 'Engineering Tools & CAD Software Designer',
    deliverables: ['1280x769 Master Gig Cover', 'Editable Vector Blueprint Assets', 'Figma Source File', 'Commercial Rights'],
    hasSourceFile: true,
    testimonial: {
      author: 'Alexandre Dubois',
      country: 'France',
      comment: 'Circuit and electrical CAD apps require supreme credibility. Clients see this thumbnail and immediately know I understand schematics!',
      stars: 5
    }
  },
  {
    id: 'gig-solar-rooftop-calc',
    title: 'Solar Rooftop & Inverter Sizing App',
    fiverrTitle: 'I will design solar rooftop quotation power inverter sizing app ui ux in figma',
    category: 'electrical',
    categoryLabel: 'Electrical & Energy Apps',
    eeTopic: 'solar-ev',
    eeTopicLabel: 'Solar Rooftop PV & Inverters',
    image: '/src/assets/images/solar_calculator_1789059150625.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+390%',
    clicksBeforeAfter: { before: '1.1% (15 clicks/wk)', after: '5.3% (76 clicks/wk)' },
    sellerLevel: "Fiverr's Choice",
    sellerName: 'solarpower_ui',
    sellerAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    rating: 4.99,
    reviewsCount: 395,
    startingPrice: 125,
    headlineHook: 'SOLAR ROOFTOP & INVERTER APP',
    designHighlights: [
      '3D rooftop azimuth angle calculator with estimated kilowatt generation and battery inverter specs',
      'High-energy sun orange and modern industrial navy color palette with exceptional search contrast',
      'Crisp bold typography clearly readable on desktop grids and smartphone Fiverr app browse feeds',
      'Fiverr TOS 100% compliant with no artificial rating badges or fake guarantee stamps'
    ],
    colorPalette: [
      { name: 'Solar Sun Orange', hex: '#EA580C' },
      { name: 'Inverter Blue', hex: '#0284C7' },
      { name: 'Dark Tech Slate', hex: '#0F172A' },
      { name: 'Clean White', hex: '#FFFFFF' }
    ],
    clientNiche: 'Solar & Renewable Energy UX Specialist',
    deliverables: ['1280x769 Ultra HD Cover', 'Figma Presentation Kit', '3D Solar Assets', 'Commercial Rights'],
    hasSourceFile: true,
    testimonial: {
      author: 'Mateo Hernandez',
      country: 'Spain',
      comment: 'Solar installation companies loved this presentation. Upgrading my gig image was the single highest ROI decision I made on Fiverr this year.',
      stars: 5
    }
  },
  {
    id: 'gig-mental-health-rx',
    title: 'Mental Health, Therapy & Rx Psychiatry App',
    fiverrTitle: 'I will design mental health therapy mood tracker and psychiatry mobile app ui',
    category: 'medical',
    categoryLabel: 'Medicine & Health Apps',
    image: '/src/assets/images/mental_health_rx_1789059136287.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+430%',
    clicksBeforeAfter: { before: '0.9% (13 clicks/wk)', after: '5.1% (74 clicks/wk)' },
    sellerLevel: 'Top Rated',
    sellerName: 'mind_studio',
    sellerAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    rating: 5.0,
    reviewsCount: 540,
    startingPrice: 120,
    headlineHook: 'MENTAL HEALTH & THERAPY APP',
    designHighlights: [
      'Gentle therapeutic lavender and calming medical teal gradient creating instant empathy and emotional safety',
      '3D mindfulness ring and doctor appointment scheduling screen showcasing complete patient journey',
      'Subtle clinical badges demonstrating healthcare compliance and HIPAA-friendly UI standards',
      'Passes 20% text density checks effortlessly with elegant headline hierarchy'
    ],
    colorPalette: [
      { name: 'Therapy Lavender', hex: '#A855F7' },
      { name: 'Calm Teal', hex: '#14B8A6' },
      { name: 'Soft Dark Iris', hex: '#1E1B4B' },
      { name: 'Gentle White', hex: '#FAFAFA' }
    ],
    clientNiche: 'Wellness, Psychiatry & Mental Health UX Designer',
    deliverables: ['1280x769 Master Gig Cover', 'Figma Source File', 'Calming 3D Icon Pack', 'A/B Test Variant'],
    hasSourceFile: true,
    testimonial: {
      author: 'Dr. Chloe Martin',
      country: 'Canada',
      comment: 'Therapy apps must feel warm yet professional. This thumbnail achieved that delicate balance flawlessly. Orders from clinic founders jumped immediately.',
      stars: 5
    }
  },
  {
    id: 'gig-scada-power-grid',
    title: 'High-Voltage Substation & SCADA Power Grid App',
    fiverrTitle: 'I will design high-voltage scada power grid and substation monitoring app ui ux',
    category: 'electrical',
    categoryLabel: 'Electrical Engineering Apps',
    eeTopic: 'power-systems',
    eeTopicLabel: 'Power Systems & Substation SCADA',
    image: '/src/assets/images/ee_scada_grid_gig_1789059219083.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+470%',
    clicksBeforeAfter: { before: '0.7% (9 clicks/wk)', after: '5.2% (78 clicks/wk)' },
    sellerLevel: 'Top Rated',
    sellerName: 'grid_engineer',
    sellerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5.0,
    reviewsCount: 462,
    startingPrice: 160,
    headlineHook: 'SCADA & POWER GRID APP',
    designHighlights: [
      'Real-time megawatt load distribution grid telemetry with 3D transformer temperature gauges',
      'Industrial dark mode with high-voltage neon amber alarms and electric cyan telemetry traces',
      'Engineered for utility companies, smart grid startups, and high-voltage transmission engineers',
      'Precise safe-zone composition ensuring zero clipping in mobile Fiverr search feeds'
    ],
    colorPalette: [
      { name: 'Grid Amber Alert', hex: '#F59E0B' },
      { name: 'Telemetry Cyan', hex: '#06B6D4' },
      { name: 'High-Voltage Slate', hex: '#0F172A' },
      { name: 'Clean Indicator White', hex: '#FFFFFF' }
    ],
    clientNiche: 'Power Systems & SCADA Industrial UX Designer',
    deliverables: ['1280x769 Ultra HD Cover', 'Layered Figma Design System', '3D Transformer & Grid Icons', 'Fiverr Gallery Slider 2 & 3'],
    hasSourceFile: true,
    testimonial: {
      author: 'Henrik Van Der Berg',
      country: 'Netherlands',
      comment: 'Grid engineers and utility vendors rarely find UI designers who understand SCADA. This cover immediately communicated deep engineering fluency. Inquiries jumped instantly!',
      stars: 5
    }
  },
  {
    id: 'gig-plc-motor-control',
    title: 'Industrial PLC Automation & VFD Motor Control App',
    fiverrTitle: 'I will design industrial plc automation and vfd motor controller app ui ux in figma',
    category: 'electrical',
    categoryLabel: 'Electrical Engineering Apps',
    eeTopic: 'plc-automation',
    eeTopicLabel: 'Industrial PLC & Motor Drives',
    image: '/src/assets/images/ee_plc_motor_gig_1789059235830.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+430%',
    clicksBeforeAfter: { before: '0.9% (11 clicks/wk)', after: '5.0% (71 clicks/wk)' },
    sellerLevel: "Fiverr's Choice",
    sellerName: 'plc_automation_pro',
    sellerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    rating: 4.99,
    reviewsCount: 520,
    startingPrice: 150,
    headlineHook: 'PLC & MOTOR CONTROL APP',
    designHighlights: [
      '3D dynamic tachometer dial with RPM live speed, VFD hertz frequency graph, and motor torque curve',
      'Ladder logic diagnostic panels paired with high-visibility hazard warning orange accents',
      'Clean 3D induction motor render providing instant category relevance in small preview thumbnails',
      'Passes Fiverr 2026 image quality review with strict adherence to 15% text coverage rule'
    ],
    colorPalette: [
      { name: 'Induction Cyan', hex: '#0EA5E9' },
      { name: 'Warning Orange', hex: '#F97316' },
      { name: 'Factory Carbon', hex: '#111827' },
      { name: 'Signal White', hex: '#F9FAFB' }
    ],
    clientNiche: 'Industrial Automation & Mechatronics UI Specialist',
    deliverables: ['1280x769 Master Gig Cover', 'Lossless WebP', 'Editable Figma UI Kit', 'Commercial Rights'],
    hasSourceFile: true,
    testimonial: {
      author: 'Dirk Schneider',
      country: 'Germany',
      comment: 'German manufacturing and robotics firms expect precision. This gig thumbnail conveyed clean industrial engineering and tripled my high-ticket leads.',
      stars: 5
    }
  },
  {
    id: 'gig-three-phase-power',
    title: '3-Phase Power Quality & Harmonics Analyzer App',
    fiverrTitle: 'I will design 3-phase power analyzer harmonics and power factor engineering app',
    category: 'electrical',
    categoryLabel: 'Electrical Engineering Apps',
    eeTopic: 'power-electronics',
    eeTopicLabel: 'Power Electronics & 3-Phase Quality',
    image: '/src/assets/images/ee_power_analyzer_gig_1789059249295.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+450%',
    clicksBeforeAfter: { before: '1.0% (13 clicks/wk)', after: '5.5% (80 clicks/wk)' },
    sellerLevel: 'Top Rated',
    sellerName: 'volt_wave_ux',
    sellerAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    rating: 5.0,
    reviewsCount: 388,
    startingPrice: 145,
    headlineHook: '3-PHASE POWER ANALYZER',
    designHighlights: [
      '3D smartphone screen displaying vibrant 3-phase sine waveforms (L1, L2, L3) with THD harmonics gauges',
      'Cos-phi power factor optimization dial and real-time active vs. reactive power readout',
      'High-contrast oscilloscope traces standing out vividly against dark graphite canvas',
      'Engineered for test & measurement equipment vendors, power auditors, and EE consultancies'
    ],
    colorPalette: [
      { name: 'Phase L1 Red', hex: '#EF4444' },
      { name: 'Phase L2 Amber', hex: '#F59E0B' },
      { name: 'Phase L3 Blue', hex: '#3B82F6' },
      { name: 'Oscilloscope Slate', hex: '#0B0F19' }
    ],
    clientNiche: 'Power Electronics & Instrumentation UI Designer',
    deliverables: ['1280x769 Ultra HD Cover', 'Figma Source File', 'Vector Waveform Component Library', 'A/B Test Variant'],
    hasSourceFile: true,
    testimonial: {
      author: 'Dr. Alistair Finch',
      country: 'United Kingdom',
      comment: 'The 3-phase sine wave visual is an absolute showstopper. In the electrical search category, this thumbnail grabs 100% of the attention. Highest conversion rate I have ever seen.',
      stars: 5
    }
  },
  {
    id: 'gig-embedded-iot',
    title: 'Embedded Systems, Microcontroller IoT & Arduino App',
    fiverrTitle: 'I will design embedded microcontroller iot esp32 and arduino app ui in figma',
    category: 'electrical',
    categoryLabel: 'Electrical Engineering Apps',
    eeTopic: 'embedded-iot',
    eeTopicLabel: 'Embedded Systems & Microcontroller IoT',
    image: '/src/assets/images/ee_embedded_iot_gig_1789059549866.jpg',
    dimensions: '1280 × 769 px (16:9)',
    ctrIncrease: '+440%',
    clicksBeforeAfter: { before: '0.8% (10 clicks/wk)', after: '5.2% (76 clicks/wk)' },
    sellerLevel: 'Top Rated',
    sellerName: 'embedded_pulse',
    sellerAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    rating: 5.0,
    reviewsCount: 428,
    startingPrice: 155,
    headlineHook: 'EMBEDDED IOT & ARDUINO APP',
    designHighlights: [
      'Live GPIO state toggles, ADC sensor stream graphs, and interactive microcontroller pinout maps',
      'Electric neon purple and cyber teal lighting designed specifically for hardware and firmware creators',
      'Optimized for Bluetooth Low Energy (BLE), Wi-Fi, and MQTT dashboard applications',
      '100% compliant with Fiverr guidelines: minimal copy, maximum visual impact'
    ],
    colorPalette: [
      { name: 'Cyber Purple', hex: '#A855F7' },
      { name: 'Sensor Teal', hex: '#14B8A6' },
      { name: 'Graphite Dark', hex: '#0A0E17' },
      { name: 'Terminal White', hex: '#FAFAFA' }
    ],
    clientNiche: 'IoT Hardware & Firmware App UI Specialist',
    deliverables: ['1280x769 Ultra HD Cover', 'Layered Figma UI Kit', 'Microcontroller Component Assets', 'Commercial License'],
    hasSourceFile: true,
    testimonial: {
      author: 'Elias Thorne',
      country: 'United States',
      comment: 'Hardware IoT founders usually get generic mobile app designs. Having a gig cover showing pinouts and telemetry graphs brought me high-ticket Kickstarter client contracts immediately!',
      stars: 5
    }
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Gig Hook',
    tagline: 'Ideal for launching a single gig with an eye-catching, compliant cover image.',
    price: 15,
    deliveryTime: '24 Hours Express',
    revisions: '2 Revisions included',
    features: [
      { name: '1 Click-Through Optimized Gig Image', included: true },
      { name: 'Fiverr Recommended 1280x769 px Size', included: true },
      { name: 'Fiverr Mobile App Safe-Zone Tested', included: true },
      { name: 'Under 20% Text Rule Guaranteed', included: true },
      { name: 'High Resolution JPG + PNG', included: true },
      { name: 'Layered Figma / PSD Source File', included: false },
      { name: 'A/B Test Alternative Variations', included: false },
      { name: 'PDF Portfolio Presentation Slides', included: false }
    ]
  },
  {
    id: 'pro-ab',
    name: 'Pro A/B Split-Tester',
    tagline: 'Our most popular choice. Test 3 different visual hooks to maximize clicks.',
    price: 35,
    deliveryTime: '24-36 Hours',
    revisions: 'Unlimited Revisions',
    popular: true,
    features: [
      { name: '3 High-Converting Gig Image Variations (A/B)', included: true },
      { name: 'Fiverr Recommended 1280x769 px Size', included: true },
      { name: 'Fiverr Mobile App Safe-Zone Tested', included: true },
      { name: 'Under 20% Text Rule Guaranteed', included: true },
      { name: 'High Resolution JPG + PNG + WebP', included: true },
      { name: 'Layered Figma / PSD Source File Included', included: true },
      { name: 'Live Search Mockup Preview Sheet', included: true },
      { name: 'PDF Portfolio Presentation Slides', included: false }
    ]
  },
  {
    id: 'agency-suite',
    name: 'Full Gig Dominance Kit',
    tagline: 'Complete package: Main cover, 2 PDF carousel slides, and matching profile banner.',
    price: 65,
    deliveryTime: '48 Hours',
    revisions: 'VIP Priority & Unlimited',
    features: [
      { name: '3 Custom Gig Image Variations', included: true },
      { name: '2 Matching PDF Portfolio Presentation Slides', included: true },
      { name: 'Matching Fiverr Seller Profile Header Banner', included: true },
      { name: 'Fiverr Recommended 1280x769 px Size', included: true },
      { name: 'Fiverr Mobile App Safe-Zone Tested', included: true },
      { name: 'All Layered Figma + PSD Source Files', included: true },
      { name: 'Fiverr Title & Keyword Tag CTR Optimization', included: true },
      { name: 'Lifetime Color & Text Tweaks Guarantee', included: true }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    author: 'Daniel Craig',
    handle: '@d_webpro',
    role: 'WordPress Developer (Level 2 Seller)',
    location: 'Austin, TX, USA',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    stars: 5,
    comment:
      'My gig was stuck on page 8 for 4 months. After updating with this CTR-engineered cover, impressions rose by 310% in 12 days and I reached page 1 for "wordpress developer". Best $35 investment in my freelance career.',
    ctrBeforeAfter: '1.1% -> 4.8% CTR',
    verifiedOrder: true
  },
  {
    id: 't-2',
    author: 'Elena Rostova',
    handle: '@elena_designs',
    role: 'Brand & Logo Designer (Top Rated)',
    location: 'Berlin, Germany',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    stars: 5,
    comment:
      'The difference is night and day. Clean typography, perfect color contrast, and zero Fiverr rule violations. Buyers immediately see you as a top tier professional.',
    ctrBeforeAfter: '0.8% -> 3.9% CTR',
    verifiedOrder: true
  },
  {
    id: 't-3',
    author: 'Tariq Al-Mansoor',
    handle: '@tariq_edits',
    role: 'Video Editor & Motion Designer',
    location: 'Dubai, UAE',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&auto=format&fit=crop&q=80',
    stars: 5,
    comment:
      'The A/B test package allowed me to test two different hooks. Variation B increased my click-through rate by 4x. I had to increase my gig prices to keep up with incoming inquiries.',
    ctrBeforeAfter: '1.3% -> 6.1% CTR',
    verifiedOrder: true
  }
];

export const FIVERR_GUIDELINES_SPECS = [
  {
    title: 'Recommended Dimensions',
    spec: '1280 × 769 px',
    detail: 'Exact 1.66:1 aspect ratio. High-resolution rendering prevents pixelation on retina and 4K screens.',
    status: 'Optimal'
  },
  {
    title: 'Mobile App Safe-Zone',
    spec: '70px Border Clearance',
    detail: 'Guarantees that seller level badges, favorite heart buttons, and gradient overlays never obstruct your main hook.',
    status: 'Critical'
  },
  {
    title: 'The 20% Text Rule',
    spec: '< 20% Text Coverage',
    detail: 'Fiverr downranks text-heavy flyer designs. We use 3 to 5 powerful words maximum with strong visual imagery.',
    status: 'Mandatory'
  },
  {
    title: 'TOS Compliance (Zero Deceptive Badges)',
    spec: '100% Policy-Safe',
    detail: 'No fake "Top Rated" or "Fiverr Choice" sticker stamps embedded into images which risk gig suspension.',
    status: 'Safe'
  },
  {
    title: 'File Weight & Export Format',
    spec: '< 5 MB WebP / PNG / JPG',
    detail: 'Optimized compression for instant lazy-loading in search feeds without any degradation of sharpness.',
    status: 'Optimized'
  }
];
