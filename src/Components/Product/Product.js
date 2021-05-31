import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadProduct } from "../../Redux/Actions/ProductAction";
import { addItem } from "../../Redux/Actions/Cart";

const Product = ({ loadProduct, product, pro_id, addItem }) => {
    useEffect(() => {
        loadProduct(pro_id)
    }, [loadProduct, pro_id])
    const addNewItem = () => {
        addItem(product[0])
    }
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
            <button className="btn-primary" onClick={addNewItem}>add to cart</button>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        product: state.product
    }
}
const mapDispatchToProps = {
    loadProduct,
    addItem,
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);