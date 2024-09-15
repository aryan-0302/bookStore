import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "axios"
import toast from "react-hot-toast"

const Signup = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data) iske andar signup details hai isliye data use kr rhe hai.
    const userInfo={
      fullName:data.fullName,
      email:data.email,
      password:data.password
    }
    axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Signup successfully!');
        navigate(from,{replace:true});
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err)=>{
      if(err.response){
      console.log(err)
      toast.error('This is an error!');
      }
    })
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[400px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>

              {/* Name Field */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register('fullName', { required: 'This field is required' })}
                />
                {errors.fullName && <span className="text-red-500">{errors.name.message}</span>}
              </div>

              {/* Email Field */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register('email', { required: 'This field is required' })}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>

              {/* Password Field */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register('password', { required: 'This field is required' })}
                />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              </div>

              {/* Submit Button */}
              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Signup
                </button>
              </div>
            </form>

            <p className="text-xl mt-4 text-center">
              Have an account?{' '}
              <Link to="/login" className="underline text-blue-500">
                Login
              </Link>
            </p>

          </div>
          
        </div>
      </div>
    </>
  );
};

export default Signup;
