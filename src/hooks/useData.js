import { useEffect, useState } from "react";


const useData = () => {
   const [services, setServices] = useState([]);
   const [doctors, setDoctors] = useState([]);
   const [testimonials, setTestimonials] = useState([]);
   const [news, setNews] = useState([])

   useEffect(()=>{
       fetch('/services.json')
       .then(res => res.json())
       .then(data => setServices(data) )
   },[])

   useEffect(()=>{
       fetch('/ourTeam.json')
       .then(res=> res.json())
       .then(data => setDoctors(data))
   },[])

   useEffect(()=>{
       fetch('/testimonial.json')
       .then(data=>data.json())
       .then(res=> setTestimonials(res))
   },[])

   useEffect(()=>{
       fetch('/news.json')
       .then(data=>data.json())
       .then(res => setNews(res))
   },[])
   return{
       services,
       doctors,
       testimonials,
       news
   }
};

export default useData;