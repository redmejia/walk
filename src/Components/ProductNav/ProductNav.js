import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
const ProductNav = ({ item }) => {
    return (
        <div className="container mt-3">
            <div className="btn-group" role="group" aria-label="Basic example">
                <div className="dropdown">
                    <button
                        className="btn  dropdown-toggle drop-btn"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Womens
                        </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link to="/womens/boots">boots</Link></li>
                        <li><Link to="/heels">heels</Link></li>
                    </ul>
                </div>

                <div className="dropdown">
                    <button
                        className="btn dropdown-toggle drop-btn"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Mens
                        </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link to="/mens/boots">boots</Link></li>
                        <li><Link to="/sport">sport</Link></li>
                    </ul>
                </div>
            </div>
            {
                item.items.length === 0 ? "" :
                    <div style={{float : 'right'}}>
                        <Cart />
                    </div>
                // <button className="btn-primary" style={{ float: 'right' }}>my cart</button>
            }
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        item: state.cart
    }
}
export default connect(mapStateToProps, null)(ProductNav);