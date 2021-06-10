import { BASEURL } from "../../../Api/Utils/url";
import { LOAD_PROMOTION } from "../../Constants";
const loadPromoAction = (promo) => {
	return{
		type: LOAD_PROMOTION,
		promo,
	}
}

export const loadPromotion = () =>{
	return(dispatch)=>{
		return fetch(BASEURL+"promo")
		.then(res => res.json())
		.then(data => dispatch(loadPromoAction(data)))
	}
}
