import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TarotCard {
  name: string;
  number: string;
  meaning: string;
  keywords: string[];
}

interface TarotSuit {
  name: string;
  element: string;
  description: string;
  cards: string[];
}

@Component({
  selector: 'app-tarot',
  imports: [RouterLink],
  templateUrl: './tarot.html',
  styleUrl: './tarot.css'
})
export class Tarot {

  /* ================================
     FAQ
  ================================= */

  faqs = [
    {
      question: 'What is Tarot reading?',
      answer:
        'Tarot is a symbolic card system that can be used for reflection, insight and exploring different perspectives around a question or situation.'
    },
    {
      question: 'How many cards are in a Tarot deck?',
      answer:
        'A traditional Tarot deck contains 78 cards. It is divided into 22 Major Arcana cards and 56 Minor Arcana cards.'
    },
    {
      question: 'What is the difference between Major and Minor Arcana?',
      answer:
        'The Major Arcana contains 22 cards that are often associated with significant themes and life experiences. The Minor Arcana contains 56 cards organised into four suits and is commonly used to explore everyday situations and experiences.'
    },
    {
      question: 'Can Tarot predict my future?',
      answer:
        'Tarot is better approached as a tool for reflection and guidance rather than a guarantee of a fixed future. A reading can help you consider possibilities, patterns and choices.'
    },
    {
      question: 'What questions can I ask Tarot?',
      answer:
        'You can explore questions around relationships, career, personal growth, decisions and situations where you would like another perspective.'
    },
    {
      question: 'Is the free Tarot reading really free?',
      answer:
        'Yes. The free reading experience is designed to let you explore Tarot without booking a paid consultation.'
    }
  ];

  openFaq: number | null = null;

  toggleFaq(index: number): void {
    this.openFaq = this.openFaq === index ? null : index;
  }


  /* ================================
     MAJOR ARCANA — 22 CARDS
  ================================= */

