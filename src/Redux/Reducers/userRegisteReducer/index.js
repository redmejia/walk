import { LOG_OUT, REGSTER } from "../../Constants";

const initState = {
    user: {
        signin: false,
        user_id: 0
    }
}

export const userRegisterReducer = (state = initState.user, action) => {
    switch (action.type) {
        case REGSTER:
            return action.user
        case LOG_OUT:
            return {
                registered: false,
                user_id: 0
            }
        default:
            return state;
    }
}