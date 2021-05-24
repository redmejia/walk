import { Link } from "react-router-dom";
import User from "../Modal/User";
const GoHome = () =>{
    return(
        <div className="container mt-3">
            {/* create link to signin and register */}
            <Link to="/">Logo</Link>
            <User />
        </div>
    );
}
export default GoHome;