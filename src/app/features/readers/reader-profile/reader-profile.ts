import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-reader-profile',
  imports: [RouterLink],
  templateUrl: './reader-profile.html',
  styleUrl: './reader-profile.css'
})
export class ReaderProfile {

    constructor(private router: Router) {}

  bookConsultation(type: string, price: number) {
    this.router.navigate(['/booking'], {
      queryParams: {
        type: type,
        price: price
      }
    });
  }
  
  reader = {
    name: 'Tarot Mystic 1111',
    initials: 'TM',
    rating: 4.9,
    reviews: 328,
    readings: 500,
    experience: '8+ Years',
    languages: ['English', 'Telugu', 'Hindi'],

    specialties: [
      'Love & Relationships',
      'Career',
      'Marriage',
      'Spiritual Guidance'
    ],

    bio: `
      Tarot Mystic 1111 offers intuitive tarot guidance
      to help you explore questions around love, career,
      relationships and your personal journey.
    `,

    consultations: [
      {
        type: 'Chat Consultation',
        icon: '💬',
        duration: '30 minutes',
        price: 799,
        description: 'Private text-based tarot consultation.'
      },
      {
        type: 'Voice Consultation',
        icon: '◉',
        duration: '30 minutes',
        price: 999,
        description: 'Personal guidance through a private voice call.'
      },
      {
        type: 'Video Consultation',
        icon: '◈',
        duration: '30 minutes',
        price: 1499,
        description: 'One-to-one video tarot consultation.'
      }
    ]
  };

  reviews = [
    {
      name: 'Priya',
      rating: 5,
      date: '2 weeks ago',
      comment:
        'The reading gave me a completely different perspective. Very insightful and comforting.'
    },
    {
      name: 'Ananya',
      rating: 5,
      date: '1 month ago',
      comment:
        'A beautiful experience. The reading was detailed and easy to understand.'
    },
    {
      name: 'Rahul',
      rating: 4,
      date: '2 months ago',
      comment:
        'Very thoughtful consultation and excellent communication.'
    }
  ];

}