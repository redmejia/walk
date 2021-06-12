import { useEffect } from "react";
import { connect } from "react-redux";
import { loadPromotion } from "../../Redux/Actions/PromosAction";
import PromoCard from "../Cards/PromoCard";

const Promos = ({loadPromotion, promo}) => {
	useEffect(()=>{
		loadPromotion()
	},[loadPromotion])
	return (
		<PromoCard data={promo} />
	);
}

const mapStateToProps = (state) => {
	return {
		promo: state.promos
	}
}
const mapDispatchToProps = {
	loadPromotion
}
export default connect(mapStateToProps, mapDispatchToProps)(Promos);