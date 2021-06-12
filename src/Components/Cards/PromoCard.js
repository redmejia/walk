import { Link } from 'react-router-dom';
import './Cards.css'
const PromoCard = ({data}) => {
	return (
		<>
			<div className="container">
				{/* <Scroll>  not yet */}
				<div className="row row-cols-4 mt-5">
					{
						data.map((d) => {
							return (
								<div className="col-3" key={d.product_id}>
									<Link to={`/promotion/pro-name/${d.pro_name}/pro-id/${d.product_id}`}>
										<img src={d.product_img} alt="Avatar" style={{ width: '100%', height: 460 }}></img>
									</Link>
									<div >
										<h2 style={{ color: 'blue' }}>{d.pro_name}</h2>
										<p style={{ fontWeight: 'bold' }}>{d.color}</p>
										<p>$ {d.price}</p>
									</div>
								</div>
							);
						})
					}
				</div>

				{/* </Scroll> */}
			</div>

		</>
	);
}

export default PromoCard;