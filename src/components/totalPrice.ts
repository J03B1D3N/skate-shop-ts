import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"




export function TotalPrice(){

    const {cartItems} = useShoppingCart()

    let array = []

    for(let i = 0; i < cartItems.length; i++) {

        let item = storeItems.find(item => item.id === cartItems[i].id)
        item.quantity = cartItems[i].quantity
        array.push(item)
    }

    let total = array.reduce((price, item) => item.price * item.quantity + price, 0)

    total = (Math.round(total * 100)/100).toFixed(2)


    return formatCurrency(+total);

}