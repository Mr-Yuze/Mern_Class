import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function Login(){
    const Navigate=useNavigate();
    const location=useLocation();
    const regdata=location.state
    const[formdata,setformdata]=useState({
    username:"",
    password:""
  })

  function handle(e){
    setformdata({
      ...formdata,
      [e.target.name]:e.target.value
    });
  }

  function print(e){
    e.preventDefault();
    console.log("form",formdata)
    console.log("reg",regdata)
    if(formdata.username===regdata.name && formdata.password === regdata.password){
      alert("ok")
      Navigate("/dashboard",{
        state:formdata
      })
    }
    else{
      alert("invalid details")
    }
  }

    return(
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F5E6D3] via-[#F2CDBB] to-[#E8B6A1] px-4 py-10">
        <form onSubmit={print} className="w-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl rounded-4xl p-8 space-y-5 flex flex-col items-center "> 
        <h1 className="font-bold text-3xl py-4">LOGIN</h1>
        
        <input type="text" placeholder="Enter the name: " required value={formdata.username} name="username" onChange={handle} className="w-72 px-4 py-3 bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl shadow-lg text-[#5B4636] placeholder-[#8B7565] "/><br></br>
        
        <input type="password" placeholder="Enter the pass: " required value={formdata.password} name="password" onChange={handle} className="w-72 px-4 py-3 bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl shadow-lg text-[#5B4636] placeholder-[#8B7565] "/><br></br>
        <button type="submit" className="w-25 py-3 bg-white/30 backdrop-blur-md border border-white/50 rounded-3xl text-[#5B4636] font-semibold shadow-lg">SUBMIT</button>
        </form>
      </div>
    );
}
export default Login;