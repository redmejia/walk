import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadProduct } from "../../Redux/Actions/ProductAction";
import { addItem } from "../../Redux/Actions/Cart";
const imagesCouresel = (imagesList) => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={imagesList[0]} class="d-block w-100" alt="product_one" style={{ width: '100%', height: 660 }} />
                </div>
                <div class="carousel-item">
                    <img src={imagesList[1]} class="d-block w-100" alt="product_two" style={{ width: '100%', height: 660 }} />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

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
        <div className="container my-3">
            <div class="row">
                <div class="col-8">
                    <h1>{product.pro_name}</h1>
                    {imagesCouresel(product.image)}
                </div>
                <div class="col-4">
                    {
                        <div>
                            {
                                <div class="btn-group-vertical my-4" key={product.pro_name} style={{ float: 'right' }}>
                                    <h1>${product.price}</h1>
                                    <h5>Size</h5>
                                    {
                                        productSizeOpt(product.sizes)
                                    }
                                    <h5 className="my-2">Color</h5>
                                    {
                                        productColorOpt(product.colors)
                                    }
                                    <button className="btn-primary m-3 " onClick={addNewItem}>add to cart</button>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
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