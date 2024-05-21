import { Link } from "react-router-dom";
import { products } from "../DataPath/products";
import Headerimage from "../components/Headerimage";
import { Card, CardContent, CardMedia, Rating } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SingleCard from "../components/SingleCard";

const Shop=()=>{
    return(
        <>
        <Headerimage porduct={'product'}/>
        <div className="container-fluid pb-5 d-flex justify-content-center home">
          <div className={`row w-75 `}>
            {products.length > 0 ? (
              products.filter(product=> ['mobile', 'wireless'].some(category => product.category.includes(category))).map((product) => (
                <div
                  className=" col-sm-12 col-md-6 col-lg-6 col-xl-4 "
                  key={product.id}
                >
                    <SingleCard product={product}/>
{/*                   <div>
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
export default Shop;