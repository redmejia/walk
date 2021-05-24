import { Link } from "react-router-dom";
const ProductNav = () => {
    return (
        <div className="container mt-3">
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
                        class="btn dropdown-toggle drop-btn"
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
    );
}

export default ProductNav;