import { useParams } from "react-router-dom";
import { products } from "../DataPath/products";
import Headerimage from "../components/Headerimage";
import { Rating } from "@mui/material";

import { useEffect, useState } from "react";
import SingleCard from "../components/SingleCard";

const SingleProduct =()=>{
    const [category,setcategory]=useState('')
    const [reviewtoggle,setreviewtoggle]=useState(false)
    const { id } = useParams();
    const item = products.find(item => item.id == parseInt(id));
    useEffect(() => {
        setcategory(item.category);
        window.scrollTo(0, 0);
      }, [item.id]);
    const toggleview=()=>{
        setreviewtoggle(!reviewtoggle)
    }
    return(
        <>
        <Headerimage productname={item.productName}/>
        {/* singlie product */}
        <div className="container-fluid d-flex justify-content-center align-items-center singelpordut">
            <div className="row productimageDetails">
            <div className="col-xs-12 col-md-12 col-lg-5 ">
                <img className="img-fluid " src={item.imgUrl} alt='image'/>
            </div>
            <div className="col-xs-12 col-md-12 col-lg-7 ">
                <div className="row">
                    <div className="col-12 mb-4 ">
                        <p className="fs-2 fw-medium ">{item.productName}</p>
                    </div>
                    <div className="col-12 mb-4 d-flex ">
                        <Rating className="me-5" name="read-only" value={+item.reviews[0].rating} readOnly />
                        <p >{+item.reviews[0].rating} ratings</p>
                    </div>
                    <div className="col-12 mb-4 d-flex align-items-center ">
                        <p className="me-5 fs-3 fw-medium text-dark" > ${item.price} </p>
                        <p>category {item.category} </p>
                    </div>
                    <div className="col-12 mb-4 mb-4 d-flex align-items-center ">
                        <p> {item.shortDesc} </p>
                    </div>
                    <div className="col-12 mb-5 d-flex align-items-center ">
                        <input className="form-control w-25" type="number" />
                    </div>
                    <div className="col-12 mb-5 d-flex align-items-center ">
                        <button className="addbtocart">Add To Cart</button>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
        {/* toggle revies */}
        <div className="row mx-5 my-5 singelpordut">
            <div className={`col-12 d-flex`}>
            <p onClick={toggleview} className={`me-5 fw-medium ${reviewtoggle ? 'togglegray' : 'toggle'}`}>Description</p>
            <p onClick={toggleview} className={`fw-medium ${reviewtoggle ? 'toggle' : 'togglegray'}`}>reviews (1)</p>

            </div>
            <div className="col-12 d-flex">
                <p className={` ${reviewtoggle ? 'd-none' : 'd-flex'}`}>{item.reviews[0].text}</p>
                <p className={` ${reviewtoggle ? 'd-flex' : 'd-none'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>

            </div>

        </div>
        {/* related product */}
          <p className=" text-dark ms-5 my-5 fs-1 fw-medium">You might also like</p>
        <div className="container-fluid pb-5 d-flex justify-content-center home">
          <div className={`row w-75 `}>
            {products.length > 0 ? (
              products.filter(product=>product.category.includes(category)).map((product) => (
                <div
                  className=" col-sm-12 col-md-6 col-lg-6 col-xl-4 "
                  key={product.id}
                >
                 <SingleCard product={product}/>
                  {/* <div>
                    <Card
                      sx={{
                        maxWidth: "30rem",
                        maxHeight: "50rem",
                        margin: "1rem auto",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                     <Link className="z-3" to={`/${product.id}`}> 
                      <CardMedia
                        component="img"
                        sx={{
                          height: 200,
                          objectFit: "contain",
                          margin: "0.5rem",
                        }}
                        src={product.imgUrl}
                        alt="A Random picture found with the keyword Tokyo"
                      />
                      </Link>
                      <CardContent>
                        <p className="fs-4 fw-medium">{product.productName}</p>
                        <div>
                          <Rating name="read-only" value={+product.reviews[0].rating} readOnly />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="fs-3 fw-bold mt-2">
                            {product.price}$
                          </p>
                          <span className="p-2 addproduct">
                            <AddIcon/>
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div> */}
                </div>
              ))
            ) : (
              <center className="mt-5">
                <button className="btn btn-success w-50" type="button" disabled>
                  <span className="sr-only">Loading...</span>
                </button>
              </center>
            )}
          </div>
        </div>
        </>
    )
}
export default SingleProduct;