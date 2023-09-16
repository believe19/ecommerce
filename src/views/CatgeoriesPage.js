import { Link, useLoaderData, useParams } from "react-router-dom";
import List from "../components/List";
import { AiFillHome } from "react-icons/ai"
// import ListCategories from "../components/ListCategories";


function CatgeoriesPage() {
    const { categories } = useParams();
    const categoriesId = categories;
    const categoriesPage = useLoaderData()
    const products = categoriesPage[0]
    return (
        <div>
            <div style={{}} >
                {categories}
                <div className="text-center" style={{marginLeft:'20px'}}>   <Link to={`/categories`} style={{ textDecoration: 'none', fontSize: "24px" }} className="text-center"><AiFillHome /></Link></div>
                <List list={products}/>
            </div>
        </div>
    )
}
export async function loadercatgories({ params }) {
    const categories = params.categories
    const response = await fetch(`https://dummyjson.com/products/category/${categories}`)
    if (!response.ok) {

    }
    const data = await response.json()
    console.log(data.products) 

   
    const mydata = [];
    mydata.push(data.products)
    return  mydata
}
export default CatgeoriesPage;