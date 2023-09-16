
import List from "../components/List";
import { useState } from "react";
import {
    Navbar,
    Input,
    Typography,
    IconButton,
  } from "@material-tailwind/react";

import { Button } from '@mui/material';



const api = 'https://dummyjson.com/products/search?q=';
function SearchProducts() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState("")
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const fetchOneData = async (product) => {
        try {
            setError("")
            const response = await fetch(`${api}${product}`)
            if (!response.ok) throw new Error("something happen")
            const data = await response.json();
            setData(data.products)
            console.log(data.products)
            setError("")
        } catch (err) {
            setError(err.message)
        }
    }
    const searchButton = () => {
        fetchOneData(search)
    }


    return (
        <div style={{margin:"15px auto"}}>
          <Navbar className="mx-auto max-w-screen-xl px-4 py-3">
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
              <Typography
                // as="a"
                href="#"
                variant="h6"
                className="mr-4 ml-2 cursor-pointer py-1.5"
              >
                SEARCH PRODUCTS
              </Typography>
              <div className="ml-auto flex gap-1 md:mr-4">
                <IconButton variant="text" color="blue-gray">
                  
                </IconButton>
                <IconButton variant="text" color="blue-gray">
                
                </IconButton>
              </div>
              <div className="relative flex w-full gap-2 md:w-max">
                <Input
                  type="search"
                  label="find any products"
                  className="pr-20"
                  onChange={handleSearch}
                  value={search}
                  containerProps={{
                    className: "min-w-[288px]",
                  }}
                />
                <Button onClick={searchButton} size="sm" className="!absolute right-1 top-1 rounded">
                  Search
                </Button>
              </div>
            </div>
          </Navbar>
             {loader && <h2>Find product......</h2>}

             {!loader && <List list={ data} />}
            
        </div>
       
    )
}

export default SearchProducts;


 // <div className="container ">
            /* <h1>Search Products</h1>

            <div>
                <input className="form-control" placeholder="find any products" onChange={handleSearch} value={search} />
                <button onClick={searchButton} className="btn btn-success  mt-3 fw-bold">search</button>
            </div>

            <div>
                {loader && <h2>Find product......</h2>}

                {!loader && <List list={ data} />}
            </div>
        </div> */