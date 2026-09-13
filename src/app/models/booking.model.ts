export interface Booking {

  id: string;

  readerName: string;

  consultationType: string;

  duration: string;

  price: number;

  date: string;

  time: string;

  question: string;

  paymentMethod: string;

  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';

  createdAt: string;
}