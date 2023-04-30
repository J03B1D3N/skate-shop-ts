import { useLocation } from "react-router-dom"
import "./itemDetail.scss"
import { formatCurrency } from "../../utilities/formatCurrency"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { useEffect } from "react"


export default function ItemDetail() {
    const {increaseCartQuantity} = useShoppingCart()
    const location = useLocation()
    const item = location.state
    useEffect(() => {
        window.scroll(0,0)

    }, [])
   
    return <>
            <div className="itemDetailRoot">

                <div className="itemDetail">
              
                    <div className="pictureAndPrice">
                    <img src={item.src} alt="img" className="item"></img>
                        <div className="pricing">
                            <div className="title">{item.name}</div>
                            <div className="reviews">No reviews yet!</div>
                            <div className="price"> {formatCurrency(item.price)}</div>   
                            <div className="shipping">
                            <p>In stock – FREE shipping to France</p>
                            Delivery by Thursday, 04.05.2023, if you choose UPS Standard Priority and place your order by Tuesday 16:00.                        
                            </div>
                            <div className="buttons">
                                <button className="cart" onClick={() =>  increaseCartQuantity(item.id)}>ADD TO SHOPPING CART</button>
                                <button className="favorites">ADD TO FAVORITES</button>
                            </div>
                        </div>
                        
                    </div>

                    <div className="itemDescription">
                        <ul className="description">
                        <li>{item.desc1}</li>
                        <li>{item.desc2}</li>
                        <li>{item.desc3}</li>
                        <li>{item.desc4}</li>
                        {item.desc5? <li>{item.desc5} </li>: null}
                        {item.desc6? <li>{item.desc6} </li>: null}
                        {item.desc7? <li>{item.desc7} </li>: null}
                         </ul>
                    </div>
                </div>
            </div>
    </>
}