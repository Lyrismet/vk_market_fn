import * as React from "react";
import {Button, Card, Div, Header, SimpleCell} from "@vkontakte/vkui";
import {useCart} from "../context/CartContext.tsx";
import {MouseEventHandler} from "react";

export interface ProductCardProps {
    id: number;
    image: string;
    title: string;
    description: string;
    rating: Rating;
    price: number;
    count: number;
    increment: MouseEventHandler<HTMLElement>;
    decrement: MouseEventHandler<HTMLElement>;
}

interface Rating {
    count: number
}

const ProductCard: React.FC<ProductCardProps> = (
    {
        id,
        title,
        image,
        description,
        price,
        rating,
        count,
        increment,
        decrement,
    }) => {
    const { addToCart } = useCart();
    const handleAddToCart = () => {
        addToCart({ id, title, description, price, image, quantity: count});
    };
    return (
        <Card key={id}>
            <SimpleCell multiline>
                <img style={{width: '100%', height: 250, objectFit: 'contain', backgroundColor: 'white', padding: "30px 0", borderRadius: 10}} src={image} alt="image"/>
                <Header mode="primary" size="large" multiline>{title}</Header>
                <Div>{description}</Div>
                <Div>
                    <h3>Количество: {rating.count}</h3>
                    <h2>Цена: {price}$</h2>
                </Div>
                <Div style={{fontWeight: 'bold'}}>
                    <button onClick={increment} style={{marginRight: 20, cursor: 'pointer'}}>+</button>
                    {count}
                    <button onClick={decrement} style={{marginLeft: 20, cursor: 'pointer'}}>-</button>
                    <Button onClick={handleAddToCart} stretched style={{marginTop: 20}}>Добавить в корзину</Button>
                </Div>

            </SimpleCell>
        </Card>
    );
};

export default ProductCard;