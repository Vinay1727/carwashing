export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  duration: string;
  color: string;
}

export const services: Service[] = [
  {
    id: "exterior-wash",
    icon: "💧",
    title: "Exterior Wash",
    description: "Complete exterior cleaning using premium foam and spot-free rinse technology.",
    features: ["High-pressure foam wash", "Wheel & tire cleaning", "Spot-free rinse", "Air dry finish"],
    duration: "20 min",
    color: "#0ea5e9",
  },
  {
    id: "interior-detail",
    icon: "✨",
    title: "Interior Detail",
    description: "Deep interior cleaning including vacuuming, surface wipe-down, and odor elimination.",
    features: ["Full vacuum", "Dashboard & console wipe", "Glass cleaning", "Odor neutralizer"],
    duration: "45 min",
    color: "#06b6d4",
  },
  {
    id: "full-detail",
    icon: "🏆",
    title: "Full Detailing",
    description: "The ultimate car care package — inside and out, leaving your car showroom-ready.",
    features: ["Exterior + Interior", "Clay bar treatment", "Hand wax & polish", "Tire dressing"],
    duration: "2–3 hrs",
    color: "#38bdf8",
  },
  {
    id: "ceramic-coat",
    icon: "🛡️",
    title: "Ceramic Coating",
    description: "Long-lasting nano-ceramic protection that repels water, dirt, and UV rays for years.",
    features: ["9H hardness formula", "5-year protection", "UV & heat resistant", "Hydrophobic layer"],
    duration: "1 day",
    color: "#7c3aed",
  },
  {
    id: "engine-clean",
    icon: "⚙️",
    title: "Engine Bay Cleaning",
    description: "Safe and thorough engine degreasing to keep your engine running cool and clean.",
    features: ["Degreaser treatment", "Pressure rinse", "Plastic dressing", "Inspection check"],
    duration: "30 min",
    color: "#f59e0b",
  },
  {
    id: "paint-protect",
    icon: "🎨",
    title: "Paint Protection Film",
    description: "Invisible film layer that shields your paint from rock chips, scratches, and road debris.",
    features: ["Self-healing surface", "Crystal clear finish", "10-year warranty", "Custom cut fit"],
    duration: "2 days",
    color: "#10b981",
  },
];
