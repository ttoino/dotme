import { RichText } from "./cv";

export type Category = 'design' | 'development' | 'marketing';

export const categories: Category[] = [
    'design',
    'development',
    'marketing',
];

export const categoryLabels: Record<Category, string> = {
    design: 'Design',
    development: 'Development',
    marketing: 'Marketing',
};

export interface Template {
    name: string;
    description: RichText;
    image: string;
    category: Category;
    price: number;
}
