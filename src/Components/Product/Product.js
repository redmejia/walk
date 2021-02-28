import { Route, Switch } from 'react-router-dom'
import MensBoots from '../Categories/Mens/MensBoots'
import Sport from '../Categories/Mens/Sport'
import Heels from '../Categories/Womens/Heels'
import WomensBoots from '../Categories/Womens/WomensBoots'
import NewProduct from '../NewProduct/NewProduct'
import './Product.css'
const Product = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <NewProduct />
                </Route>
                <Route exact path="/mens-boots">
                    <MensBoots/>
                </Route>
                <Route exact path="/mens-sport" >
                    <Sport />
                </Route>
                <Route exact path="/womens-boots">
                    <WomensBoots />
                </Route>
                <Route exact path="/heels" >
                    <Heels />
                </Route>
            </Switch>
        </>
    );
}
export default Product;