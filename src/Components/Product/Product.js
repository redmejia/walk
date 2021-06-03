import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadProduct } from "../../Redux/Actions/ProductAction";
import { addItem } from "../../Redux/Actions/Cart";
const Product = ({ loadProduct, product, pro_id, addItem }) => {
    useEffect(() => {
        loadProduct(pro_id)
    }, [loadProduct, pro_id])
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const productSizeOpt = (lists) => {

        return (
            lists.map((s) => {
                return (
                    <button type="button" className="btn btn-outline-success" onClick={() => setSize(s)} key={s}>{s}</button>
                );
            })
        )
    }

    const productColorOpt = (lists) => {
        return (
            lists.map((c) => {
                return (
                    <button type="button" className="btn btn-outline-success" onClick={() => setColor(c)} key={c}>{c}</button>
                );
            })
        )
    }

    let order = { pro_name: product.pro_name, color, size: size, price: product.price }

    const addNewItem = () => {
        addItem(order)
    }
    return (
        <div className="container">
            {
                <div>
                    <h1>{product.pro_name}</h1>
                    <h1>{product.price}</h1>
                    {
                        <div class="btn-group-vertical" key={product.pro_name}>
                            <h5>Size</h5>
                            {
                                productSizeOpt(product.sizes)
                            }
                            <h5 className="my-2">Color</h5>
                            {
                                productColorOpt(product.colors)
                            }
                        </div>
                    }
                </div>
            }
            <button className="btn-primary my-3 " onClick={addNewItem}>add to cart</button>
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