import React from "react";
import ClassComponent from "./Components/ClassComponent";

import CounterHooks from "./Components/CounterHooks";
import HooksEg from "./Components/HooksEg";
import LifeCycleMethods from "./Components/LifeCycleMethods";
import NewsApp from "./Components/NewsApp";
import TodoComponent from "./Components/TodoComponent";
import Unsplash from "./Components/UnSplash";
import PhoneBook from "./Components/PhoneBook";
import HooksLifeCycle from "./Components/HooksLifeCycle";
import FormUI from "./Components/FromUI";
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import Login from "./Components/Login";
import ParentComponent from "./Components/ParentComponent";

/*import BrandName from "./Components/BrandName";
import ProductCatalog from "./ProductCatalog";
const product=
    [
   {
    prname:"redmi",
    imgSrc:"https://images-eu.ssl-images-amazon.com/images/I/41z7UOJeMhL._SX300_SY300_QL70_FMwebp_.jpg",
    buylink:"https://www.amazon.in/gp/product/B09GFQQFRF/ref=s9_acss_bw_cg_Budget_1b1_w?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-7&pf_rd_r=KH9KAM6AV78C6C8HZ8E0&pf_rd_t=101&pf_rd_p=f05311e2-a645-4c1c-ac9f-acbbc99106b9&pf_rd_i=27021983031&th=1",
    price:"Rs.10000"
   } ,
   {
    prname:"oneplus",
    imgSrc:"https://images-eu.ssl-images-amazon.com/images/I/41Pt-iXGW8L._SX300_SY300_QL70_FMwebp_.jpg",
    buylink:"https://www.amazon.in/gp/product/B09B41TY3K/ref=s9_acss_bw_cg_Budget_2c1_w?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-8&pf_rd_r=J8VT64DR65E7RKWXF929&pf_rd_t=101&pf_rd_p=e396e689-7bd5-47f8-aad0-11dadd1b6b59&pf_rd_i=1389401031&th=1",
    price:"Rs.25000"
}]

const App=()=>{
    return(
        <div>
<BrandName></BrandName>
<div className="container">
  <div className="row">
  {product.map(item=>(
  <div  id='cardItem' className="col-lg-4"><ProductCatalog productProp={item}/>
  </div>
))}
  </div>
</div>





</div>
    )
}*/
const App=()=>{
  return(
    <div>

      <Router>
      <nav>
      <Link to="/news">News App</Link>
      <Link to="/phone">Phone Book</Link>
      <Link to="/parent">Parent</Link>
      </nav>
      <Routes>
      <Route path="/news" element={<HooksLifeCycle></HooksLifeCycle>}></Route>
      <Route path="/phone" element={<PhoneBook></PhoneBook>}></Route>
      <Route path="/parent" element={<ParentComponent></ParentComponent>}></Route>
      </Routes>
      </Router>
    </div>
    

  )
}

export default App