import { CATEGORIE } from "../../../Api/Utils/Constants"
import { BASEURL } from "../../../Api/Utils/url"
import { LOAD_CAT } from "../../Constants"

const loadCategorieAction = (categorie) => {
    return{
        type : LOAD_CAT,
        categorie
    }
}
export const loadCategorie = (categorie) => {
    return (dispatch) => {
        return fetch(BASEURL+CATEGORIE+"?cat="+categorie)
        .then(res =>res.json())
        .then(data => dispatch(loadCategorieAction(data)))
    }
}