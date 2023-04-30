import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity}:CartItemProps){

    const {increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, getItemQuantity} = useShoppingCart()

    const item = storeItems.find(i => i.id === id)

    if(item ==null) return null

    return (
        <div className="cartItem">
            <div className="wrapper">
                <img src={item.src} alt="images"></img>
                <div className="cartItemMenu">
                    <div className="itemName">{item.name}</div>
                    <div className="price">{formatCurrency(item.price)}</div>
                    <div className="quantity">
                        <button className="decrease" onClick={() => decreaseCartQuantity(item.id)}>-</button>
                        {getItemQuantity(item.id)}
                        <button className="decrease" onClick={() => increaseCartQuantity(item.id)}>+</button>
                    </div>
                </div>
            </div>
            <div className="deleteItem"><button className="delete" onClick={() => removeFromCart(id)}></button></div>
        </div>
    )

}