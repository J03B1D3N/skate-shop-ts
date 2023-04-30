import {Link} from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Header() {
    const {cartQuantity} = useShoppingCart()
    return (
        <div className="header">

            <div className="title">
                BOARDS OF BIDEN
            </div>

            <div className="menus">
            
                    <Link to={"/"}>HOME</Link>
    
                    <Link to={"/shop/items/all"}>SHOP</Link>
               
                    <Link to={"/contacts"}>CONTACTS</Link>

                    <div className="cart">
                    {cartQuantity() === 0 ? null : <div className="itemCount">{cartQuantity()}</div>}
                    <Link to={"/cart"}>CART</Link>                
                    </div>
                
            </div>

        </div>
    )
}