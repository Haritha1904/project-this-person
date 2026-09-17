import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TarotCard {
  name: string;
  number: string;
  keywords: string[];
  message: string;
  symbol: string;
}

@Component({
  selector: 'app-pick-a-card',
  imports: [RouterLink],
  templateUrl: './pick-a-card.html',
  styleUrl: './pick-a-card.css'
})
export class PickACard {

  /* =========================================================
     COMPLETE 78-CARD TAROT DECK
  ========================================================= */

  cards: TarotCard[] = [

    /* =========================
       MAJOR ARCANA
    ========================= */

    {
      name: 'The Fool',
      number: '0',
      keywords: ['New Beginnings', 'Adventure', 'Freedom'],
      message:
        'A fresh chapter may be opening. Approach what comes next with curiosity and an open mind. You do not need to know every step before taking the first one.',
      symbol: '✧'
    },
    {
      name: 'The Magician',
      number: 'I',
      keywords: ['Action', 'Potential', 'Manifestation'],
      message:
        'You may have more resources and abilities than you realise. Turn intention into action and trust your ability to begin.',
      symbol: '☿'
    },
    {
      name: 'The High Priestess',
      number: 'II',
      keywords: ['Intuition', 'Mystery', 'Inner Wisdom'],
      message:
        'Not every answer needs to be found immediately. Slow down, listen inward and allow what is beneath the surface to become clearer.',
      symbol: '☾'
    },
    {
      name: 'The Empress',
      number: 'III',
      keywords: ['Abundance', 'Creativity', 'Nurturing'],
      message:
        'Something in your life may be ready to grow. Give your attention and care to the people, ideas and goals that matter to you.',
      symbol: '♀'
    },
    {
      name: 'The Emperor',
      number: 'IV',
      keywords: ['Structure', 'Authority', 'Stability'],
      message:
        'Create structure around what matters. Clear boundaries and thoughtful leadership can help you feel more grounded.',
      symbol: '♜'
    },
    {
      name: 'The Hierophant',
      number: 'V',
      keywords: ['Tradition', 'Learning', 'Guidance'],
      message:
        'There may be something valuable to learn from experience, tradition or a trusted source of guidance.',
      symbol: '✝'
    },
    {
      name: 'The Lovers',
      number: 'VI',
      keywords: ['Connection', 'Choice', 'Harmony'],
      message:
        'A meaningful connection or important choice may be central to your situation. Look for alignment between what you value and what you choose.',
      symbol: '♡'
    },
    {
      name: 'The Chariot',
      number: 'VII',
      keywords: ['Determination', 'Direction', 'Willpower'],
      message:
        'Choose your direction and move forward with intention. Focus can help bring different forces into alignment.',
      symbol: '◆'
    },
    {
      name: 'Strength',
      number: 'VIII',
      keywords: ['Courage', 'Patience', 'Inner Power'],
      message:
        'Your greatest strength may come through patience rather than force. Meet the situation with calm confidence.',
      symbol: '∞'
    },
    {
      name: 'The Hermit',
      number: 'IX',
      keywords: ['Reflection', 'Wisdom', 'Solitude'],
      message:
        'Step away from outside noise for a moment. Quiet reflection may reveal something you could not see before.',
      symbol: '☾'
    },
    {
      name: 'Wheel of Fortune',
      number: 'X',
      keywords: ['Change', 'Cycles', 'Opportunity'],
      message:
        'Life moves through cycles. Stay adaptable and pay attention to opportunities that appear as circumstances change.',
      symbol: '◉'
    },
    {
      name: 'Justice',
      number: 'XI',
      keywords: ['Balance', 'Truth', 'Fairness'],
      message:
        'Look at the situation honestly. Balanced decisions become easier when emotions, facts and consequences are considered together.',
      symbol: '⚖'
    },
    {
      name: 'The Hanged Man',
      number: 'XII',
      keywords: ['Perspective', 'Pause', 'Surrender'],
      message:
        'A pause may be useful. Try looking at the situation from a completely different angle before deciding what comes next.',
      symbol: '⌁'
    },
    {
      name: 'Death',
      number: 'XIII',
      keywords: ['Transformation', 'Endings', 'Renewal'],
      message:
        'An ending can create room for something new. Consider what you are ready to release so that the next chapter can begin.',
      symbol: '✦'
    },
    {
      name: 'Temperance',
      number: 'XIV',
      keywords: ['Balance', 'Harmony', 'Patience'],
      message:
        'Find the middle ground. Patience and moderation may help seemingly different parts of your life work together.',
      symbol: '◐'
    },
    {
      name: 'The Devil',
      number: 'XV',
      keywords: ['Attachment', 'Patterns', 'Awareness'],
      message:
        'Notice the patterns that may be keeping you stuck. Awareness is often the first step toward choosing differently.',
      symbol: '♄'
    },
    {
      name: 'The Tower',
      number: 'XVI',
      keywords: ['Change', 'Release', 'Revelation'],
      message:
        'Something unexpected may challenge an existing structure. What changes can ultimately create space for greater honesty.',
      symbol: 'ϟ'
    },
    {
      name: 'The Star',
      number: 'XVII',
      keywords: ['Hope', 'Healing', 'Renewal'],
      message:
        'Give yourself permission to hope. A difficult period does not define the entire journey, and renewal can begin gradually.',
      symbol: '☆'
    },
    {
      name: 'The Moon',
      number: 'XVIII',
      keywords: ['Intuition', 'Uncertainty', 'Dreams'],
      message:
        'Some details may still be unclear. Give yourself time and pay attention to intuition rather than rushing toward a conclusion.',
      symbol: '☽'
    },
    {
      name: 'The Sun',
      number: 'XIX',
      keywords: ['Joy', 'Clarity', 'Success'],
      message:
        'Clarity and openness are highlighted. Let yourself recognise the positive aspects of the situation and move forward with confidence.',
      symbol: '☀'
    },
    {
      name: 'Judgement',
      number: 'XX',
      keywords: ['Awakening', 'Realisation', 'Renewal'],
      message:
        'A realisation may be asking for your attention. Reflect on what you have learned and consider what you are ready to change.',
      symbol: '◉'
    },
    {
      name: 'The World',
      number: 'XXI',
      keywords: ['Completion', 'Achievement', 'Wholeness'],
      message:
        'A meaningful cycle may be reaching completion. Take a moment to recognise how far you have come before beginning again.',
      symbol: '◎'
    },


    /* =========================
       WANDS
    ========================= */

    {
      name: 'Ace of Wands',
      number: 'ACE',
      keywords: ['Inspiration', 'Passion', 'Opportunity'],
      message:
        'A spark of inspiration is ready to become something more. Pay attention to the idea that makes you want to begin.',
      symbol: '🔥'
    },
    {
      name: 'Two of Wands',
      number: 'II',
      keywords: ['Planning', 'Vision', 'Choice'],
      message:
        'You may be standing between where you are and where you want to go. Take time to consider the bigger picture.',
      symbol: '🔥'
    },
    {
      name: 'Three of Wands',
      number: 'III',
      keywords: ['Expansion', 'Progress', 'Future'],
      message:
        'Your efforts may be beginning to move outward. Keep your attention on the possibilities ahead.',
      symbol: '🔥'
    },
    {
      name: 'Four of Wands',
      number: 'IV',
      keywords: ['Celebration', 'Stability', 'Community'],
      message:
        'There is room to appreciate progress and the people who support you. Celebrate what has already been created.',
      symbol: '🔥'
    },
    {
      name: 'Five of Wands',
      number: 'V',
      keywords: ['Competition', 'Challenge', 'Tension'],
      message:
        'Different opinions or competing priorities may be creating friction. Choose which challenges are actually worth your energy.',
      symbol: '🔥'
    },
    {
      name: 'Six of Wands',
      number: 'VI',
      keywords: ['Recognition', 'Confidence', 'Progress'],
      message:
        'Your effort may be receiving recognition. Allow yourself to acknowledge progress without losing sight of what comes next.',
      symbol: '🔥'
    },
    {
      name: 'Seven of Wands',
      number: 'VII',
      keywords: ['Courage', 'Boundaries', 'Persistence'],
      message:
        'Stand firmly behind what matters to you. Protect your boundaries while remaining thoughtful about where you spend your energy.',
      symbol: '🔥'
    },
    {
      name: 'Eight of Wands',
      number: 'VIII',
      keywords: ['Movement', 'Speed', 'Communication'],
      message:
        'Things may begin moving faster. Stay organised and be ready to respond when communication or opportunities arrive.',
      symbol: '🔥'
    },
    {
      name: 'Nine of Wands',
      number: 'IX',
      keywords: ['Resilience', 'Persistence', 'Strength'],
      message:
        'You have already come through challenges. Protect your energy while remembering how much resilience you have developed.',
      symbol: '🔥'
    },
    {
      name: 'Ten of Wands',
      number: 'X',
      keywords: ['Responsibility', 'Burden', 'Release'],
      message:
        'You may be carrying more than you need to. Consider what can be delegated, simplified or released.',
      symbol: '🔥'
    },
    {
      name: 'Page of Wands',
      number: 'PAGE',
      keywords: ['Curiosity', 'Discovery', 'Excitement'],
      message:
        'Approach the next possibility with curiosity. A new interest could become meaningful if you give it room to develop.',
      symbol: '🔥'
    },
    {
      name: 'Knight of Wands',
      number: 'KNIGHT',
      keywords: ['Action', 'Confidence', 'Adventure'],
      message:
        'Momentum is available, but avoid rushing without direction. Let enthusiasm support purposeful action.',
      symbol: '🔥'
    },
    {
      name: 'Queen of Wands',
      number: 'QUEEN',
      keywords: ['Confidence', 'Creativity', 'Independence'],
      message:
        'Trust your presence and abilities. You do not need to shrink yourself to make others comfortable.',
      symbol: '🔥'
    },
    {
      name: 'King of Wands',
      number: 'KING',
      keywords: ['Leadership', 'Vision', 'Ambition'],
      message:
        'Think beyond the immediate moment. Clear vision combined with decisive action can help turn ambition into progress.',
      symbol: '🔥'
    },


    /* =========================
       CUPS
    ========================= */

    {
      name: 'Ace of Cups',
      number: 'ACE',
      keywords: ['Emotion', 'Opening', 'Connection'],
      message:
        'Your emotional world may be opening toward something new. Allow yourself to receive and express what you genuinely feel.',
      symbol: '♡'
    },
    {
      name: 'Two of Cups',
      number: 'II',
      keywords: ['Partnership', 'Connection', 'Mutuality'],
      message:
        'Mutual understanding and genuine connection are highlighted. Consider how trust and openness can strengthen a relationship.',
      symbol: '♡'
    },
    {
      name: 'Three of Cups',
      number: 'III',
      keywords: ['Friendship', 'Joy', 'Community'],
      message:
        'Connection with others can bring renewed energy. Make room for people who help you feel supported and understood.',
      symbol: '♡'
    },
    {
      name: 'Four of Cups',
      number: 'IV',
      keywords: ['Reflection', 'Apathy', 'Awareness'],
      message:
        'Something may be available that you have not fully noticed. Step back from automatic reactions and reconsider your options.',
      symbol: '♡'
    },
    {
      name: 'Five of Cups',
      number: 'V',
      keywords: ['Loss', 'Emotion', 'Perspective'],
      message:
        'It is natural to acknowledge disappointment, but do not overlook what remains. Healing often begins by recognising both sides.',
      symbol: '♡'
    },
    {
      name: 'Six of Cups',
      number: 'VI',
      keywords: ['Memories', 'Nostalgia', 'Kindness'],
      message:
        'The past may be influencing your present. Take what is meaningful from earlier experiences without becoming trapped by them.',
      symbol: '♡'
    },
    {
      name: 'Seven of Cups',
      number: 'VII',
      keywords: ['Choices', 'Imagination', 'Possibilities'],
      message:
        'Many possibilities may be competing for your attention. Clarity comes from distinguishing what you truly want from what merely looks appealing.',
      symbol: '♡'
    },
    {
      name: 'Eight of Cups',
      number: 'VIII',
      keywords: ['Leaving', 'Growth', 'Search'],
      message:
        'Something may no longer feel emotionally fulfilling. Walking away can sometimes create the space needed for deeper growth.',
      symbol: '♡'
    },
    {
      name: 'Nine of Cups',
      number: 'IX',
      keywords: ['Satisfaction', 'Gratitude', 'Desire'],
      message:
        'Pause and recognise what is already going well. Appreciation can change the way you experience the present.',
      symbol: '♡'
    },
    {
      name: 'Ten of Cups',
      number: 'X',
      keywords: ['Harmony', 'Connection', 'Emotional Fulfilment'],
      message:
        'A sense of emotional belonging is highlighted. Nurture the relationships and environments where you can be genuinely yourself.',
      symbol: '♡'
    },
    {
      name: 'Page of Cups',
      number: 'PAGE',
      keywords: ['Sensitivity', 'Creativity', 'Message'],
      message:
        'Stay open to an unexpected emotional insight. Creativity and sensitivity may reveal something your logical mind has overlooked.',
      symbol: '♡'
    },
    {
      name: 'Knight of Cups',
      number: 'KNIGHT',
      keywords: ['Romance', 'Idealism', 'Invitation'],
      message:
        'Follow what genuinely inspires you, while keeping one foot grounded. Let emotion guide you without allowing fantasy to take over.',
      symbol: '♡'
    },
    {
      name: 'Queen of Cups',
      number: 'QUEEN',
      keywords: ['Compassion', 'Intuition', 'Emotional Wisdom'],
      message:
        'Your sensitivity can be a strength. Trust what you feel while maintaining healthy emotional boundaries.',
      symbol: '♡'
    },
    {
      name: 'King of Cups',
      number: 'KING',
      keywords: ['Emotional Balance', 'Wisdom', 'Calm'],
      message:
        'Respond rather than react. Emotional maturity can help you navigate a difficult situation with compassion and steadiness.',
      symbol: '♡'
    },


    /* =========================
       SWORDS
    ========================= */

    {
      name: 'Ace of Swords',
      number: 'ACE',
      keywords: ['Clarity', 'Truth', 'Breakthrough'],
      message:
        'A clear idea or important truth may be emerging. Give yourself permission to see the situation honestly.',
      symbol: '⚔'
    },
    {
      name: 'Two of Swords',
      number: 'II',
      keywords: ['Decision', 'Uncertainty', 'Balance'],
      message:
        'A decision may be difficult because part of you is trying to avoid uncomfortable information. Give yourself space to face it.',
      symbol: '⚔'
    },
    {
      name: 'Three of Swords',
      number: 'III',
      keywords: ['Heartbreak', 'Truth', 'Healing'],
      message:
        'Something may need to be acknowledged before it can heal. Honest recognition of difficult emotions can be a turning point.',
      symbol: '⚔'
    },
    {
      name: 'Four of Swords',
      number: 'IV',
      keywords: ['Rest', 'Recovery', 'Pause'],
      message:
        'Your mind may need a genuine pause. Rest is not wasted time when it allows you to return with greater clarity.',
      symbol: '⚔'
    },
    {
      name: 'Five of Swords',
      number: 'V',
      keywords: ['Conflict', 'Perspective', 'Choice'],
      message:
        'Not every disagreement needs to become a victory. Consider whether the outcome is worth the energy required to achieve it.',
      symbol: '⚔'
    },
    {
      name: 'Six of Swords',
      number: 'VI',
      keywords: ['Transition', 'Moving Forward', 'Release'],
      message:
        'You may be gradually moving away from a difficult period. Allow the transition to happen one step at a time.',
      symbol: '⚔'
    },
    {
      name: 'Seven of Swords',
      number: 'VII',
      keywords: ['Strategy', 'Independence', 'Awareness'],
      message:
        'Think carefully about your next move. A thoughtful strategy may be more useful than acting immediately.',
      symbol: '⚔'
    },
    {
      name: 'Eight of Swords',
      number: 'VIII',
      keywords: ['Restriction', 'Mindset', 'Perspective'],
      message:
        'A situation may feel more limiting than it actually is. Question the assumptions that are keeping you from seeing alternatives.',
      symbol: '⚔'
    },
    {
      name: 'Nine of Swords',
      number: 'IX',
      keywords: ['Worry', 'Thoughts', 'Release'],
      message:
        'Anxiety can make possibilities seem larger than they are. Bring your attention back to what is actually within your control.',
      symbol: '⚔'
    },
    {
      name: 'Ten of Swords',
      number: 'X',
      keywords: ['Ending', 'Release', 'New Perspective'],
      message:
        'A difficult chapter may be reaching its limit. Let an ending be an ending and allow yourself to consider what comes after it.',
      symbol: '⚔'
    },
    {
      name: 'Page of Swords',
      number: 'PAGE',
      keywords: ['Curiosity', 'Observation', 'Communication'],
      message:
        'Ask questions and gather information before forming a conclusion. Curiosity can reveal what assumptions may have missed.',
      symbol: '⚔'
    },
    {
      name: 'Knight of Swords',
      number: 'KNIGHT',
      keywords: ['Drive', 'Action', 'Determination'],
      message:
        'You may feel ready to act quickly. Direct that energy toward a clear objective rather than reacting impulsively.',
      symbol: '⚔'
    },
    {
      name: 'Queen of Swords',
      number: 'QUEEN',
      keywords: ['Clarity', 'Boundaries', 'Discernment'],
      message:
        'Be honest with yourself. Clear boundaries and thoughtful discernment can protect what truly matters.',
      symbol: '⚔'
    },
    {
      name: 'King of Swords',
      number: 'KING',
      keywords: ['Logic', 'Authority', 'Judgement'],
      message:
        'Step back and assess the facts. A calm, logical approach may help you make a stronger decision.',
      symbol: '⚔'
    },


    /* =========================
       PENTACLES
    ========================= */

    {
      name: 'Ace of Pentacles',
      number: 'ACE',
      keywords: ['Opportunity', 'Stability', 'Growth'],
      message:
        'A practical opportunity may be presenting itself. Give attention to possibilities that can create lasting foundations.',
      symbol: '◇'
    },
    {
      name: 'Two of Pentacles',
      number: 'II',
      keywords: ['Balance', 'Adaptation', 'Priorities'],
      message:
        'You may be balancing several responsibilities. Adjust your priorities rather than expecting everything to remain perfectly equal.',
      symbol: '◇'
    },
    {
      name: 'Three of Pentacles',
      number: 'III',
      keywords: ['Teamwork', 'Skill', 'Collaboration'],
      message:
        'Good work can become stronger through collaboration. Recognise the skills you bring and appreciate the skills others contribute.',
      symbol: '◇'
    },
    {
      name: 'Four of Pentacles',
      number: 'IV',
      keywords: ['Security', 'Control', 'Possession'],
      message:
        'Security matters, but excessive control can prevent growth. Consider where holding tightly may no longer be necessary.',
      symbol: '◇'
    },
    {
      name: 'Five of Pentacles',
      number: 'V',
      keywords: ['Challenge', 'Support', 'Resilience'],
      message:
        'A difficult period does not mean you have to face everything alone. Look for available support and practical next steps.',
      symbol: '◇'
    },
    {
      name: 'Six of Pentacles',
      number: 'VI',
      keywords: ['Generosity', 'Support', 'Balance'],
      message:
        'Consider the balance between giving and receiving. Healthy support flows in both directions.',
      symbol: '◇'
    },
    {
      name: 'Seven of Pentacles',
      number: 'VII',
      keywords: ['Patience', 'Progress', 'Evaluation'],
      message:
        'Growth can take time. Review what you have invested and decide what deserves continued attention.',
      symbol: '◇'
    },
    {
      name: 'Eight of Pentacles',
      number: 'VIII',
      keywords: ['Practice', 'Learning', 'Mastery'],
      message:
        'Consistent effort can create meaningful progress. Focus on improving your craft one step at a time.',
      symbol: '◇'
    },
    {
      name: 'Nine of Pentacles',
      number: 'IX',
      keywords: ['Independence', 'Achievement', 'Self-Worth'],
      message:
        'Take pride in what you have built. Independence becomes more meaningful when you recognise your own contribution.',
      symbol: '◇'
    },
    {
      name: 'Ten of Pentacles',
      number: 'X',
      keywords: ['Legacy', 'Stability', 'Security'],
      message:
        'Think about the foundations you are creating for the future. Long-term stability can come from choices made consistently today.',
      symbol: '◇'
    },
    {
      name: 'Page of Pentacles',
      number: 'PAGE',
      keywords: ['Learning', 'Opportunity', 'Practicality'],
      message:
        'A practical new opportunity may be worth exploring. Approach it as a learner and allow your skills to develop.',
      symbol: '◇'
    },
    {
      name: 'Knight of Pentacles',
      number: 'KNIGHT',
      keywords: ['Consistency', 'Discipline', 'Progress'],
      message:
        'Slow and steady progress can be powerful. Keep showing up for what matters instead of looking for shortcuts.',
      symbol: '◇'
    },
    {
      name: 'Queen of Pentacles',
      number: 'QUEEN',
      keywords: ['Grounding', 'Care', 'Abundance'],
      message:
        'Create an environment where you can thrive. Practical care for yourself and your surroundings can support long-term growth.',
      symbol: '◇'
    },
    {
      name: 'King of Pentacles',
      number: 'KING',
      keywords: ['Success', 'Security', 'Leadership'],
      message:
        'Build with patience and responsibility. Sustainable success comes from combining ambition with sound foundations.',
      symbol: '◇'
    }
  ];


