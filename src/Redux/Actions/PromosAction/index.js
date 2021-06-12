import { BASEURL } from "../../../Api/Utils/url";
import { LOAD_PROMOTION, LOAD_PROMOTION_BY_ID } from "../../Constants";
const loadPromoAction = (promo) => {
	return {
		type: LOAD_PROMOTION,
		promo,
	}
}

export const loadPromotion = () => {
	return (dispatch) => {
		return fetch(BASEURL + "promos")
			.then(res => res.json())
			.then(data => dispatch(loadPromoAction(data)))
	}
}


const loadPromotionByIdAction = (product) => {
	return {
		type: LOAD_PROMOTION_BY_ID,
		product,
	}
}

export const loadPromotionById = (id) => {
	return (dispatch) => {
		return fetch(BASEURL + "promo?product-id=" + id)
			.then(res => res.json())
			.then(data => dispatch(loadPromotionByIdAction(data)))
	}
}