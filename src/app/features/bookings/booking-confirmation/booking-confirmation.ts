import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { BookingService } from '../../../services/booking';

@Component({
  selector: 'app-booking-confirmation',
  imports: [RouterLink],
  templateUrl: './booking-confirmation.html',
  styleUrl: './booking-confirmation.css'
})
export class BookingConfirmation {

  readerName = 'Tarot Mystic 1111';

  consultation = {
    type: 'Chat Consultation',
    duration: '30 minutes',
    price: 799
  };

  selectedDate = 'Not selected';
  selectedTime = 'Not selected';
  question = '';

  bookingId = '';

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService
  ) {

    this.route.queryParams.subscribe(params => {

      this.bookingId = params['bookingId'] || '';

      const booking =
        this.bookingService.getBookingById(this.bookingId);

      if (booking) {

        this.readerName = booking.readerName;

        this.consultation = {
          type: booking.consultationType,
          duration: booking.duration,
          price: booking.price
        };

        this.selectedDate = booking.date;

        this.selectedTime = booking.time;

        this.question = booking.question;

      }

    });

  }

}