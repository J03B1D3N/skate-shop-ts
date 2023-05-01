import { Link } from "react-router-dom";
import items from "../../data/items.json"
import React from "react"


export default function All() {

    return (
            <>
            { items.map(item => {
                return <Link to={item.name} state={item} className="item">
                    <img src={"../." + item.src} alt="img"></img>
                    <p className="itemTitle">{item.name}</p>
                         </Link>
        })}
        </>
    )
}