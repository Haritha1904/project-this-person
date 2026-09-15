import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarot',
  imports: [RouterLink],
  templateUrl: './tarot.html',
  styleUrl: './tarot.css'
})
export class Tarot {

  faqs = [
    {
      question: 'What is Tarot reading?',
      answer:
        'Tarot reading is a form of intuitive guidance that uses Tarot cards to help you reflect on your questions, emotions and possible paths ahead.'
    },
    {
      question: 'Is this Tarot reading free?',
      answer:
        'Yes. The free Tarot services on This Person are designed to give you a quick and simple Tarot experience without booking a paid consultation.'
    },
    {
      question: 'Can Tarot predict my future?',
      answer:
        'Tarot is best used as a tool for reflection and guidance. It can help you explore possibilities and perspectives rather than guarantee a fixed future.'
    },
    {
      question: 'What can I ask Tarot about?',
      answer:
        'You can ask about areas such as love, relationships, career, personal growth, decisions and situations where you would like additional clarity.'
    }
  ];

  openFaq: number | null = null;

  toggleFaq(index: number): void {
    this.openFaq = this.openFaq === index ? null : index;
  }
}