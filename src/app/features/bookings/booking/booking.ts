import { Component } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Consultation {
  type: string;
  duration: string;
  price: number;
}

@Component({
  selector: 'app-booking',
  imports: [RouterLink, FormsModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css'
})
export class Booking {

  selectedConsultation: Consultation = {
    type: 'Chat Consultation',
    duration: '30 minutes',
    price: 799
  };

  selectedDate = '';
  selectedTime = '';
  question = '';

  dates: string[] = [];

  // All possible time slots
  times = [
    '10:00 AM',
    '11:30 AM',
    '2:00 PM',
    '4:00 PM',
    '6:30 PM',
    '8:00 PM'
  ];

  // Time slots shown for the selected date
  availableTimes: string[] = [];

  // Date-specific availability
  availability: { [date: string]: string[] } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.generateDates();

    this.route.queryParams.subscribe(params => {

      if (params['type']) {
        this.selectedConsultation = {
          type: params['type'],
          duration: params['duration'] || '30 minutes',
          price: Number(params['price']) || 799
        };
      }

    });
  }


  generateDates() {

    const today = new Date();

    for (let i = 1; i <= 7; i++) {

      const date = new Date(today);

      date.setDate(today.getDate() + i);

      const formattedDate = date.toLocaleDateString('en-IN', {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
      });

      this.dates.push(formattedDate);

      // Temporary demo availability
      this.availability[formattedDate] =
        this.getDemoAvailability(i);
    }

  }


  getDemoAvailability(day: number): string[] {

    const schedules: { [key: number]: string[] } = {

      1: [
        '10:00 AM',
        '2:00 PM',
        '6:30 PM'
      ],

      2: [
        '11:30 AM',
        '4:00 PM',
        '8:00 PM'
      ],

      3: [
        '10:00 AM',
        '11:30 AM',
        '6:30 PM'
      ],

      4: [
        '2:00 PM',
        '4:00 PM',
        '8:00 PM'
      ],

      5: [
        '10:00 AM',
        '4:00 PM',
        '6:30 PM'
      ],

      6: [
        '11:30 AM',
        '2:00 PM',
        '8:00 PM'
      ],

      7: [
        '10:00 AM',
        '2:00 PM',
        '6:30 PM',
        '8:00 PM'
      ]

    };

    return schedules[day] || [];
  }


  selectDate(date: string) {

    this.selectedDate = date;

    this.availableTimes =
      this.availability[date] || [];

    this.selectedTime = '';

  }


  selectTime(time: string) {

    this.selectedTime = time;

  }


  continueToPayment() {

  if (!this.selectedConsultation.type) {
    alert('Please select a consultation type.');
    return;
  }

  if (!this.selectedDate) {
    alert('Please select a date for your consultation.');
    return;
  }

  if (!this.selectedTime) {
    alert('Please select a time for your consultation.');
    return;
  }

  this.router.navigate(['/booking-review'], {
    queryParams: {
      type: this.selectedConsultation.type,
      duration: this.selectedConsultation.duration,
      price: this.selectedConsultation.price,
      date: this.selectedDate,
      time: this.selectedTime,
      question: this.question
    }
  });

}

}