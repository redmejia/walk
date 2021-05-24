import { REGSTER } from "../../../Api/Utils/Constants/user"
import { BASEURL } from "../../../Api/Utils/url"

const userRegisterAction = (user) => {
    return {
        type: REGSTER,
        user
    }
}

export const NewUserRegister = (user) => {
    return (dispatch) => {
        return fetch("http://localhost:8080/v1/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => { 
                console.log("herr ", data);
                dispatch(userRegisterAction(data)) 
            })
    }
}