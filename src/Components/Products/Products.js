import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MensBoots from "../Categories/Mens/MensBoots";
import Sport from "../Categories/Mens/Sport";
import Heels from "../Categories/Womens/Heels";
import WomensBoots from "../Categories/Womens/WomensBoots";
import './Products.css';
const Products = () => {
    return (
        <>
            <Router>
                <div className="container">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <div class="dropdown">
                            <button
                                class="btn  dropdown-toggle drop-btn"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Womens
                        </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link to="/womens/boots">boots</Link></li>
                                <li><Link to="/heels">heels</Link></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button
                                class="btn  drop-btn"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Mens
                        </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link to="/mens/boots">boots</Link></li>
                                <li><Link to="/sport">sport</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
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