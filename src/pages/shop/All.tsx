import items from "../../data/items.json"

export default function All() {

    return (<>
     { items.map(item => {
            return <div  className="item">
                <img src={item.src} alt="img"></img>
            <p className="itemTitle">{item.name}</p>
        </div>
        })}
    </>
      
    )

}