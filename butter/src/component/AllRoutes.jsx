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
import Payment from "../Pages/payment";
import PrivateRoute from "../Authentication/privateRoute";
import NewSinglePage from "../Pages/popularSinglePage";
function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/baby" element={<Baby />} />
            <Route path="/baby/:id" element={
                <PrivateRoute>
                    <BabySinglePage /> 
                </PrivateRoute>
            }/>
            <Route path="/kids" element={<Kids />} />
            <Route path="/kids/:id" element={
                <PrivateRoute>
                    <KidsSinglePage />
                </PrivateRoute>
            } />
            <Route path="/newpopular" element={<NewPopular />}/>
            <Route path="/newpopular/:id" element={
                <PrivateRoute>
                    <NewSinglePage />
                </PrivateRoute>
            } />
            <Route path="/todler" element={<Todler />} />
            <Route path="/todler/:id" element={
                <PrivateRoute>
                    <TodlerSinglePage />
                </PrivateRoute>
            } />
            <Route path="/hilaryduff" element={<HilaryDuffCarter />} />
            <Route path="/cart" element={
                <PrivateRoute>
                    <Cart />
                </PrivateRoute>
            } />
            <Route path="/signin" element={<Signin />} />
            <Route path="/payment" element={
                <PrivateRoute>
                    <Payment />
                </PrivateRoute>
            } />
            
        </Routes>
    )
}

export default AllRoutes 