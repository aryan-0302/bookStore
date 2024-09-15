import React from 'react'
import Home from "../src/Home/Home.jsx"
import Courses from './Courses/Courses.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup.jsx'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx'

 const App = () => {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser)

  return (
    <>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/course' element={authUser?<Courses></Courses>:<Navigate to="/signup"></Navigate>}></Route>
    <Route path='/signup' element={<Signup></Signup>}></Route>
   </Routes>
   <Toaster></Toaster>
    </>
  )
}
export default App