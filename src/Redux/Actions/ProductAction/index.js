import { BASEURL } from "../../../Api/Utils/url"
import { LOAD_PRODUCT_BY_ID } from "../../Constants"

const loadProductAction = (product) => {
    return {
        type: LOAD_PRODUCT_BY_ID,
        product
    }
}

export const loadProduct = (id) => {
    return (dispatch) => {
        return fetch(BASEURL + "product?product-id=" + id)
            .then(res => res.json())
            .then(data => dispatch(loadProductAction(data)))
    }
}