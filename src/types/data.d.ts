export interface ITestimonial {
  id: number;
  name: string;
  image: string;
  review: string;
  car: string;
}

export interface ICar {
  id: number;
  name: string;
  brand: string;
  model: string;
  variant: string;
  year: number;
  postedAt: string;

  carType: "Hatchback" | "Sedan" | "SUV" | "MUV" | "Coupe" | "Convertible" | "Pickup" | "Van";
  color: string;

  fuelType: "Petrol" | "Diesel" | "Electric" | "CNG" | "Hybrid";
  transmission: "Manual" | "Automatic";

  kmDriven: number;
  price: number;
  location: string;

  owner: number; 
  registrationNo?: string;
  insurance?: string;

  rto?: string;

  description: string;
  media: string[];

  features?: string[]; 
  isVeriified?: boolean;
  isNegotiable?: boolean;
}
