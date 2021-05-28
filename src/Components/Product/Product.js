import { useEffect } from "react";
import { connect } from "react-redux";
import { loadProduct } from "../../Redux/Actions/ProductAction";

const Product = ({ loadProduct, product, pro_id }) => {
    useEffect(() => {
        loadProduct(pro_id)
    }, [loadProduct, pro_id])
    return (

        <div className="container">
            {product.map(p => {
                return (
                    <div key={p.product_id}>
                        <h1 >{p.pro_name}</h1>
                        <h2>{p.color}</h2>
                        <h2>{p.size}</h2>
                        <h2>{p.price}</h2>
                    </div>
                )
            })}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        product: state.product
    }
}
const mapDispatchToProps = {
    loadProduct
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);