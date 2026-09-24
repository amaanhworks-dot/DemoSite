import {
  Flame,
  PaintRoller,
  Layers,
  Building2,
  Factory,
  HardHat,
  Zap,
  Wind,
  Truck,
  Headphones,
  BadgeCheck,
  ShieldCheck,
  PackageCheck,
  MapPin,
} from 'lucide-react';

export const SITE = {
  name: 'PROSHIELD SYSTEMS',
  tagline: 'Fire Protection & Retardant Solutions Manufacturer',
  location: 'Delhi, India',
  whatsappNumber: '919000000000',
  email: 'enquiries@proshieldsystems.in',
  // Shown in footer as a placeholder — client fills in during onboarding
  gstPlaceholder: 'GSTIN shared on request',
} as const;

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Manufacturing', href: '#manufacturing' },
  { label: 'Technical', href: '#technical' },
  { label: 'About', href: '#about' },
] as const;

export type ProductCategory = {
  id: string;
  label: string;
  icon: typeof Flame;
  products: Product[];
};

export type Product = {
  name: string;
  category: string;
  description: string;
  standards: string[];
  price: string;
  image: string;
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'passive',
    label: 'Passive Fire Protection',
    icon: Flame,
    products: [
      {
        name: 'Firestop Compound',
        category: 'Penetration Seal',
        description:
          'High-density firestop mortar for sealing through-penetrations in fire-rated walls aur floors. Site-ready formulation, straightforward application.',
        standards: ['UL 1479', 'ASTM E814'],
        price: 'Price on Request',
        image: 'https://images.pexels.com/photos/36621818/pexels-photo-36621818.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Fire Collar',
        category: 'Pipe Penetration',
        description:
          'Intumescent fire collar engineered to seal plastic pipe penetrations during fire exposure. Reliable performance for MEP-heavy projects.',
        standards: ['UL 1479', 'ASTM E814'],
        price: 'Price on Request',
        image: 'https://images.pexels.com/photos/30144993/pexels-photo-30144993.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Firestop Wrap Strip',
        category: 'Intumescent Strip',
        description:
          'Flexible intumescent wrap strip for cable trays aur metallic pipe penetrations. Easy to wrap, consistent expansion under heat.',
        standards: ['UL 1479'],
        price: 'Price on Request',
        image: 'https://images.pexels.com/photos/7414934/pexels-photo-7414934.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
  },
  {
    id: 'coatings',
    label: 'Fire Paints & Coatings',
    icon: PaintRoller,
    products: [
      {
        name: 'Intumescent Steel Coating',
        category: 'Thin-Film Intumescent',
        description:
          'Water-based intumescent coating that delivers up to 120-minute fire rating for structural steel. Thin-film finish, low site mess.',
        standards: ['UL 263', 'ASTM E119'],
        price: 'Price on Request',
        image: 'https://images.pexels.com/photos/36215202/pexels-photo-36215202.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Fire Retardant Paint',
        category: 'Surface Coating',
        description:
          'Decorative fire retardant paint for interior wood, fabric aur drywall substrates. Retains finish while meeting surface spread requirements.',
        standards: ['ASTM E84'],
        price: 'Price on Request',
        image: 'https://images.pexels.com/photos/26953859/pexels-photo-26953859.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Fireproofing Spray',
        category: 'Spray-Applied',
        description:
          'Cementitious spray-applied fireproofing for structural steel aur concrete frame protection. High build, good adhesion on site.',
        standards: ['UL 263', 'ASTM E119'],
        price: 'Price on Request',
        image: 'https://images.pexels.com/photos/5657436/pexels-photo-5657436.png?auto=compress&cs=tinysrgb&w=800',
      },
    ],
  },
  {
    id: 'barriers',
    label: 'Fire Barrier Sheets',
    icon: Layers,
    products: [
      {
        name: 'Ceramic Fiber Blanket',
        category: 'Refractory Insulation',
        description:
          'High-temperature ceramic fiber blanket rated to 1260°C for industrial furnace aur kiln insulation. Consistent density, clean cut.',
        standards: ['ASTM C892'],
        price: 'Price on Request',
        image: 'https://images.pexels.com/photos/9893816/pexels-photo-9893816.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Fire Barrier Board',
        category: 'Rigid Barrier',
        description:
          'Silicate-based rigid fire barrier board for wall aur ceiling compartmentation. Dimensionally stable, easy to fix on site.',
        standards: ['UL 263'],
        price: 'Price on Request',
        image: 'https://images.pexels.com/photos/7232412/pexels-photo-7232412.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Rockwool Panel',
        category: 'Mineral Wool',
        description:
          'Dense rockwool fire insulation panel for cavity barriers aur ductwork fire protection. Non-combustible, acoustically useful.',
        standards: ['ASTM E84', 'BS 476'],
        price: 'Price on Request',
        image: 'https://images.pexels.com/photos/17680680/pexels-photo-17680680.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
  },
];

export type Application = {
  title: string;
  image: string;
  icon: typeof Building2;
};

export const APPLICATIONS: Application[] = [
  {
    title: 'Commercial Buildings',
    image: 'https://images.pexels.com/photos/8678663/pexels-photo-8678663.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Building2,
  },
  {
    title: 'Industrial Facilities',
    image: 'https://images.pexels.com/photos/36122954/pexels-photo-36122954.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Factory,
  },
  {
    title: 'Infrastructure',
    image: 'https://images.pexels.com/photos/7107980/pexels-photo-7107980.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: HardHat,
  },
  {
    title: 'Electrical & Utility',
    image: 'https://images.pexels.com/photos/30144993/pexels-photo-30144993.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Zap,
  },
  {
    title: 'HVAC / MEP Systems',
    image: 'https://images.pexels.com/photos/32032996/pexels-photo-32032996.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Wind,
  },
  {
    title: 'Construction & Contractors',
    image: 'https://images.pexels.com/photos/19408681/pexels-photo-19408681.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: HardHat,
  },
];

export type Feature = {
  title: string;
  description: string;
  icon: typeof Truck;
};

export const WHY_PROSHIELD: Feature[] = [
  {
    title: 'Direct Factory Supply',
    description: 'Factory se seedha supply — no extra layers between manufacturer aur buyer.',
    icon: Truck,
  },
  {
    title: 'Technical Support',
    description: 'Right protection system choose karne mein poori technical help.',
    icon: Headphones,
  },
  {
    title: 'Quality Audited Manufacturing',
    description: 'TUV-SUD audited processes — consistent quality, batch after batch.',
    icon: BadgeCheck,
  },
  {
    title: 'Industry Standards',
    description: 'Clear compliance with UL, ASTM aur relevant Indian standards.',
    icon: ShieldCheck,
  },
  {
    title: 'Bulk Procurement',
    description: 'Project aur industrial volumes ke liye built — bulk rates available.',
    icon: PackageCheck,
  },
  {
    title: 'PAN-India Supply',
    description: 'Delhi se dispatch, poore India mein factory-to-project delivery.',
    icon: MapPin,
  },
];

export type TechRow = {
  code: string;
  description: string;
  type: 'HSN' | 'Standard';
};

export const TECH_DATA: TechRow[] = [
  { code: 'HSN 32141000', description: 'Non-refractory mortars and concretes, fire protection compounds.', type: 'HSN' },
  { code: 'HSN 38245090', description: 'Prepared binders for foundry moulds or cores; fire retardant preparations.', type: 'HSN' },
  { code: 'HSN 68061000', description: 'Slag wool, rock wool and similar mineral wools for thermal insulation.', type: 'HSN' },
  { code: 'UL 1479', description: 'Standard for fire tests of through-penetration firestops.', type: 'Standard' },
  { code: 'ASTM E814', description: 'Standard test method for fire stops of through-penetrations.', type: 'Standard' },
  { code: 'ASTM E119', description: 'Standard test methods for fire tests of building construction materials.', type: 'Standard' },
  { code: 'UL 263', description: 'Standard for fire tests of building construction and materials.', type: 'Standard' },
  { code: 'ASTM E84', description: 'Standard test method for surface burning characteristics of materials.', type: 'Standard' },
];

export const TRUST_ITEMS = [
  'TUV-SUD Audited Processes',
  'GST Compliant · Delhi',
  'Direct Factory Supply',
  'Technical Support',
  'PAN-India Dispatch',
] as const;

export const STATS = [
  { value: '100%', label: 'In-House Manufacturing' },
  { value: 'CNC', label: 'High-Speed Punching' },
  { value: 'TUV-SUD', label: 'Quality Audited' },
  { value: 'PAN INDIA', label: 'Factory Supply' },
] as const;