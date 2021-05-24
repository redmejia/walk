import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MensBoots from "../Categories/Mens/MensBoots";
import Sport from "../Categories/Mens/Sport";
import Heels from "../Categories/Womens/Heels";
import WomensBoots from "../Categories/Womens/WomensBoots";
import ProductNav from "../ProductNav/ProductNav";
import './Products.css';
const Products = () => {
    return (
        <>
            <Router>
                <ProductNav />
                <Switch>
                    <Route  path="/womens/boots">
                        <WomensBoots />
                    </Route>
                    <Route  path="/heels">
                        <Heels />
                    </Route>
                    <Route  path="/mens/boots">
                        <MensBoots />
                    </Route>
                    <Route path="/sport">
                        <Sport />
                    </Route>
                </Switch>
            </Router>

        </>
    );
}

export default Products;