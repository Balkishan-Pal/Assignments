import { useEffect } from "react";
import { useParams } from "react-router-dom"
import {useDispatch,useSelector} from 'react-redux'
import {detailsShowError, detailsShowLoading, detailsShowSucess } from '../redux/show/action'
import {bookShowLoading ,bookShowError,bookShowSucess} from '../redux/book/action'

import axios from 'axios'
export const Detail = ()=>{
   const param = useParams()
   const dispatch = useDispatch()
   useEffect(async()=>{
      dispatch(detailsShowLoading())
   try{
     const {data} = await axios.get(`http://localhost:3001/show/${param.id}`)
     dispatch(detailsShowSucess(data))
   }
   catch(err){
      dispatch(detailsShowError())
   }
   },[param.id])
   const store = useSelector((store) => store);
   let x = store.show.data
   const handleBooking = async (id)=>{
      console.log(id,store);
      dispatch(bookShowLoading())
      try{
        const {data} = await axios.get(`http://localhost:3001/show/${id}`)
        dispatch(bookShowSucess(data, "description...................."))
        console.log(store);
      }
      catch(err){
         dispatch(bookShowError())
      }
   }
   if(store.auth.token === ''){
      return  <div>404 Error</div>
    }
   return <div>
      <h1>Movie Details</h1>
      <p>Name: {x.movie}</p>
      <p>Hollywood</p>
      <p>4.2</p>
      <p>description....................</p>
      <button onClick={()=>{
         handleBooking(x.id)
         alert("Booked ! happy watching")
      }}>Book Now</button>
   </div>
}