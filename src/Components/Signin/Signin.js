import "./Form.css"
const Signin = () => {
    return (
        <div >
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
    );
}
export default Signin;