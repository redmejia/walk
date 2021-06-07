import { LOAD_PRODUCT } from "../../Constants";

const initState = {
    product: {
        product_id: 0,
        pro_name: "",
        color: "",
        price: 0,
        sizes : [],
        colors : [],
        image : []
    }
}
// const initState = {
//     product: []
// }
export const productReducer = (state = initState.product, action) => {
    switch (action.type) {
        case LOAD_PRODUCT:
            return action.product;        
        default:
            return state
    }
}