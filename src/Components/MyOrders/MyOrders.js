import { useEffect } from "react";
import { connect } from "react-redux";
import { retrivePurchase } from "../../Redux/Actions/Cart";

const orderL = (orderList) => {
	if (orderList.client === null) {
		return (<p>No order yet</p>)
	} else {

		return (
			<div>
				{
					orderList.orders.map((i, ii) => {
						return (
							<div >
								<p>
		 							{"Name : " + " " + orderList.client[ii].first_name + " Email  " + orderList.client[ii].email + " | "}
		 							{"Deliver Addres " + " " + orderList.client[ii].address}
		 						</p>
								<img src={i.img} alt="producto" style={{ width: 200, height: 100 }}></img>
								<ul style={{ listStyle: 'none' }}>
									<li>{i.pro_name}</li>
									<li>{i.color}</li>
								</ul>
								{orderList.totals[ii].total}
								{
		 							i.status_code !== 2 ?
		 								<div>
		 									<p>
		 										<button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
		 											Somethig went wrong
		 										</button>
		 									</p>
		 									<div class="collapse" id="collapseExample">
		 										<div class="card card-body">
		 											Could not compleate transaction of {orderList.totals[0].total}
		 										</div>
		 									</div>

		 								</div>
		 								:
		 								<div class="col-4" >
		 									<button className="btn btn-danger" onClick={() => alert(i.pur_id)} >cancel my order</button>
		 								</div>
		 						}
								<hr></hr>
							</div>
						)
					})
				}
			</div>
		)
	}
}
const MyOrders = ({ user, order, retrivePurchase }) => {
	const { user_id } = user
	useEffect(() => {
		retrivePurchase(user_id)
	}, [user_id, retrivePurchase])
	return (
		<div className="container">
			{
				orderL(order)
			}

		</div>
	)
}
const mapStateToProps = (state) => {
	let user = {
		signin: false,
		user_id: 0
	};
	if (state.register.signin) {
		user = { ...state.register };
	} else if (state.signin.signin) {
		user = { ...state.signin };
	}

	return {
		order: state.purchase,
		user: user,
	}
}
const mapDispatchToProps = {
	retrivePurchase
}
export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);