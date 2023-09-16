import { Outlet } from "react-router-dom";
import Homepage from "../components/Homepage";


function NavLinks() {
    return (
        <div>
            <nav className="nav flex-column">
                <Homepage/>
                {/* <Link className="nav-link" href="#">Home</Link>
                <Link className="nav-link"  to="searchproducts">Search Products</Link>
                <Link className="nav-link" to="categories">Categories</Link>
                <Link className="nav-link" to="users">Users</Link>
                <Link className="nav-link" to="searchusers">Search for Users</Link>
                <Link className="nav-link" to="comments">Commentss</Link>
                <Link className="nav-link" to="todolist">Get ALL Todos</Link> */}
            </nav>
            <hr/>
            <div className="container ">
                <Outlet />
            </div>
        </div>
    )
}

export default NavLinks;