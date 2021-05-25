import { REGSTER } from "../../../Api/Utils/Constants/user";

const initState = {
    user:{
        registered : false,
        user_id : 0,
    }
}

export const userRegisterReducer = (state = initState.user, action) => {
    switch (action.type) {
        case REGSTER:
            return action.user
        default:
            return state;
    }
}