import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookingService } from '../../../services/booking';
import { Booking } from '../../../models/booking.model';

@Component({
  selector: 'app-my-bookings',
  imports: [RouterLink],
  templateUrl: './my-bookings.html',
  styleUrl: './my-bookings.css'
})
export class MyBookings {

  bookings: Booking[] = [];

  constructor(
    private bookingService: BookingService
  ) {
    this.loadBookings();
  }

  loadBookings(): void {

    this.bookings =
      this.bookingService.getBookings();

  }

}