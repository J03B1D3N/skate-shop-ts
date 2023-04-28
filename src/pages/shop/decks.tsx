import items from "../../data/items.json"
import { Link } from "react-router-dom"

export default function Decks() {

    return (
        <>
        { items.map(item => {
            return item.type === "deck" ? <Link to={item.name} state={item} className="item">
                <img src={item.src} alt="img"></img>
                <p className="itemTitle">{item.name}</p>
                     </Link> : null
    })}
    </>
)
        

}
