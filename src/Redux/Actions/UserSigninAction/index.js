import { BASEURL } from "../../../Api/Utils/url"
import { SIGNIN } from "../../Constants"

const userSigninAction = (user) => {
    return {
        type: SIGNIN,
        user
    }
}

export const UserSignin = (user) => {
    return (dispatch) => {
        return fetch(BASEURL + "signin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                console.log("SIGNIN ", data);
                dispatch(userSigninAction(data))
            })
    }
}