const Register = () => {
    return (

        <div className="form-container">
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

    );
}
export default Register;