import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NewUserRegister } from "../../Redux/Actions/UserRegister/UserRegister";
// import Register from "../Register/Register"
// import Signin from "../Signin/Signin"
import './Form.css';
const User = ({ NewUserRegister, register }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPassword] = useState("");

    const onSent = () => {
        const user = {
            name: name,
            email: email,
            pwd: pwd
        }
        NewUserRegister(user);
    }
    console.log(register);
    return (
        <>
            <button type="button" class="btn drop-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ float: 'right' }}>
                signin / register
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col-6">
                                        Signin
                                        <form >
                                            <input
                                                className="form"
                                                type="text"
                                                placeholder="email"
                                        
                                            />

                                            <input
                                                className="form"
                                                type="password"
                                                placeholder="password"
                                                autoComplete="no"
                                          
                                            />
                                        </form>
                                    </div>
                                    <div class="col-6">
                                        Register
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
                                </div>
                            </div>
                        </div>
                        <button type="button" onClick={onSent} class="btn btn-success" data-bs-dismiss="modal">walk</button>
                        {/* <button onClick={onSent} type="button" class="btn btn-primary">Save changes</button> */}
                        {/* <div class="modal-footer">
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        NewUserRegister: bindActionCreators(NewUserRegister, dispatch)
    }
}
const mapStateToProps = (state) => {
    return {
        register: state.register
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);