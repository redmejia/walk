import './Cards.css'
import logo from '../../assets/zapato.jpg'
import Scroll from '../Scroll/Scroll'
import { useState } from 'react'
import Product from '../Product/Product';
const ProductCard = ({ data }) => {
    const [product, setIsSelect] = useState({ isSelect: false, pro_id: 0 });
    return (
        <>
            <div className="container">
                {/* <Scroll>  not yet */}
                {
                    product.isSelect ? <Product pro_id={product.pro_id} /> :

                        <div className="row row-cols-4 mt-5">
                            {data.map((d) => {
                                return (
                                    <div className="col-3" key={d.product_id} onClick={() => setIsSelect({ isSelect: true, pro_id: d.product_id })}>
                                        <a>
                                            <img src={logo} alt="Avatar" style={{ width: '100%', height: 460 }}></img>
                                        </a>
                                        <div >
                                            <h2 style={{ color: 'blue' }}>{d.pro_name}</h2>
                                            <p style={{ fontWeight: 'bold' }}>{d.color}</p>
                                            <p>$ {d.price}</p>
                                            <p>{d.size}</p>
                                            <p>{d.product_id}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                }
                {/* </Scroll> */}
            </div>
        </>
    )
}
export default ProductCard;