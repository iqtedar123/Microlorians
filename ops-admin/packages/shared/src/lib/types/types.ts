export interface RatingI {
  rate: number;
  count: number;
}
export interface ProductI {
  id?: string | number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: RatingI;
}
export interface ContactDetails {
  name: string;
  email: string;
  address: string;
  phone?: number;
}
export interface InvoiceItem {
  description: string;
  price: string;
}
export interface InvoiceI {
  id: string;
  createdAt: string;
  gst: number;
  invoiceNumber: number;
  from: ContactDetails;
  customer: ContactDetails;
  items: InvoiceItem[];
}
