import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadPromotionById } from "../../Redux/Actions/PromosAction";
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

const Promo = ({ loadPromotionById, promo, addItem }) => {
    // let { id, name } = useParams() name no need yet
    let { id } = useParams()
    useEffect(() => {
        loadPromotionById(id)
    }, [loadPromotionById, id])
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
    let order = { product_id: promo.product_id, pro_name: promo.pro_name, color, size: size, price: promo.price, img: promo.image[0], qty: 1 }
    const addNewItem = () => {
        addItem(order)
    }

    return (
        <div className="container my-3">
            <div class="row">
                <div class="col-8">
                    <h1>{promo.pro_name}</h1>
                    {imagesCouresel(promo.image)}
                </div>
                <div class="col-4">
                    {
                        <div>
                            {
                                <div class="btn-group-vertical my-4" key={promo.pro_name} style={{ float: 'right' }}>
                                    <h1>${promo.price}</h1>
                                    <h5>Size</h5>
                                    {
                                        productSizeOpt(promo.sizes)
                                    }
                                    <h5 className="my-2">Color</h5>
                                    {
                                        productColorOpt(promo.colors)
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
        promo: state.promo
    }
}

const mapDispatchToProps = {
    loadPromotionById,
    addItem
}
export default connect(mapStateToProps, mapDispatchToProps)(Promo);