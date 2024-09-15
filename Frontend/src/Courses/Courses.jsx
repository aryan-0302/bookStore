import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Course from "../components/Course.jsx"
import Footer from "../components/Footer.jsx"

 const Courses = () => {
  return (
<>
<Navbar></Navbar>
<div className='min-h-screen'>
<Course></Course>
</div>
<Footer></Footer>
</>
  )
}
export default Courses