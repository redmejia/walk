import { LOAD_CAT_PRODUCTS } from "../../Constants"
const initialState = {
    categorie : []
}
export const categorie =(state=initialState.categorie, action) =>{
    switch (action.type) {
        case LOAD_CAT_PRODUCTS:
            return action.categorie        
        default:
            return state
    }
}
