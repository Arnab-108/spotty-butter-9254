import { Route , Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Baby from "../Pages/Baby";
import Kids from "../Pages/Kids";
import NewPopular from "../Pages/New&Popular"
import Todler from "../Pages/Todler";
import HilaryDuffCarter from "../Pages/Hilary Duff x Carter's";
import Cart from "../Pages/Cart";
import Signin from "../Pages/signin";
import BabySinglePage from "../Pages/babysinglepage";
import TodlerSinglePage from "../Pages/todlersinglepage";
import KidsSinglePage from "../Pages/kidssinglepage";
function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/baby" element={<Baby />} />
            <Route path="/baby/:id" element={<BabySinglePage />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/kids/:id" element={<KidsSinglePage />} />
            <Route path="/newpopular" element={<NewPopular />}/>
            <Route path="/todler" element={<Todler />} />
            <Route path="/todler/:id" element={<TodlerSinglePage />} />
            <Route path="/hilaryduff" element={<HilaryDuffCarter />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<Signin />} />
        </Routes>
    )
}

export default AllRoutes 