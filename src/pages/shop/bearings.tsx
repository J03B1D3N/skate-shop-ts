import items from "../../data/items.json"
import { Link } from "react-router-dom"
import { formatCurrency } from "../../utilities/formatCurrency"


export default function Bearings() {

    return (
            <>
            { items.map(item => {
                return item.type === "bearings" ? <Link to={item.name} state={item} className="item">
                    <img src={"../." + item.src} alt="img"></img>
                    <p className="price">{formatCurrency(item.price)}</p>
                    <p className="itemTitle">{item.name}</p>
                         </Link> : null
        })}
        </>
    )
}