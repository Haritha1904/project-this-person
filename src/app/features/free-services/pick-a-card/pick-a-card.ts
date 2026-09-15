import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TarotCard {
  name: string;
  number: string;
  image: string;
  keywords: string[];
  message: string;
}

@Component({
  selector: 'app-pick-a-card',
  imports: [RouterLink],
  templateUrl: './pick-a-card.html',
  styleUrl: './pick-a-card.css'
})
export class PickACard {

  cards: TarotCard[] = [

    {
      name: 'The Fool',
      number: '0',
      image: 'assets/images/tarot/the-fool.jpg',
      keywords: ['New Beginnings', 'Adventure', 'Freedom'],
      message:
        'A new chapter may be opening for you. Approach it with curiosity, courage and an open mind. You do not need to know every step before taking the first one.'
    },

    {
      name: 'The Magician',
      number: 'I',
      image: 'assets/images/tarot/the-magician.jpg',
      keywords: ['Action', 'Potential', 'Manifestation'],
      message:
        'You may already have more resources than you realise. This card encourages you to turn intention into action and use your abilities with confidence.'
    },

    {
      name: 'The High Priestess',
      number: 'II',
      image: 'assets/images/tarot/the-high-priestess.jpg',
      keywords: ['Intuition', 'Mystery', 'Inner Wisdom'],
      message:
        'Slow down and listen to your intuition. Not every answer needs to be discovered immediately. Something beneath the surface may become clearer with patience.'
    },

    {
      name: 'The Empress',
      number: 'III',
      image: 'assets/images/tarot/the-empress.jpg',
      keywords: ['Abundance', 'Nurturing', 'Creativity'],
      message:
        'This is a card of growth and nourishment. Give attention to what you want to develop, whether that is a relationship, creative idea or personal goal.'
    },

    {
      name: 'The Lovers',
      number: 'VI',
      image: 'assets/images/tarot/the-lovers.jpg',
      keywords: ['Connection', 'Choice', 'Harmony'],
      message:
        'A meaningful connection or important choice may be at the heart of your situation. Look for alignment between what you feel and what you choose.'
    },

    {
      name: 'The Chariot',
      number: 'VII',
      image: 'assets/images/tarot/the-chariot.jpg',
      keywords: ['Determination', 'Direction', 'Willpower'],
      message:
        'Move forward with intention. When different forces pull you in different directions, clarity and discipline can help you regain control of your path.'
    },

    {
      name: 'Strength',
      number: 'VIII',
      image: 'assets/images/tarot/strength.jpg',
      keywords: ['Courage', 'Patience', 'Inner Power'],
      message:
        'Your greatest strength may come through patience rather than force. Trust your ability to handle the situation with compassion and calm.'
    },

    {
      name: 'The Hermit',
      number: 'IX',
      image: 'assets/images/tarot/the-hermit.jpg',
      keywords: ['Reflection', 'Wisdom', 'Solitude'],
      message:
        'Take some space to think. Stepping away from outside noise may help you recognise an answer that has been developing within you.'
    },

    {
      name: 'Wheel of Fortune',
      number: 'X',
      image: 'assets/images/tarot/wheel-of-fortune.jpg',
      keywords: ['Change', 'Cycles', 'Opportunity'],
      message:
        'Circumstances can change quickly. Stay adaptable and pay attention to opportunities that appear as one cycle gives way to another.'
    },

    {
      name: 'The Star',
      number: 'XVII',
      image: 'assets/images/tarot/the-star.jpg',
      keywords: ['Hope', 'Healing', 'Renewal'],
      message:
        'The Star brings a theme of hope and renewal. Give yourself permission to believe that a difficult chapter can lead to something more peaceful.'
    },

    {
      name: 'The Moon',
      number: 'XVIII',
      image: 'assets/images/tarot/the-moon.jpg',
      keywords: ['Intuition', 'Uncertainty', 'Reflection'],
      message:
        'Not everything may be as clear as it first appears. Give yourself time before making a major decision and pay attention to what your intuition is telling you.'
    },

    {
      name: 'The Sun',
      number: 'XIX',
      image: 'assets/images/tarot/the-sun.jpg',
      keywords: ['Joy', 'Clarity', 'Success'],
      message:
        'The Sun brings warmth, openness and clarity. Something that has felt uncertain may become easier to understand, allowing you to move ahead with greater confidence.'
    },

    {
      name: 'Judgement',
      number: 'XX',
      image: 'assets/images/tarot/judgement.jpg',
      keywords: ['Awakening', 'Decision', 'Renewal'],
      message:
        'A moment of realisation may be approaching. Look honestly at what you have learned and consider what you are ready to leave behind.'
    },

    {
      name: 'The World',
      number: 'XXI',
      image: 'assets/images/tarot/the-world.jpg',
      keywords: ['Completion', 'Achievement', 'Wholeness'],
      message:
        'A cycle may be reaching completion. Recognise how far you have come and allow yourself to appreciate the lessons that brought you here.'
    }

  ];

  selectedCard: TarotCard | null = null;

  hasPicked = false;

  pickCard(): void {

    const randomIndex =
      Math.floor(Math.random() * this.cards.length);

    this.selectedCard = this.cards[randomIndex];

    this.hasPicked = true;

    setTimeout(() => {
      document
        .getElementById('reading-result')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
    }, 100);
  }

  pickAnother(): void {
    this.hasPicked = false;
    this.selectedCard = null;

    setTimeout(() => {
      document
        .getElementById('pick-area')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
    }, 100);
  }
}