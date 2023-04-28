import items from "../../data/items.json"

export default function Trucks() {

    return <>
       { items.map(item => {
            return item.type === "trucks" ? <div  className="item">
            <img src={item.src} alt="img"></img>
             <p className="itemTitle">{item.name}</p>
             </div> : null
        })}
        </>
    
}