import { Link } from "react-router-dom"
export default function Home() {
    return <div className="homePage">
        <div className="title">WELCOME</div>
        <div className="invitation">WE HOPE YOU'LL FIND EVERYTHING YOU NEED TO BUILD YOUR DREAM BOARD</div>
        <Link to={"/shop/items/all"}><button className="startShopping">START SHOPPING</button></Link>
    </div>
}