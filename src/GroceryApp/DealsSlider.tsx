import React, { Component } from "react";
import Slider from "react-slick";
type ProdData = {
  _id: string;
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
}[]

type DealsProps={
  prodData:ProdData,
  heading:string
}

export class DealsSlider extends Component<DealsProps> {
  state = {
    display: true,
    width: 1200,
    margin: "auto",
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <div >
       <div className="container-fluid border-bottom">
       <h2>{this.props.heading}</h2>
       </div>
        
      <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none",
            margin: this.state.margin,
          }}
        >
          <Slider {...settings}>
            {this.props.prodData.map(item=>{
               console.log(item);
               return(<>
              <div className="row">
                <div className="col-10 m-auto bg-light mt-2 mb-2 p-3 border">
                  <img alt="" height="200px" width="100%" src={item.images[0]}/>
                  <div className="mt-4 border-top">
                    <p>{item.brand}</p>
                    <p>{item.price}</p>
                    <button type="button" className="btn btn-outline-success ps-4 pe-4"><i className="bi bi-cart3"></i>Add to Cart </button>
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
}

export default DealsSlider;