  /* =========================================================
     STATE
  ========================================================= */

  selectedCard: TarotCard | null = null;

  selectedIndex: number | null = null;

  isRevealing = false;

  hasPicked = false;

  isPicking = false;
  imageFailed = false;


  /* =========================================================
     PICK CARD
  ========================================================= */

  pickCard(index: number): void {

    if (this.isPicking || this.hasPicked) {
      return;
    }

    this.isPicking = true;
    this.selectedIndex = index;

    setTimeout(() => {

      const randomIndex =
        Math.floor(Math.random() * this.cards.length);

      this.selectedCard = this.cards[randomIndex];

      this.isRevealing = true;

    }, 650);

    setTimeout(() => {

      this.hasPicked = true;
      this.isPicking = false;

      setTimeout(() => {

        document
          .getElementById('reading-result')
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

      }, 150);

    }, 1200);
  }


  /* =========================================================
     PICK ANOTHER CARD
  ========================================================= */

  pickAnother(): void {

    this.hasPicked = false;
    this.isRevealing = false;
    this.selectedCard = null;
    this.selectedIndex = null;
    this.imageFailed = false;

    setTimeout(() => {

      document
        .getElementById('pick-area')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

    }, 100);

  }


  /* =========================================================
     CARD POSITIONS
  ========================================================= */

  getDeckCards(): number[] {

    return Array.from(
      { length: 12 },
      (_, index) => index
    );

  }


  getCardRotation(index: number): string {

    const rotations = [
      '-7deg',
      '-5deg',
      '-3deg',
      '-2deg',
      '-1deg',
      '0deg',
      '1deg',
      '2deg',
      '3deg',
      '4deg',
      '6deg',
      '8deg'
    ];

    return rotations[index] || '0deg';

  }


  getCardOffset(index: number): string {

    const offsets = [
      '-20px',
      '-12px',
      '-7px',
      '-3px',
      '0px',
      '2px',
      '0px',
      '-2px',
      '-6px',
      '-10px',
      '-15px',
      '-22px'
    ];

    return offsets[index] || '0px';

  }

  getCardImage(card: TarotCard): string {
    const filename = card.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    return `assets/images/tarot/${filename}.jpg`;
  }

}