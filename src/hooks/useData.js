import { useEffect, useState } from "react";


const useData = () => {
   const [services, setServices] = useState([]);
   const [doctors, setDoctors] = useState([]);
   const [testimonials, setTestimonials] = useState([]);
   const [news, setNews] = useState([])

   useEffect(()=>{
       fetch('/services.JSON')
       .then(res => res.json())
       .then(data => setServices(data) )
   },[])

   useEffect(()=>{
       fetch('/ourTeam.JSON')
       .then(res=> res.json())
       .then(data => setDoctors(data))
   },[])

   useEffect(()=>{
       fetch('/testimonial.JSON')
       .then(data=>data.json())
       .then(res=> setTestimonials(res))
   },[])

   useEffect(()=>{
       fetch('/news.JSON')
       .then(res=>res.json())
       .then(data => setNews(data))
   },[])
   return{
       services,
       doctors,
       testimonials,
       news
   }
};

export default useData;