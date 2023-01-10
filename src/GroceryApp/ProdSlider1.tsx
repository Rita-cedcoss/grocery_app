import React from 'react'
type ProdSlider1Props={
    arrimg:string[],
    height:string
}
const ProdSlider1 = (props:ProdSlider1Props) => {
  return (
    <div id="demo1" className="carousel slide" data-bs-ride="carousel">

{/* <!-- Indicators/dots --> */}
<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo1" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo1" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo1" data-bs-slide-to="2"></button>
</div>

{/* <!-- The slideshow/carousel --> */}

<div className="carousel-inner">
  
  <div className="carousel-item active">
    <div className='row p-2'>
    <div className="col-3">
    <img src={props.arrimg[0]} alt="Los Angeles" className="d-block" style={{"minHeight":`${props.height}`, "width":"100%"}}/>
    
    </div>
    <div className="col-3">
    <img src={props.arrimg[1]} alt="Los Angeles" className="d-block" style={{"minHeight":`${props.height}`,"width":"100%"}}/>
    </div>
    <div className="col-3">
    <img src={props.arrimg[2]} alt="Los Angeles" className="d-block" style={{"minHeight":`${props.height}`,"width":"100%"}}/>
    </div>
    <div className="col-3">
    <img  src={props.arrimg[3]} alt="Los Angeles" className="d-block" style={{"minHeight":`${props.height}`,"width":"100%"}}/>
    </div>
    </div>
   
  </div>

  <div className="carousel-item active">
    <div className='row p-2'>
    <div className="col-3">
    <img src={props.arrimg[4]} alt="Los Angeles" className="d-block" style={{"minHeight":`${props.height}`, "width":"100%"}}/>
    
    </div>
    <div className="col-3">
    <img src={props.arrimg[5]} alt="Los Angeles" className="d-block" style={{"minHeight":`${props.height}`,"width":"100%"}}/>
    </div>
    <div className="col-3">
    <img src={props.arrimg[6]} alt="Los Angeles" className="d-block" style={{"minHeight":`${props.height}`,"width":"100%"}}/>
    </div>
    <div className="col-3">
    <img  src={props.arrimg[7]} alt="Los Angeles" className="d-block" style={{"minHeight":`${props.height}`,"width":"100%"}}/>
    </div>
    </div>
   
  </div>
  <div className="carousel-item active">
    <div className='row p-2'>
    <div className="col-3">
    <img src={props.arrimg[8]} alt="Los Angeles" className="d-block" style={{"minHeight":`${props.height}`, "width":"100%"}}/>
    
    </div>
    <div className="col-3">
    <img src={props.arrimg[9]} alt="Los Angeles" className="d-block" style={{"minHeight":`${props.height}`,"width":"100%"}}/>
    </div>
    <div className="col-3">
    <img src={props.arrimg[10]} alt="Los Angeles" className="d-block" style={{"minHeight":`${props.height}`,"width":"100%"}}/>
    </div>
    <div className="col-3">
    <img  src={props.arrimg[11]} alt="Los Angeles" className="d-block" style={{"minHeight":`${props.height}`,"width":"100%"}}/>
    </div>
    </div>
   
  </div>
</div>

{/* <!-- Left and right controls/icons --> */}
<button className="carousel-control-prev  " type="button" data-bs-target="#demo1" data-bs-slide="prev">
  <span className="carousel-control-prev-icon bg-dark rounded-circle p-4"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo1" data-bs-slide="next">
  <span className="carousel-control-next-icon bg-dark rounded-circle p-4"></span>
</button>
</div>
  )
}

export default ProdSlider1