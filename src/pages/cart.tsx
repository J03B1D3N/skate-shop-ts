import { useShoppingCart } from "../context/ShoppingCartContext"
import items from "../data/items.json"
import { CartItem } from "../components/CartItem"
import "./cart.scss"

export default function Cart() {
    const {cartItems} = useShoppingCart()

    

    return  <div className="shoppingCart">
        <div className="centered">
            {cartItems.map(item => {
                return CartItem(item)
            })}
        </div>
        </div>
    
}