  majorArcana: TarotCard[] = [
    {
      name: 'The Fool',
      number: '0',
      meaning: 'New beginnings, freedom, curiosity and taking a leap into the unknown.',
      keywords: ['New Beginnings', 'Adventure', 'Freedom']
    },
    {
      name: 'The Magician',
      number: 'I',
      meaning: 'Potential, action and using your abilities to turn intention into reality.',
      keywords: ['Manifestation', 'Action', 'Potential']
    },
    {
      name: 'The High Priestess',
      number: 'II',
      meaning: 'Intuition, inner knowledge and paying attention to what is not immediately visible.',
      keywords: ['Intuition', 'Mystery', 'Inner Wisdom']
    },
    {
      name: 'The Empress',
      number: 'III',
      meaning: 'Growth, creativity, abundance and nurturing what matters to you.',
      keywords: ['Abundance', 'Creativity', 'Nurturing']
    },
    {
      name: 'The Emperor',
      number: 'IV',
      meaning: 'Structure, authority, stability and taking responsibility.',
      keywords: ['Authority', 'Structure', 'Stability']
    },
    {
      name: 'The Hierophant',
      number: 'V',
      meaning: 'Tradition, learning, guidance and established systems of knowledge.',
      keywords: ['Tradition', 'Learning', 'Guidance']
    },
    {
      name: 'The Lovers',
      number: 'VI',
      meaning: 'Connection, values, meaningful choices and alignment between heart and action.',
      keywords: ['Love', 'Choice', 'Connection']
    },
    {
      name: 'The Chariot',
      number: 'VII',
      meaning: 'Determination, direction and moving forward through focused willpower.',
      keywords: ['Determination', 'Direction', 'Willpower']
    },
    {
      name: 'Strength',
      number: 'VIII',
      meaning: 'Inner courage, patience, compassion and quiet personal power.',
      keywords: ['Courage', 'Patience', 'Inner Power']
    },
    {
      name: 'The Hermit',
      number: 'IX',
      meaning: 'Reflection, solitude and finding wisdom by looking inward.',
      keywords: ['Reflection', 'Wisdom', 'Solitude']
    },
    {
      name: 'Wheel of Fortune',
      number: 'X',
      meaning: 'Cycles, changing circumstances and unexpected opportunities.',
      keywords: ['Change', 'Cycles', 'Opportunity']
    },
    {
      name: 'Justice',
      number: 'XI',
      meaning: 'Balance, accountability, truth and thoughtful decisions.',
      keywords: ['Balance', 'Truth', 'Fairness']
    },
    {
      name: 'The Hanged Man',
      number: 'XII',
      meaning: 'Pause, surrender and seeing a situation from a different perspective.',
      keywords: ['Perspective', 'Pause', 'Surrender']
    },
    {
      name: 'Death',
      number: 'XIII',
      meaning: 'Transformation, endings and making space for a new phase.',
      keywords: ['Transformation', 'Endings', 'Renewal']
    },
    {
      name: 'Temperance',
      number: 'XIV',
      meaning: 'Balance, patience, harmony and finding a sustainable middle ground.',
      keywords: ['Balance', 'Harmony', 'Patience']
    },
    {
      name: 'The Devil',
      number: 'XV',
      meaning: 'Attachments, patterns, temptation and recognising what may be holding you back.',
      keywords: ['Attachment', 'Patterns', 'Awareness']
    },
    {
      name: 'The Tower',
      number: 'XVI',
      meaning: 'Sudden change, disruption and the breaking down of structures that no longer serve you.',
      keywords: ['Change', 'Release', 'Revelation']
    },
    {
      name: 'The Star',
      number: 'XVII',
      meaning: 'Hope, renewal, inspiration and a return of optimism.',
      keywords: ['Hope', 'Healing', 'Renewal']
    },
    {
      name: 'The Moon',
      number: 'XVIII',
      meaning: 'Uncertainty, intuition, dreams and looking beyond appearances.',
      keywords: ['Intuition', 'Mystery', 'Uncertainty']
    },
    {
      name: 'The Sun',
      number: 'XIX',
      meaning: 'Joy, clarity, openness, confidence and positive energy.',
      keywords: ['Joy', 'Clarity', 'Success']
    },
    {
      name: 'Judgement',
      number: 'XX',
      meaning: 'Awakening, reflection, realisation and responding to an important inner call.',
      keywords: ['Awakening', 'Realisation', 'Renewal']
    },
    {
      name: 'The World',
      number: 'XXI',
      meaning: 'Completion, achievement, integration and reaching the end of a meaningful cycle.',
      keywords: ['Completion', 'Achievement', 'Wholeness']
    }
  ];


  /* ================================
     MINOR ARCANA — 56 CARDS
  ================================= */

  minorArcana: TarotSuit[] = [

    {
      name: 'Wands',
      element: 'Fire',
      description:
        'Wands are commonly associated with energy, ambition, creativity, movement and inspiration.',
      cards: [
        'Ace of Wands',
        'Two of Wands',
        'Three of Wands',
        'Four of Wands',
        'Five of Wands',
        'Six of Wands',
        'Seven of Wands',
        'Eight of Wands',
        'Nine of Wands',
        'Ten of Wands',
        'Page of Wands',
        'Knight of Wands',
        'Queen of Wands',
        'King of Wands'
      ]
    },

    {
      name: 'Cups',
      element: 'Water',
      description:
        'Cups are commonly connected with emotions, relationships, intuition, connection and the inner world.',
      cards: [
        'Ace of Cups',
        'Two of Cups',
        'Three of Cups',
        'Four of Cups',
        'Five of Cups',
        'Six of Cups',
        'Seven of Cups',
        'Eight of Cups',
        'Nine of Cups',
        'Ten of Cups',
        'Page of Cups',
        'Knight of Cups',
        'Queen of Cups',
        'King of Cups'
      ]
    },

    {
      name: 'Swords',
      element: 'Air',
      description:
        'Swords are commonly associated with thoughts, communication, decisions, challenges and mental clarity.',
      cards: [
        'Ace of Swords',
        'Two of Swords',
        'Three of Swords',
        'Four of Swords',
        'Five of Swords',
        'Six of Swords',
        'Seven of Swords',
        'Eight of Swords',
        'Nine of Swords',
        'Ten of Swords',
        'Page of Swords',
        'Knight of Swords',
        'Queen of Swords',
        'King of Swords'
      ]
    },

    {
      name: 'Pentacles',
      element: 'Earth',
      description:
        'Pentacles are commonly connected with practical matters, work, resources, stability and the material world.',
      cards: [
        'Ace of Pentacles',
        'Two of Pentacles',
        'Three of Pentacles',
        'Four of Pentacles',
        'Five of Pentacles',
        'Six of Pentacles',
        'Seven of Pentacles',
        'Eight of Pentacles',
        'Nine of Pentacles',
        'Ten of Pentacles',
        'Page of Pentacles',
        'Knight of Pentacles',
        'Queen of Pentacles',
        'King of Pentacles'
      ]
    }
  ];


