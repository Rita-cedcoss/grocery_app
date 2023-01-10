import React from 'react'

const ProdSlider = () => {
  return (
    <>
    <div id="demo" className="carousel slide" data-bs-ride="carousel">

{/* <!-- Indicators/dots --> */}
<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

{/* <!-- The slideshow/carousel --> */}
<div className="carousel-inner">
  <div className="carousel-item active">
    <div className='row p-2'>
    <div className="col-3">
    <img src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-10/Spar-Day-SPAR-ATTA-web-min.jpg" alt="Los Angeles" className="d-block" style={{"minHeight":"400px", "width":"100%"}}/>
    </div>
    <div className="col-3">
    <img src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2022-12-29/Home-Care-web-min.png" alt="Los Angeles" className="d-block" style={{"minHeight":"400px","width":"100%"}}/>
    </div>
    <div className="col-3">
    <img src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-11/Spar-Breakfast-web-min.png" alt="Los Angeles" className="d-block" style={{"minHeight":"400px","width":"100%"}}/>
    </div>
    <div className="col-3">
    <img src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-11/Spar-Home-Care-web-min.png" alt="Los Angeles" className="d-block" style={{"minHeight":"400px","width":"100%"}}/>
    </div>
    </div>
   
  </div>
  <div className="carousel-item">
  <div className='row p-2'>
    <div className="col-3">
    <img src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-10/Spar-Day-dai-web-min.jpg" alt="Los Angeles" className="d-block" style={{"minHeight":"400px", "width":"100%"}}/>
    </div>
    <div className="col-3">
    <img src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2022-12-29/Home-Care-web-min.png" alt="Los Angeles" className="d-block" style={{"minHeight":"400px","width":"100%"}}/>
    </div>
    <div className="col-3">
    <img src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-11/Spar-Breakfast-web-min.png" alt="Los Angeles" className="d-block" style={{"minHeight":"400px","width":"100%"}}/>
    </div>
    <div className="col-3">
    <img src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-8/Red-Label-cr-web-min.jpg" alt="Los Angeles" className="d-block" style={{"minHeight":"400px","width":"100%"}}/>
    </div>
    </div>
  </div>
  <div className="carousel-item">
  <div className='row p-2'>
    <div className="col-3">
    <img src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-10/Spar-Day-dai-web-min.jpg" alt="Los Angeles" className="d-block" style={{"minHeight":"400px", "width":"100%"}}/>
    </div>
    <div className="col-3">
    <img src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2022-12-29/Home-Care-web-min.png" alt="Los Angeles" className="d-block" style={{"minHeight":"400px","width":"100%"}}/>
    </div>
    <div className="col-3">
    <img src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-11/Spar-Breakfast-web-min.png" alt="Los Angeles" className="d-block" style={{"minHeight":"400px", "width":"100%"}}/>
    </div>
    <div className="col-3">
    <img src="https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-8/Red-Label-cr-web-min.jpg" alt="Los Angeles" className="d-block" style={{"minHeight":"400px", "width":"100%"}}/>
    </div>
    </div>
  </div>
</div>

{/* <!-- Left and right controls/icons --> */}
<button className="carousel-control-prev  " type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon bg-dark rounded-circle p-4"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon bg-dark rounded-circle p-4"></span>
</button>
</div>
    </>
  )
}

export default ProdSlider