import Register from "../Register/Register"
import Signin from "../Signin/Signin"

const User = () => {
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
                                            // onChange={onHandle_Email}
                                            />

                                            <input
                                                className="form"
                                                type="password"
                                                placeholder="password"
                                                autoComplete="no"
                                            // onChange={onHandle_Pwd}
                                            // onKeyDown={userSignin}
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
                                            // onChange={onHandle_Email}
                                            />
                                            <input
                                                className="form"
                                                type="text"
                                                placeholder="email"
                                            // onChange={onHandle_Email}
                                            />

                                            <input
                                                className="form"
                                                type="password"
                                                placeholder="password"
                                                autoComplete="no"
                                            // onChange={onHandle_Pwd}
                                            // onKeyDown={userSignin}
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default User;