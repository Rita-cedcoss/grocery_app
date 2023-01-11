import React from 'react'
type  prodbannerProps={
  imgs:string,
  height:string
}
const ProdBanner = (props:prodbannerProps) => {
  return (
    <div className='container-fluid mt-2 mb-2'>
       <img alt='' src={props.imgs} style={{"minHeight":`${props.height}`,"width":"100%"}}/>
    </div>
  )
}

export default ProdBanner