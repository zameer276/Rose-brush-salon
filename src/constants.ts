import { Service, Testimonial } from "./types";

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Signature Glow Facial",
    description: "Our premium 7-step facial treatment using organic extracts to revitalize, deep cleanse, and restore your skin's natural radiance.",
    price: "₹1,500",
    category: "Skincare"
  },
  {
    id: "2",
    title: "Hydra-Refresh Cleanup",
    description: "A quick yet intensive skin detox that removes impurities, balances oil, and leaves your face feeling incredibly fresh and hydrated.",
    price: "₹800",
    category: "Skincare"
  },
  {
    id: "3",
    title: "Silk-Touch Waxing",
    description: "Experience a virtually painless hair removal process with our premium chocolate/aloe vera wax, leaving your skin silky smooth.",
    price: "₹2,000",
    category: "Hair Removal"
  },
  {
    id: "4",
    title: "Precision Threading",
    description: "Expert eyebrow shaping and facial hair removal using high-quality anti-bacterial thread for a clean, defined look.",
    price: "₹100",
    category: "Hair Removal"
  },
  {
    id: "5",
    title: "Royal Bridal Makeover",
    description: "A complete luxury makeup experience for your big day, including HD makeup, hair styling, and draping to make you look like royalty.",
    price: "₹15,000+",
    category: "Makeup"
  },
  {
    id: "6",
    title: "Couture Hair Styling",
    description: "From elegant buns to modern waves, we create professional hairstyles that complement your face shape and the occasion.",
    price: "₹1,200",
    category: "Hair"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Saba Khan",
    rating: 5,
    feedback: "Wani is amazing! The facial was so relaxing and my skin felt great. Highly recommend her home services."
  },
  {
    id: "2",
    name: "Mehak Jan",
    rating: 5,
    feedback: "Best bridal makeup in Srinagar. She understood exactly what I wanted. Very professional and hygienic."
  },
  {
    id: "3",
    name: "Iqra Bhat",
    rating: 5,
    feedback: "So convenient to have a salon experience at home. She brings everything and maintains high safety standards."
  }
];

export const WHATSAPP_NUMBER = "919596343252";
