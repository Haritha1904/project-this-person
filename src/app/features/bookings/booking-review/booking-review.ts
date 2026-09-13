import { Component } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-review',
  imports: [RouterLink],
  templateUrl: './booking-review.html',
  styleUrl: './booking-review.css'
})
export class BookingReview {

  readerName = 'Tarot Mystic 1111';

  consultation = {
    type: 'Chat Consultation',
    duration: '30 minutes',
    price: 799
  };

  selectedDate = 'Not selected';
  selectedTime = 'Not selected';
  question = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.route.queryParams.subscribe(params => {

      this.consultation = {
        type: params['type'] || 'Chat Consultation',
        duration: params['duration'] || '30 minutes',
        price: Number(params['price']) || 799
      };

      this.selectedDate = params['date'] || 'Not selected';

      this.selectedTime = params['time'] || 'Not selected';

      this.question = params['question'] || '';

    });

  }

  confirmBooking() {

  this.router.navigate(['/payment'], {
    queryParams: {
      type: this.consultation.type,
      duration: this.consultation.duration,
      price: this.consultation.price,
      date: this.selectedDate,
      time: this.selectedTime,
      question: this.question
    }
  });

}
}