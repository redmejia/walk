import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MensBoots from "../Categories/Mens/MensBoots";
import Sport from "../Categories/Mens/Sport";
import Heels from "../Categories/Womens/Heels";
import WomensBoots from "../Categories/Womens/WomensBoots";
import './Products.css';
const Products = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/womens/boots">
                        <WomensBoots />
                    </Route>
                    <Route exact path="/heels">
                        <Heels />
                    </Route>
                    <Route exact path="/mens/boots">
                        <MensBoots />
                    </Route>
                    <Route exact path="/sport">
                        <Sport />
                    </Route>
                </Switch>
            </Router>

        </>
    );
}

export default Products;