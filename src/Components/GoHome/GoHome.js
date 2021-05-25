import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { userLogout } from "../../Redux/Actions/UserRegisterAction";
import User from "../Modal/User";
// CHANGE THE NAME
const GoHome = ({ userLogout, user }) => {
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
                user.signin ?
                    <div>
                        <button onClick={logOUT} className="drop-btn" style={{ float: 'right' }}>
                            log out
                        </button>
                        {user.user_id}
                    </div>
                    :
                    <User />
            }
        </div>
    );
}
const mapStateToProps = (state) => {
    let user = {
        signin: false,
        user_id: 0
    };
    if (state.register.signin) {
        user = { ...state.register };
    } else if (state.signin.signin) {
        user = { ...state.signin };
    }
    return {
        user: user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: bindActionCreators(userLogout, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GoHome);