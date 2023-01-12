import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
type signUser={
    email: string;
    passwd:string;
}
type signProps={
  signin:signUser[]
}
const Signup = (props:signProps) => {
  let refEmail=useRef<HTMLInputElement>(null);
  let refPwd=useRef<HTMLInputElement>(null);
  let navigate=useNavigate();
  const Login=()=>{
    // console.log(email,password);
    if(refEmail.current!==null && refPwd.current!==null)
    {
      let email=refEmail.current.value;
      let passwd=refPwd.current.value
   
    let temp=-1;
   for(let i=0;i<props.signin.length;i++)
   {
     if(props.signin[i].email==email && props.signin[i].passwd==passwd)
     {
      temp=i;
     console.log(temp);
     }
   }
   if(temp!==-1)
   {
     alert("You are login successfully");
     navigate("/home");
   }
   else{
    alert("please enter valid detail");
   }
  }
  }
  return (
    <div className='container col-6 m-auto mt-4 border p-4'>
    <h2 className='mb-4'>Sign Your Account</h2>
    <form >
    <div className="mb-3">
      <label className="form-label">Email address</label>
      <input type="email" ref={refEmail} className="form-control"  aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label  className="form-label">Password</label>
      <input type="password" ref={refPwd} className="form-control" id="exampleInputPassword1"/>
    </div>
    <button type="submit" className="btn btn-success" onClick={Login}>Submit</button>
  </form>
  </div>
  )
}

export default Signup