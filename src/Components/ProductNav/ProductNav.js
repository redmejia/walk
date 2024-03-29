import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
const ProductNav = () => {
    const textDecoStyle = {
        textDecoration: 'none'
    }
    return (
        <div className="container mt-4">
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
                        <li><Link to="/womens/boots" style={textDecoStyle}>boots</Link></li>
                        <li><Link to="/heels" style={textDecoStyle}>heels</Link></li>
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
                        <li><Link to="/mens/boots" style={textDecoStyle}>boots</Link></li>
                        <li><Link to="/sport" style={textDecoStyle}>sport</Link></li>
                    </ul>
                </div>
            </div>
            <div style={{ float: 'right' }}>
                <Cart />
            </div>
        </div>
    );
}
export default ProductNav;