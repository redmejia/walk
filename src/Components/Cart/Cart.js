import { connect } from "react-redux"

const Cart = ({item}) => {
    return (
        <div>
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              My Cart 
            </button>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h1>here</h1>
                            <div>
                                {
                                    item.map(i => {
                                        return(
                                            <div>
                                                <h6>{i[0].pro_name}</h6>
                                                <h6>{i[0].color}</h6>
                                                <h6>{i[0].size}</h6>
                                                <h6>{i[0].price}</h6>
                                                <hr></hr>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">cancel order</button>
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Checkout </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        item: state.cart
    }
}

// const mapStateToProps = (state) => {
//     return {
//         item: state.cart
//     }
// }
export default connect(mapStateToProps, null)(Cart);