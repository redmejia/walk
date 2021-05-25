import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { userLogout } from "../../Redux/Actions/UserRegister/UserRegister";
import User from "../Modal/User";
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
                user.registered ?
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
        user: state.register
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: bindActionCreators(userLogout, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GoHome);