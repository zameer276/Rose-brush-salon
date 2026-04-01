export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  feedback: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  address: string;
  date: string;
  time: string;
  message: string;
}
