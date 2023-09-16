import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavLinks from "./views/NavLinks";
import Home from "./views/Home";
import SearchProducts from "./views/SearchProducts";
import Categories from "./views/Categories";
// import Categ from "./views/Categ";
import Users from "./views/Users";
import Commentss from "./components/Commentss";
import ToDoList from "./components/ToDoList";
import SearchUsers from "./views/SearchUsers";
import SingleProductsPage, { loadersingleproducts } from "./views/SingleProductsPage";
import CatgeoriesPage, { loadercatgories } from "./views/CatgeoriesPage";




const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLinks />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/home/:id",
        element: <Home />,
      },
      {
        path: "searchproducts",
        element:<SearchProducts/>
      },
      {
        path: "categories",
        element:<Categories/>
      },
      {
        
      },
      {
        path: "users",
        element:<Users/>
      },
      {
        path: "searchusers",
        element:<SearchUsers/>
      },
      {
        path: "comments",
        element:<Commentss/>
      },
      {
        path: "todolist",
        element:<ToDoList/>
      }
    ]

  },
  {
    path: "/products/:id",
    element: <SingleProductsPage/>,
    loader: loadersingleproducts
  }, 
  {
    path: "/categories/:categories",
    element: <CatgeoriesPage/>,
    loader: loadercatgories
  }, 
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
