import {CardGrid} from "@vkontakte/vkui";
import ProductCard, {ProductCardProps} from "./ProductCard.tsx";
import {useEffect, useState} from "react";

const ProductList = () => {
    const [counts, setCounts] = useState<Record<string | number, number>>({});
    const [items, setItems] = useState<ProductCardProps[]>([]);
    const incrementCount = (id: number) => {
        setCounts((prevCounts: Record<number, number>) => {
            const currentCount = (prevCounts[id] || 1) + 1;
            return {
                ...prevCounts,
                [id]: Math.min(currentCount, 10)
            };
        });
    };

    const decrementCount = (id: number) => {
        setCounts((prevCounts: Record<number, number>) => {
            const currentCount = (prevCounts[id] || 1) - 1;
            return {
                ...prevCounts,
                [id]: Math.max(Math.min(currentCount, 10), 1)
            };
        });
    };

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const data: ProductCardProps[] = await response.json();
                if (data) {
                    setItems(data);
                } else {
                    console.error('Ошибка получения данных');
                }

            } catch (error) {
                console.error('Ошибка при запросе данных:', error);
            }
        }
        fetchItems().then(() => {})
    }, [])
    return (
        <CardGrid>
           {items && items.map((item, key) => (
                <ProductCard key={key}
                             count={counts[item.id] || 1}
                             decrement={() => decrementCount(item.id)}
                             increment={() => incrementCount(item.id)}
                             description={item.description}
                             id={item.id}
                             image={item.image}
                             price={item.price}
                             rating={item.rating}
                             title={item.title} />
            ))}
        </CardGrid>
    );
};

export default ProductList;