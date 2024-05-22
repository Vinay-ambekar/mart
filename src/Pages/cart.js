const Cart=()=>{
    return(
        <>
        <div className="container-fluid cartpage">
            <div className="row">
            <div className="col-xs-12 col-md-12 col-lg-8">
                <div className="card  mt-5 mb-3 ">
                <p className="text-center">Your cart is empty</p>
                </div> 
            </div>
            <div className="col-xs-12 col-md-12 col-lg-4">
            <div className="card  mt-5 mb-3">
                <span className="ms-3 mt-2 fs-4 fw-medium cartsummary">Cart summary</span>
                <hr className="mx-3"/>
                <span className="ms-3 mt-2 fs-6">Total Price:</span>
                <span className="ms-3 mt-2 mb-3 fs-2 fw-medium cartsummary">$0.00</span>
                </div> 
            </div>
            </div>
        </div>
        </>
    )
}
export default Cart;