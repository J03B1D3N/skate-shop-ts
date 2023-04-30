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
            <img src={item.src} alt="images"></img>
            <div className="cartItemMenu">
                <div className="itemName">{item.name}</div>
                <div className="price">{formatCurrency(item.price)}</div>
            </div>
            <div className="quantity"> QUANTITY: {getItemQuantity(item.id)}</div>
            
        </div>
    )

}