import { connect } from "react-redux";
import ProductCard from "../../Cards/ProductCard"

const Boots = ({categorie}) => {
    return (
        <>
            <ProductCard data={categorie} />
        </>
    );
}
const mapStateToProps = (state) =>{
    return{
        categorie : state.categorie
    }
}
export default connect(mapStateToProps, null)(Boots);