import { Component } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { BookingService } from '../../../services/booking';

@Component({
  selector: 'app-payment',
  imports: [RouterLink],
  templateUrl: './payment.html',
  styleUrl: './payment.css'
})
export class Payment {

  readerName = 'Tarot Mystic 1111';

  consultation = {
    type: 'Chat Consultation',
    duration: '30 minutes',
    price: 799
  };

  selectedDate = 'Not selected';
  selectedTime = 'Not selected';
  question = '';

  paymentMethod = 'UPI';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService
  ) {

    this.route.queryParams.subscribe(params => {

      this.consultation = {
        type: params['type'] || 'Chat Consultation',
        duration: params['duration'] || '30 minutes',
        price: Number(params['price']) || 799
      };

      this.selectedDate =
        params['date'] || 'Not selected';

      this.selectedTime =
        params['time'] || 'Not selected';

      this.question =
        params['question'] || '';

    });

  }


  makePayment() {

    const bookingId =
      'TP' + Math.floor(100000 + Math.random() * 900000);

    const booking = {

      id: bookingId,

      readerName: this.readerName,

      consultationType:
        this.consultation.type,

      duration:
        this.consultation.duration,

      price:
        this.consultation.price,

      date:
        this.selectedDate,

      time:
        this.selectedTime,

      question:
        this.question,

      paymentMethod:
        this.paymentMethod,

      status: 'confirmed' as const,

      createdAt:
        new Date().toISOString()

    };

    this.bookingService.createBooking(booking);


    this.router.navigate(
      ['/booking-confirmation'],
      {
        queryParams: {

          bookingId: booking.id,

          type: booking.consultationType,

          duration: booking.duration,

          price: booking.price,

          date: booking.date,

          time: booking.time,

          question: booking.question

        }
      }
    );

  }

}