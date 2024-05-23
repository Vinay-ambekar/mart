import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {remove}  from '../Redux/redux';

const Cart=()=>{
    const cartData = useSelector((state) => state.cart.items);
    // console.log('cartData>>>',cartData)
    const dispatch = useDispatch();
    console.log('dispatch>>',dispatch)
    const handleItemRemove = (id) => {
        dispatch(remove(id));
    };
    return(
        <div>
        <div className="container-fluid cartpage">
            <div className="row mt-5">
            <div className="col-xs-12 col-md-12 col-lg-8 ">
                {
                    cartData.length>0?(
                  cartData.map((data=>(
                    <div key={data.id} className="card py-2 d-flex pb-3 mb-3 productcart">
                        <span className="text-end me-2">
                        <CloseIcon onClick={()=>handleItemRemove(data.id)} className="fs-2 fw-bold"/>
                        </span>
                    <div className="row d-flex p-3 align-items-end">
                    <div className="col-8">
                        <div className="row px-3 d-flex align-items-center">
                        <div className="col-xs-12 col-md-12 col-lg-4">
                        <img className="img-fluid " src={data.imgUrl} alt="image" />
                        </div>
                        <div className="col-xs-12 col-md-12 col-lg-6 ms-2">
                        <div className="mb-5 fs-4 fw-bold">{data.productName}</div>
                        <div className="quantitypirce">
                            <span>${data.price}*quantity</span>
                            <span>price * quantity</span>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-2 d-flex mb-5 ms-5">
                        <AddIcon className="fs-1 me-1 addbutton" />
                        <RemoveIcon className="fs-1 remove"/>
                    </div>
                    </div>
                    </div>
                    
                  )))
                    ):(
                        <div className="card p-2 mb-3 ">
                    <p className="text-center">Your cart is empty</p>
                    </div>
                )
                }
                
                
            </div>
            <div className="col-xs-12 col-md-12 col-lg-4">
            <div className="card mb-3">
                <span className="ms-3 mt-2 fs-4 fw-medium cartsummary">Cart summary</span>
                <hr className="mx-3"/>
                <span className="ms-3 mt-2 fs-6">Total Price:</span>
                <span className="ms-3 mt-2 mb-3 fs-2 fw-medium cartsummary">$0.00</span>
                </div> 
            </div>
            </div>
        </div>
        </div>
    )
}
export default Cart;