import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios"
import { useState,useEffect } from 'react';

 const FreeBook = () => {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res=await axios.get("http://localhost:4001/book") ;
        //console.log(res.data);
        setBook(res.data.filter((data)=>
          data.category==="Free"));
      }catch(error){
        console.log(error)
      }
    }
    getBook();
  },[])
   
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            // breakpoint is decided on the basis of devices
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
   // console.log(filterData)
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos soluta, reprehenderit sapiente animi officiis quibusdam deserunt sed facere illum temporibus rem saepe esse, exercitationem possimus beatae. Saepe minus quidem itaque.</p>
        </div> 

    {/* card slider */}
    <div>
    <div className="slider-container">
      <Slider {...settings}>
        {book.map((item)=>{
            return <Cards item={item} key={item.id}></Cards>
        })}
      </Slider>
    </div>
    </div>
    </div>
    </>
  )
}
export default FreeBook