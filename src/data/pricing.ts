export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: string;
  description: string;
  features: string[];
  notIncluded: string[];
  highlight: boolean;
  badge?: string;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 299,
    currency: "₹",
    period: "per wash",
    description: "Perfect for regular upkeep and quick cleaning sessions.",
    features: [
      "Exterior foam wash",
      "Wheel & tire cleaning",
      "Spot-free rinse",
      "Air dry",
      "Window cleaning (exterior)",
    ],
    notIncluded: [
      "Interior cleaning",
      "Wax or polish",
      "Engine cleaning",
    ],
    highlight: false,
    cta: "Book Basic",
  },
  {
    id: "premium",
    name: "Premium",
    price: 799,
    currency: "₹",
    period: "per wash",
    description: "Our most popular package for a thorough inside-out clean.",
    features: [
      "Full exterior wash",
      "Complete interior vacuum",
      "Dashboard & console wipe",
      "All glass cleaning",
      "Tire dressing",
      "Odor neutralizer",
      "Dashboard conditioning",
    ],
    notIncluded: [
      "Ceramic coating",
      "Paint correction",
    ],
    highlight: true,
    badge: "Most Popular",
    cta: "Book Premium",
  },
  {
    id: "elite",
    name: "Elite",
    price: 2499,
    currency: "₹",
    period: "per detail",
    description: "The complete detailing experience for perfectionists.",
    features: [
      "Everything in Premium",
      "Clay bar treatment",
      "Machine polish",
      "Hand wax finish",
      "Engine bay cleaning",
      "Leather conditioning",
      "Paint sealant",
      "Ceramic spray coat",
    ],
    notIncluded: [],
    highlight: false,
    badge: "Best Value",
    cta: "Book Elite",
  },
];
