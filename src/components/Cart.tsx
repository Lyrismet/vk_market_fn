import {Button, Div, Group, Header, Image, SimpleCell} from "@vkontakte/vkui";
import {Product, useCart} from '../context/CartContext.tsx';
import {FaTrashAlt} from "react-icons/fa";


const Cart: React.FC = () => {
    const {cartItems, removeFromCart} = useCart();
    const totalAmount = cartItems.reduce((total: number, item: Product) => total + (item.price * item.quantity), 0);
    return (
        <Group>
            <Div>
                <Header mode="secondary">Корзина</Header>
                {cartItems.map((item: Product) => (
                    <div key={item.id}>
                        <Group>
                            <SimpleCell
                                before={<Image src={item.image}/>}
                                after={<Button before={<FaTrashAlt/>} style={{cursor: 'pointer'}}
                                               onClick={() => removeFromCart(item.id)}></Button>}>
                                <Header mode="primary">{item.quantity > 1 &&
                                  <span>x{item.quantity}</span>} {item.title}</Header>
                                <SimpleCell>
                                    <span style={{fontWeight: 'bold', fontSize: 20}}>{item.price}$</span>
                                </SimpleCell>
                            </SimpleCell>
                        </Group>

                    </div>
                ))}
                <h2>Итого: {totalAmount.toFixed(2)}$</h2>
            </Div>
        </Group>
    );
};

export default Cart;