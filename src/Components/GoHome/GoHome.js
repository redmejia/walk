import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { userLogout } from "../../Redux/Actions/UserRegisterAction";
import User from "../Modal/User";
// CHANGE THE NAME
const GoHome = ({ userLogout, registerAndSignin, signin }) => {
    let history = useHistory()
    const logOUT = () => {
        history.push("/")
        userLogout()
    }
    return (
        <div className="container mt-3">
            {/* create link to signin and register */}
            <Link to="/">Logo</Link>
            {
                registerAndSignin.registered || signin.signin ?
                    <button onClick={logOUT} className="drop-btn" style={{ float: 'right' }}>
                        log out
                    </button> :
                    <User />
            }
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        registerAndSignin: state.register,
        signin: state.signin //this is atest
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: bindActionCreators(userLogout, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GoHome);