import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookings: Booking[] = [];

  private storageKey = 'this-person-bookings';


  constructor() {

    const savedBookings =
      localStorage.getItem(this.storageKey);

    if (savedBookings) {

      this.bookings =
        JSON.parse(savedBookings);

    }

  }


  createBooking(booking: Booking): Booking {

    this.bookings.push(booking);

    this.saveBookings();

    console.log('Booking created:', booking);

    return booking;

  }


  getBookings(): Booking[] {

    return this.bookings;

  }


  getBookingById(id: string): Booking | undefined {

    return this.bookings.find(
      booking => booking.id === id
    );

  }


  private saveBookings(): void {

    localStorage.setItem(
      this.storageKey,
      JSON.stringify(this.bookings)
    );

  }

}