
import { useState } from "react";
import UsersImage from "../components/UsersImage";
import {
    Navbar,
    Input,
    Typography,
    IconButton,
  } from "@material-tailwind/react";

import { Button } from '@mui/material';
// import { Circles } from "react-loader-spinner";


const api = 'https://dummyjson.com/users/search?q=';
function SearchUsers() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState("")
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const fetchOneData = async (user) => {
        try {
            setError("")
            const response = await fetch(`${api}${user}`)
            if (!response.ok) throw new Error("something happen")
            const data = await response.json();
            setData(data.users)
            console.log(data.users)
            setError("")
        } catch (err) {
            setError(err.message)
        }
    }
    const searchButton = () => {
        fetchOneData(search)
    }


    return (
        <div style={{margin:"20px auto"}}>
          <Navbar className="mx-auto max-w-screen-xl px-4 py-3">
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
              <Typography
                // as="a"
                href="#"
                variant="h6"
                className="mr-4 ml-2 cursor-pointer py-1.5"
              >
                SEARCH USERS
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
                  label="find users..."
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
          {loader && <h2>Find Users......</h2>}
          {!loader && <UsersImage list={ data} />}

            
        </div>
        // <div className="container ">
        //     <h1>Search Users</h1>

        //     <div>
        //         <input className="form-control" placeholder="find any users" onChange={handleSearch} value={search} />
        //         <button onClick={searchButton} className="btn btn-success  mt-3 fw-bold">search</button>
        //     </div>

        //     <div>
        //         {loader && <h2>Find Users......</h2>}

        //         {!loader && <UsersImage list={ data} />}
        //     </div>
        // </div>
    )
}

export default SearchUsers;