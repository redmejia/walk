import './Cards.css'
import logo from '../../assets/zapato.jpg'
import Scroll from '../Scroll/Scroll'
const ProductCard = ({ data }) => {
    return (
        <>
            <div className="container">
                {/* <Scroll>  not yet */}
                <div className="row row-cols-4 mt-5">
                    {data.map(d => {
                        return (
                            <div className="col" key={d.pro_id}>
                                <img src={logo} alt="Avatar" style={{ width: '100%', height: 460 }}></img>
                                <div>
                                    <h2 style={{ color: 'blue' }}>{d.name}</h2>
                                    <p style={{ fontWeight: 'bold' }}>{d.color}</p>
                                    <p>$ {d.price}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* </Scroll> */}
            </div>
        </>
    )
}
export default ProductCard;