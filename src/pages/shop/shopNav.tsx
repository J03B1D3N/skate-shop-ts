import {Link, Outlet} from "react-router-dom";




export default function ShopNav() {

    return <>
        <div className="shopNav">

        <Link to={"/shop/items/all"}>ALL ITEMS</Link>

        <Link to={"/shop/items/bearings"}>BEARINGS</Link>

        <Link to={"/shop/items/trucks"}>TRUCKS</Link>

        <Link to={"/shop/items/wheels"}>WHEELS</Link>    

        <Link to={"/shop/items/decks"}>DECKS</Link> 

        </div>

        <Outlet/>

    </>
    
    
}
