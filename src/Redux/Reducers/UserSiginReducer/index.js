import { LOG_OUT, SIGNIN } from "../../Constants";

const initState = {
    user: {
        signin: false,
        user_name : '',
        user_id: 0
    }
}

export const userSigninReducer = (state = initState.user, action) => {
    switch (action.type) {
        case SIGNIN:
            return action.user;
        case LOG_OUT:
            return {
                signin: false,
                user_id: 0
            }
        default:
            return state;
    }
}