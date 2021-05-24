import { LOAD_CAT } from "../../Constants"
const initialState = {
    categorie : []
}
export const categorie =(state=initialState.categorie, action) =>{
    switch (action.type) {
        case LOAD_CAT:
            return action.categorie        
        default:
            return state
    }
}
