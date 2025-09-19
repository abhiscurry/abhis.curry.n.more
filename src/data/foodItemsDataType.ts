interface MenuItem {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  quantity: string;
  isSignature?: boolean;
}

export interface MenuCategory {
  id: number;
  title: string;
  items: MenuItem[];
}
