import {create} from 'zustand';

interface Drink {
    name: string;
    price: number;
    quantity: number;
    img: string;
}

interface ICartStore {
    cart: Drink[];
    addDrink: (drink:Drink) => void;
    removeDrink: (index:number) => void;
    quantity: number;
    sendOrder: () => void;
}

export const useCartStore = create<ICartStore>((set) => ({
    cart: [],

    addDrink: (drink:Drink) => set((state) => ({ cart: [...state.cart, drink], quantity: state.cart.length + 1 })),

    removeDrink: (index:number) => set((state) => ({ cart: state.cart.filter((d,i) => i !== index), quantity: state.cart.length - 1 })),

    quantity: 0, 

    sendOrder: () => set((state) => ({ cart: [], quantity: 0 })),

}));