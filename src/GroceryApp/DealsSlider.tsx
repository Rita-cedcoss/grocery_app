import React, { Component } from "react";
import Slider from "react-slick";
type ProdData = {
  _id: string;
  quantity:number;
  calPrice:number;
  title: string;
  description: string;
  category: string;
  brand: string;
  expDate: string;
  mfdDate: string;
  size: string;
  price: number;
  stock: string;
  images: string[];
  suggestion: string[];
  allegations: string[];
}
type DealsProps={
  prodData:ProdData[],
  heading:string,
  cartArr:ProdData[] ,
  setCartArr:React.Dispatch<React.SetStateAction<[] | ProdData[]>>
}
const DealsSlider =(props:DealsProps)=> {
 let state = {
    display: true,
    width: 1200,
    margin: "auto",
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  // item added in cart
const addtoCart=(ind:number)=>{
let temp=-1;
for(let i=0;i<props.cartArr.length;i++){
   if(props.cartArr[i]._id===props.prodData[ind]._id)
   {
    temp=i;
   }
}
if(temp>=0)
   {
     props.cartArr[temp].quantity++;
     props.cartArr[temp].calPrice=props.cartArr[temp].quantity*props.cartArr[temp].price;
     props.setCartArr(props.cartArr);
     alert("Item is add in cart Successfully");
   }
   else{
   props.cartArr.push(props.prodData[ind]);
   props.cartArr[ind].calPrice=props.cartArr[ind].quantity*props.cartArr[ind].price;
   props.setCartArr([...props.cartArr]);
   alert("Item is add in cart Successfully");
  }
  
}   
    return (
      <div >
       <div className="container-fluid border-bottom">
       <h2>{props.heading}</h2>
       </div>
        
      <div
          style={{
            width: state.width + "px",
            display: state.display ? "block" : "none",
            margin: state.margin,
          }}
        >
          <Slider {...settings}>
            {props.prodData.map((item,i)=>{
              //  console.log(item);
               return(<>
              <div className="row">
                <div className="col-10 m-auto bg-light mt-2 mb-2 p-3 border">
                  <img alt="" height="200px" width="100%" src={item.images[0]}/>
                  <div className="mt-4 border-top">
                    <p>{item.brand}</p>
                    <p>{item.price}</p>
                    <button type="button" className="btn btn-outline-success ps-4 pe-4" onClick={()=>addtoCart(i)}><i className="bi bi-cart3"></i>Add to Cart </button>
                  </div>
                </div>
              </div>
              </>)
            })}
          </Slider>
        </div>
      </div>
    );
}

export default DealsSlider;
