import { useShoppingCart } from "../context/ShoppingCartContext"
import items from "../data/items.json"
import { CartItem } from "../components/CartItem"
import "./cart.scss"
import { formatCurrency } from "../utilities/formatCurrency"

export default function Cart() {
    const {cartItems} = useShoppingCart()
    
    function total ():number {
        return cartItems.reduce((price:number, item:any) => price + item.price, 0)
     }
    

    return  <>
                <div className="shoppingCart">
                    <div className="centered">
                        {cartItems.map(item => {
                            return CartItem(item)
                        })}
                    </div>
                    <div className="paymentTotal">{total()}</div>
                </div>

            </>
    
}