import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { userLogout } from "../../Redux/Actions/UserRegisterAction";
import User from "../Modal/User";

const TopNav = ({ userLogout, user }) => {
    let history = useHistory()
    const logOUT = () => {
        history.push("/")
        userLogout()
    }
    return (
        <div className="container mt-3">
            <Link to="/">Logo</Link>
            {
                user.signin ?
                    <div style={{ float: 'right' }}>
                        <div class="btn-group">
                            <button type="button" className="drop-btn" style={{ float: 'right' }} data-bs-toggle="dropdown" >
                               @{user.user_name} 
                            </button>
                            <ul class="dropdown-menu">
                                <li><Link to="/my-order" style={{ textDecoration: 'none' }}> My orders </Link></li>
                                {/* <li><Link to="/my-order" style={{ textDecoration: 'none', color : 'red' }}> My orders </Link></li> */}
                                <hr></hr>
                                <li>
                                    <div class="d-grid gap-2 col-10 mx-auto">
                                        <button onClick={logOUT} class="btn btn-danger" type="button">log out</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>





                    // <div>
                    //     <button onClick={logOUT} className="drop-btn" style={{ float: 'right' }}>
                    //         log out
                    //     </button>
                    //     {user.user_id}
                    // </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(TopNav);