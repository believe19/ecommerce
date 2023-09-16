import React from "react";
import {Link} from "react-router-dom";


import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        // as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
       
      >
        <Link href="#" className="flex items-center hover:text-blue-500 transition-colors">
          HOME
        </Link>
      </Typography>
      <Typography
        // as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
       
      >
        <Link href="#" className="flex items-center hover:text-blue-500 transition-colors"  to="/searchproducts">
          SEARCH PRODUCTS
        </Link>
      </Typography>
      <Typography
        // as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
        
      >
        <Link href="#" className="flex items-center hover:text-blue-500 transition-colors" to="/categories">
          CATEGORIES
        </Link>
      </Typography>
      <Typography
        // as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
       
      >
        <Link href="#" className="flex items-center hover:text-blue-500 transition-colors"  to="/users">
          USERS
        </Link>
      </Typography>
      <Typography
        // as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
       
      >
        <Link href="#" className="flex items-center hover:text-blue-500 transition-colors"  to="/todolist">
          GET TO DO LIST
        </Link>
      </Typography>
      <Typography
        // as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
       
      >
        <Link href="#" className="flex items-center hover:text-blue-500 transition-colors"  to="/searchusers">
          SEARCH USERS
        </Link>
      </Typography>
      <Typography
        // as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
       
      >
        <Link href="#" className="flex items-center hover:text-blue-500 transition-colors"  to="/comments">
          COMMENTS
        </Link>
      </Typography>
    </ul>
    
  );
}
 
export function Homepage() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3" style={{margin:"8px auto"}}>
      <div className="flex items-center justify-between text-blue-gray-900" >
        <Typography
        //   as="a"
          href="#"
          variant="h4"
          className="mr-4 cursor-pointer py-1.5"
        >
          e-COMMERCE
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default Homepage;