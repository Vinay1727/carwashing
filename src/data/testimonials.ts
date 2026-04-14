export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
  car: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Arjun Mehta",
    role: "Business Executive",
    avatar: "AM",
    rating: 5,
    review: "Absolutely blown away by the results! My BMW looked brand new after the Elite detailing. The ceramic coating is extraordinary — water just rolls right off.",
    car: "BMW 3 Series",
    date: "March 2025",
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Entrepreneur",
    avatar: "PS",
    rating: 5,
    review: "I've tried many car wash services in the city, but AquaShine is on a completely different level. Professional staff, premium products, and exceptional attention to detail.",
    car: "Mercedes GLC",
    date: "February 2025",
  },
  {
    id: "t3",
    name: "Rohan Kapoor",
    role: "Software Engineer",
    avatar: "RK",
    rating: 5,
    review: "The online booking system is super smooth. Came in, handed my keys, and got my Fortuner back spotless in under 2 hours. Will definitely be a regular customer.",
    car: "Toyota Fortuner",
    date: "March 2025",
  },
  {
    id: "t4",
    name: "Sneha Joshi",
    role: "Doctor",
    avatar: "SJ",
    rating: 4,
    review: "Premium package is worth every rupee. The interior detailing was thorough and professional. My Creta smelled fresh and looked immaculate.",
    car: "Hyundai Creta",
    date: "January 2025",
  },
  {
    id: "t5",
    name: "Vikram Singh",
    role: "Architect",
    avatar: "VS",
    rating: 5,
    review: "The paint protection film on my Audi is flawless. No visible edges, perfect clarity. Team is highly skilled and professional throughout the process.",
    car: "Audi Q5",
    date: "February 2025",
  },
  {
    id: "t6",
    name: "Ananya Reddy",
    role: "Marketing Manager",
    avatar: "AR",
    rating: 5,
    review: "Booked the Basic wash for a quick refresh before a client meeting — was amazed at how much difference it made. The spot-free rinse left zero water marks!",
    car: "Honda City",
    date: "March 2025",
  },
];
