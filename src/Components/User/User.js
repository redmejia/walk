import Register from "../Register/Register"
import Signin from "../Signin/Signin"
import "./Forma.css"
const User = () => {
    return (
        <>
            <div className="forma">

                <Signin />
                <Register />
            </div>
        </>

    );
}
export default User;