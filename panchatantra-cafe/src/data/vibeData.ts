import { CommunityPost, ReviewItem } from '../types';

export const REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    quote: 'The place is so cosy, beautiful ambience and lovely people. You can sit with a book or your laptop for 4 hours without anyone rushing you.',
    author: 'Ananya S.',
    tag: 'REGULAR SINCE 2022',
    rating: 5,
    date: '3 days ago',
    handwrittenComment: 'Corner seat 4 is my second home.',
  },
  {
    id: 'r2',
    quote: 'The OG Chilli Paneer and Nutella Cold Coffee here hit differently. Best hangout in Begumpet without the sterile corporate vibe.',
    author: 'Karthik Rao',
    tag: 'FOOD ENTHUSIAST',
    rating: 5,
    date: '1 week ago',
    handwrittenComment: 'Get the Extra Garlic dip!',
  },
  {
    id: 'r3',
    quote: 'A hidden gem tucked in Lane 5. The playlist is always top tier, lighting is moody and warm, and the Katsu Curry Chicken is unmatched in town.',
    author: 'Meghana & Varun',
    tag: 'WEEKEND CO-WORKERS',
    rating: 5,
    date: '2 weeks ago',
    handwrittenComment: 'Best Japanese curry in Hyderabad.',
  },
  {
    id: 'r4',
    quote: 'Artistic decor, indie posters on charcoal walls, board games, and friendly faces. Panchatantra genuinely has a soul.',
    author: 'Siddharth M.',
    tag: 'LOCAL ARTIST',
    rating: 5,
    date: 'Last month',
    handwrittenComment: 'Doodles on napkins are encouraged :)',
  },
  {
    id: 'r5',
    quote: 'Super reasonable prices for large portions. Buttermilk fried chicken and the Peach Iced Tea are mandatory every visit.',
    author: 'Rhea D.',
    tag: 'STUDENT HANGOUT',
    rating: 5,
    date: 'Last month',
    handwrittenComment: 'The vibes are immaculate.',
  },
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'post-1',
    title: 'ACOUSTIC NIGHTS',
    caption: 'Unplugged chords, cold brews, and unscripted singalongs every alternate Thursday.',
    tag: 'LIVE SESSIONS',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    rotation: '-rotate-2',
  },
  {
    id: 'post-2',
    title: 'CHESS & CATEN',
    caption: 'Board games stack in the library corner. Loser buys the next round of Nutella Cold Coffee.',
    tag: 'SUNDAY GAMES',
    image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80',
    rotation: 'rotate-3',
  },
  {
    id: 'post-3',
    title: 'POUR OVER CRAFT',
    caption: 'Handcrafted arabica single origin beans ground fresh to order for slow sipping.',
    tag: 'COFFEE CULTURE',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    rotation: '-rotate-1',
  },
  {
    id: 'post-4',
    title: 'THE ART CORNER',
    caption: 'Local indie zines, postcard drops, and sketch pads lying on every table.',
    tag: 'HYDERABAD INDIE',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
    rotation: 'rotate-2',
  },
  {
    id: 'post-5',
    title: 'LATE NIGHT CONVERSATIONS',
    caption: 'When 8 PM dinner quietly rolls into 10:45 PM philosophical debates.',
    tag: 'VIBES',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
    rotation: '-rotate-3',
  },
  {
    id: 'post-6',
    title: 'CRISPY SIZZLE',
    caption: 'From our wok directly to your table — hot, fragrant, and unapologetically flavorful.',
    tag: 'KITCHEN DISPATCH',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    rotation: 'rotate-1',
  },
];

export const VIBE_TIMELINE = [
  {
    time: '11:00 AM',
    title: 'Quiet Morning Shift',
    desc: 'Soft jazz, sunlight spilling through the front glass, pour-overs and developers deep in focus mode.',
    icon: 'Sun',
  },
  {
    time: '02:30 PM',
    title: 'Comfort Lunch Rush',
    desc: 'Woks clanging in the kitchen, piping hot Katsu curries, garlic chilli paneer, and iced coolers.',
    icon: 'Utensils',
  },
  {
    time: '05:30 PM',
    title: 'Golden Hour & Games',
    desc: 'College crews, laptop switch-offs, Catan boards unfold, snacks rolling out table after table.',
    icon: 'Coffee',
  },
  {
    time: '08:30 PM',
    title: 'Moody Evening Lounge',
    desc: 'Warm dim lamps, indie playlist, laughter across corners, long conversations that linger past last call.',
    icon: 'Moon',
  },
];
