import { Route, Routes } from "react-router-dom"


import Home from "../pages/home.tsx"
import Contacts from "../pages/contacts.tsx"
import Cart from "../pages/cart.tsx"
import Shop from "../pages/shop/shop.tsx"
import ShopNav from "../pages/shop/shopNav.tsx"
import Items from "../pages/shop/items.tsx"
import All from "../pages/shop/All.tsx"
import Bearings from "../pages/shop/bearings.jsx"
import Trucks from "../pages/shop/trucks.jsx"
import Wheels from "../pages/shop/wheels.jsx"   
import Decks from "../pages/shop/decks.jsx"



export default function Main() {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}>
                    <Route element={<ShopNav/>}>
                        <Route element={<Items/>}>
                        <Route path="/shop/items/all" element={<All/>}/>
                        <Route path="/shop/items/all" element={<All/>}/>
                        <Route path="/shop/items/bearings" element={<Bearings/>}/>
                        <Route path="/shop/items/trucks" element={<Trucks/>}/>
                        <Route path="/shop/items/wheels" element={<Wheels/>}/>
                        <Route path="/shop/items/decks" element={<Decks/>}/>
                        </Route>
                        {/* <Route path="/shop/nav/:name" element={<ItemDetail/>}/> */}
                        </Route>    
                    </Route>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/cart" element={<Cart/>}/>
                
            </Routes>
        </div>
    )
}