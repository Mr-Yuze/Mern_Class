import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerschema } from "../components/FormSchema/registerschema";
import { zodResolver } from "@hookform/resolvers/zod";
function Register() {
    const navigate =useNavigate();
    const{register,handleSubmit,formState:{errors}} = useForm({
          resolver: zodResolver(registerschema)
    })
     function onsubmit(data){
        console.log(data)
        alert("registeration successful")
        navigate("/",{state:data})
     }
    return ( 
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F5E6D3] via-[#F2CDBB] to-[#E8B6A1] px-4 py-10">   
            <form onSubmit={handleSubmit(onsubmit)} className="w-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl rounded-4xl p-8 space-y-5 flex flex-col items-center " >
            <h1 className="font-bold text-3xl py-4"  >REGISTER</h1> 
            <input type="text" placeholder="Enter ur name" {...register("name")} className="w-72 px-4 py-3 bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl shadow-lg text-[#5B4636] placeholder-[#8B7565] "/>
            <p>{errors.name?.message}</p>
            <input type="text" placeholder="Enter ur email" {...register("email")} className="w-72 px-4 py-3 bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl shadow-lg text-[#5B4636] placeholder-[#8B7565]  " />
            <p>{errors.email?.message}</p>
            <input type="text" placeholder="Enter ur password" {...register("password")} className="w-72 px-4 py-3 bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl shadow-lg text-[#5B4636] placeholder-[#8B7565] "/>
            <p>{errors.password?.message}</p>
            <input type="text" placeholder="Enter ur age" {...register("age")} className="w-72 px-4 py-3 bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl shadow-lg text-[#5B4636] placeholder-[#8B7565]"/>
            <p>{errors.age?.message}</p>
            <button type="submit" className="w-25 py-3 bg-white/30 backdrop-blur-md border border-white/50 rounded-3xl text-[#5B4636] font-semibold shadow-lg">Submit</button>
            </form>
      </div>  
     );
}

export default Register;