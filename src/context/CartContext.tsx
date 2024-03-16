import {createContext, ReactNode, useContext, useState} from 'react';
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}
export interface CartContextType {
    cartItems: Product[];
    addToCart: (item: Product) => void;
    removeFromCart: (itemId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartProvider: React.FC<{children?: ReactNode}> = ({children}) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const addToCart = (item: Product) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(prevItem => prevItem.id === item.id);
            if (existingItemIndex !== -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = { ...prevItems[existingItemIndex], quantity: prevItems[existingItemIndex].quantity + item.quantity };
                return updatedItems;
            } else {
                return [...prevItems, { ...item, quantity: item.quantity }];
            }
        });
    };

    const removeFromCart = (itemId: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
