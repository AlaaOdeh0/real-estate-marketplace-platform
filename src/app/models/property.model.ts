export interface Property {
  id: string;
  title: string;
  price: number;
  description: string;
  address: string;
  status: 'rent' | 'buy' | 'sold' | 'Available';
  bedrooms: number;
  bathrooms: number;
  area: number;
  mlsId: string;
  agency: string;
  agent: string;
  images: string[];
  features: string[];
  priceCut: {
    amount: number;
    date: string;
  };
}
