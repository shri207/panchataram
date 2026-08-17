export type MenuCategory = 
  | 'all'
  | 'must_try'
  | 'cafe_favourites'
  | 'small_plates'
  | 'mains'
  | 'burgers_sandwiches'
  | 'beverages';

export type DietaryType = 'veg' | 'non-veg' | 'egg';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  dietary: DietaryType;
  description: string;
  handwrittenNote?: string;
  isMustTry?: boolean;
  isFav?: boolean;
  image?: string;
  spiciness?: 1 | 2 | 3;
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  tag: string;
  rating: number;
  date: string;
  handwrittenComment?: string;
}

export interface CommunityPost {
  id: string;
  title: string;
  caption: string;
  tag: string;
  image: string;
  rotation: string;
}

export interface OrderItem {
  menuItem: MenuItem;
  quantity: number;
  notes?: string;
}
