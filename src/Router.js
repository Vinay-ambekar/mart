import { Routes,Route } from "react-router-dom"
import { HOME, SHOP,CART } from "./DataPath/RouterLinks"

import Home from "./Pages/Home"
import Cart from "./Pages/cart"
import Shop from "./Pages/Shop"
const RouterNav=()=>{
    
    return(
        <>
        <Routes>
            <Route path={HOME} element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path={CART} element={<Cart/>}/>
            <Route path={SHOP} element={<Shop/>}/>
        </Routes>
        </>
    )
}
export default RouterNav