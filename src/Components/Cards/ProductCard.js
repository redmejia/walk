import './Cards.css'
import logo from '../../assets/zapato.jpg'
import Scroll from '../Scroll/Scroll'
const ProductCard = ({ data }) => {
    return (
        <>
            <Scroll>
                <div className="product-container" onClick={() => { alert("mierda") }}>
                    {data.map(d => {
                        return (
                            <div className="card-container" key={d.pro_id}>
                                <img src={logo} alt="Avatar" style={{ width: '100%', height : 460}}></img>
                                <div className="card-body">
                                    <h2 style={{ color: 'blue' }}>{d.name}</h2>
                                    <p style={{ fontWeight: 'bold' }}>{d.color}</p>
                                    <p>$ {d.price}</p>
                                    {/* <p>stars</p>  */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Scroll>
        </>
    )
}
export default ProductCard;