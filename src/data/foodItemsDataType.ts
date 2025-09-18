interface MenuItem {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  isSignature?: boolean;
}

export interface MenuCategory {
  id: number;
  title: string;
  items: MenuItem[];
}