  /* ================================
     TAROT SPREADS
  ================================= */

  spreads = [
    {
      number: '01',
      title: 'One Card',
      subtitle: 'A focused message',
      description:
        'Draw a single card when you want a simple theme or perspective for a particular question.'
    },
    {
      number: '02',
      title: 'Three Card',
      subtitle: 'A broader perspective',
      description:
        'Three cards can be used to explore different stages or perspectives within one situation.'
    },
    {
      number: '03',
      title: 'Celtic Cross',
      subtitle: 'A detailed exploration',
      description:
        'A ten-card spread that can be used for a deeper look at the influences surrounding a question.'
    },
    {
      number: '04',
      title: 'Relationship Spread',
      subtitle: 'Explore connection',
      description:
        'A relationship-focused layout can help you reflect on emotions, dynamics and possible areas of growth.'
    }
  ];


  /* ================================
     AREAS OF GUIDANCE
  ================================= */

  guidanceAreas = [
    {
      icon: '♡',
      title: 'Love & Relationships',
      description:
        'Reflect on connection, emotions, communication and relationship patterns.'
    },
    {
      icon: '✦',
      title: 'Career',
      description:
        'Explore your ambitions, choices, opportunities and professional direction.'
    },
    {
      icon: '◈',
      title: 'Personal Growth',
      description:
        'Use the cards as prompts for self-reflection, awareness and personal development.'
    },
    {
      icon: '⌁',
      title: 'Life Decisions',
      description:
        'Look at a situation from another angle when you are weighing different possibilities.'
    }
  ];


  /* ================================
     HOW TAROT WORKS
  ================================= */

  tarotSteps = [
    {
      number: '01',
      title: 'Ask your question',
      description:
        'Begin with a question or situation that you genuinely want to explore.'
    },
    {
      number: '02',
      title: 'Set your intention',
      description:
        'Take a moment to focus your attention on what you would like clarity around.'
    },
    {
      number: '03',
      title: 'Choose your cards',
      description:
        'Select a spread and draw the number of cards that fit your reading.'
    },
    {
      number: '04',
      title: 'Explore the message',
      description:
        'Consider the card symbolism, its position and what the message brings up for you.'
    }
  ];


  /* ================================
     FREE READING OPTIONS
  ================================= */

  freeReadings = [
    {
      icon: '✦',
      title: 'One Card Reading',
      description:
        'A quick single-card reading for a focused question.',
      route: '/free-services/pick-a-card'
    },
    {
      icon: '✧',
      title: 'Three Card Reading',
      description:
        'Explore a situation through three different perspectives.',
      route: '/free-services/pick-a-card'
    },
    {
      icon: '♡',
      title: 'Love Reading',
      description:
        'Reflect on relationships, emotions and matters of the heart.',
      route: '/free-services/pick-a-card'
    },
    {
      icon: '✓',
      title: 'Yes / No Reading',
      description:
        'Use a simple card-based approach when your question needs focused reflection.',
      route: '/free-services/pick-a-card'
    }
  ];
}