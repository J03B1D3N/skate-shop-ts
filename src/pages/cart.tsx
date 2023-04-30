import { useShoppingCart } from "../context/ShoppingCartContext"
import items from "../data/items.json"
import { CartItem } from "../components/CartItem"
import "./cart.scss"
import { formatCurrency } from "../utilities/formatCurrency"
import { TotalPrice } from "../components/totalPrice"

export default function Cart() {
    const {cartItems} = useShoppingCart()
    

    

    return  <>
                {cartItems.length > 0 ? <div className="shoppingCart">
                
                <div className="centered">
                    {cartItems.map(item => {
                        return CartItem(item)
                    })}
                </div>
                <div className="paymentTotal">
                    <div className="title">TOTAL</div>
                    <div className="price">{TotalPrice()}</div>
                    <button>CHECKOUT</button>
                </div>
            </div> : <>
            <div className="emptyShoppingCart">YOUR SHOPPING CART IS EMPTY!
            <div className="threat">JOE BIDEN COMMANDS YOU TO GO PUT SOMETING IN THE CART</div></div>
            </>}
            
                

            </>
    
}