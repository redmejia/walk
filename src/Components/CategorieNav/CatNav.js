import { NavLink } from 'react-router-dom';
import './CatNav.css';
const CatNav = () => {
    return (
        <>
            <div className="cat-nav">
                <div className="cats">
                    <h1>mens</h1>
                    <li className="select-cat">
                        <NavLink to="/mens-boots" >boots</NavLink>
                    </li>
                    <li className="select-cat">
                        <NavLink to="/mens-sport" >sport</NavLink>
                    </li>
                    <h1>womens</h1>
                    <li className="select-cat">
                        <NavLink to="/womens-boots" >boots</NavLink>
                    </li>
                    <li className="select-cat">
                        <NavLink to="/heels">heels</NavLink>
                    </li>
                </div>
            </div>
        </>
    );
}
export default CatNav;