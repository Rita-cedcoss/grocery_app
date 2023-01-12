import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
type typeSign={
  name: string;
    email: string;
    passwd:string;
}
type signProps={ 
  signin: typeSign[]
  setSignin: React.Dispatch<React.SetStateAction<[] | typeSign[]>>
 }
const Signin = (props:signProps) => {
  const refname=useRef<HTMLInputElement>(null);
  const ref1=useRef<HTMLInputElement>(null);
  const ref2=useRef<HTMLInputElement>(null);
  let navigate=useNavigate();
  const Register=()=>
  {
    if (refname.current !== null && ref1.current !== null&& ref2.current !== null){
      let name=refname.current.value;
      let email=ref1.current.value;
      let password=ref2.current.value;
        let obj={name:name,email:email,passwd:password};
    if(name==""||email==""||password=="")
    {
      alert("Please fill all fields");
    }
    else{
      console.log(obj);
      props.signin.push(obj);
      props.setSignin([...props.signin])
      navigate("/signup");
      refname.current.value="";
      ref1.current.value="";
      ref2.current.value="";
    }
  }
  }
  return (
    <div className='container col-6 m-auto mt-4 border p-4'>
    <h2 className='mb-4'>Sign Your Account</h2>
    <form >
    <div className="mb-3">
      <label className="form-label">Name</label>
      <input type="text" ref={refname} className="form-control"  aria-describedby="nameHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label className="form-label">Email address</label>
      <input type="email" ref={ref1} className="form-control"  aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label  className="form-label">Password</label>
      <input type="password" ref={ref2} className="form-control" id="exampleInputPassword1"/>
    </div>
    <button type="submit" className="btn btn-success" onClick={Register}>Submit</button>
  </form>
  </div>
  )
}

export default Signin