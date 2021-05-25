import { BASEURL } from "../../../Api/Utils/url"
import { REGSTER, LOG_OUT } from "../../Constants"

const userRegisterAction = (user) => {
    return {
        type: REGSTER,
        user
    }
}

const logOutAction = () => {
    return{
        type : LOG_OUT
    }
}

export const NewUserRegister = (user) => {
    return (dispatch) => {
        return fetch(BASEURL+"register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => { 
                dispatch(userRegisterAction(data)) 
            })
    }
}

export const userLogout = () => {
    return (dispatch) => {
        dispatch(logOutAction());
    }
}