import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NewUserRegister } from "../../Redux/Actions/UserRegisterAction";
import { UserSignin } from "../../Redux/Actions/UserSigninAction";
import './Form.css';
const User = ({ NewUserRegister, UserSignin }) => {
    // for register
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPassword] = useState("");

    const newUser = () => {
        const user = {
            name: name,
            email: email,
            pwd: pwd
        }
        NewUserRegister(user);
    }

    const newSignin = () => {
        const user = {
            email : email,
            pwd : pwd
        }
        console.log(user);
        UserSignin(user);
    }
    return (
        <>
            <button type="button" className="btn drop-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ float: 'right' }}>
                signin / register
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <form >
                                            {/* signin */}
                                            <input
                                                className="form"
                                                type="text"
                                                placeholder="email"
                                                onChange={e => setEmail(e.target.value)}

                                            />
                                            <input
                                                className="form"
                                                type="password"
                                                placeholder="password"
                                                autoComplete="no"
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                        </form>
                                    </div>
                                    {/* register */}
                                    <div className="col-6">
                                        <form >
                                            <input
                                                className="form"
                                                type="text"
                                                placeholder="name"
                                                onChange={e => setName(e.target.value)}
                                            />
                                            <input
                                                className="form"
                                                type="text"
                                                placeholder="email"
                                                onChange={e => setEmail(e.target.value)}

                                            />

                                            <input
                                                className="form"
                                                type="password"
                                                placeholder="password"
                                                autoComplete="no"
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                        </form>
                                    </div>
                                    <div className="col-6">
                                        <button
                                            type="button"
                                            onClick={newSignin}
                                            className="btn btn-success"
                                            data-bs-dismiss="modal"
                                        >
                                            walk
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button
                                            type="button"
                                            onClick={newUser}
                                            className="btn btn-success"
                                            data-bs-dismiss="modal"
                                        >
                                            create and signin
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        NewUserRegister: bindActionCreators(NewUserRegister, dispatch),
        UserSignin : bindActionCreators(UserSignin, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(User);