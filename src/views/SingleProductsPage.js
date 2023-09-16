import { useLoaderData, useParams } from "react-router-dom";
import SingleProduct from "../components/SingleProducts";

import {  Typography } from "@mui/material";



function SingleProductsPage() {
    const {id} = useParams ();
    const productID = id;
    const SingleProducts = useLoaderData()
    const newItem = [];
    newItem.push(SingleProducts)
  return (
    <div className="alignitems-center">
    
      <Typography variant="h6" className='mt-2' color="black" marginLeft='33px'>
        You re viewing item/index {productID}
      </Typography>
        <SingleProduct  single={newItem}/>
    </div>
  )
}

export async function loadersingleproducts({params}) {
    const id = params.id;
    const response = await fetch (`https://dummyjson.com/products/${id}`)
    if (!response.ok){

    }
    const data = await response.json()
    console.log(data)
    return data
}
   
export default SingleProductsPage;
