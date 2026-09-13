import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TarotReader {
  name: string;
  initials: string;
  rating: number;
  readings: number;
  experience: string;
  price: number;
  specialties: string[];
  languages: string[];
  available: boolean;
  verified: boolean;
}

@Component({
  selector: 'app-reader-list',
  imports: [RouterLink],
  templateUrl: './reader-list.html',
  styleUrl: './reader-list.css'
})
export class ReaderList {

  readers: TarotReader[] = [

    {
      name: 'Tarot Mystic 1111',
      initials: 'TM',
      rating: 4.9,
      readings: 500,
      experience: '8+ Years',
      price: 999,
      specialties: [
        'Love',
        'Career',
        'Relationships'
      ],
      languages: [
        'English',
        'Telugu',
        'Hindi'
      ],
      available: true,
      verified: true
    },

    {
      name: 'Mystic Maya',
      initials: 'MM',
      rating: 4.8,
      readings: 320,
      experience: '6+ Years',
      price: 799,
      specialties: [
        'Love',
        'Marriage',
        'Spirituality'
      ],
      languages: [
        'English',
        'Hindi'
      ],
      available: true,
      verified: true
    },

    {
      name: 'Aria Tarot',
      initials: 'AT',
      rating: 4.7,
      readings: 280,
      experience: '5+ Years',
      price: 699,
      specialties: [
        'Career',
        'Finance',
        'Life'
      ],
      languages: [
        'English',
        'Telugu'
      ],
      available: false,
      verified: true
    },

    {
      name: 'Luna Guidance',
      initials: 'LG',
      rating: 4.9,
      readings: 410,
      experience: '7+ Years',
      price: 899,
      specialties: [
        'Relationships',
        'Personal Growth'
      ],
      languages: [
        'English',
        'Hindi'
      ],
      available: true,
      verified: true
    }

  ];

}