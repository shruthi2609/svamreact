import React from "react";

 const ProductCatalog=(props)=>{
console.log(props)
   {
     return (
      <div className='card' style={{width:'24rem'}}>
        <img src={props.productProp.imgSrc} width="50%"className="card-img-top" alt="noimg"></img>
      <div className="card-body">
      <h5 className="card-title">{props.productProp.prname}</h5>
      <p className="card-text">{props.productProp.price}</p>
      <a href={props.productProp.buylink} className="btn btn-primary">buy here</a>
      </div>
    </div>
     )
    
   

     }
 }
export default ProductCatalog
