import logo from './logo.svg';
import './App.css';
import {GitInput} from "./components/gitInput"
import { useState ,useEffect } from 'react';
import axios from "axios"


function App() {

const[text,setText] = useState("")
const[date,setDate] = useState("")
const[show,setShow] = useState([])


const handleChange=(e)=>{
 setText(e.target.value)

}

const handleDate=(e)=>{
  setDate(e.target.value)
 }
 





const handleGet=async(pincode)=>{
  let datee =date.split("-").reverse().join("-")
  const users = await axios.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin",{
    params:{
      pincode:pincode,
      date:datee
    }
  })
  // console.log( {date})
  return users
}

const handleSearch =async(e)=>{
  const users = await handleGet(text)
  console.log(date.split("-").reverse().join("-"))
  console.log(users.data)
 
setShow(users.data.sessions)

}

useEffect(()=>{
  handleGet()
},[])

  return (
    <div className="App">
    <h1>Covid vaccine in your area</h1>
    <p>Note: - please enter todays date only.</p>
    <GitInput handleChange={handleChange} handleSearch={handleSearch} list={show} handleDate={handleDate} />
    </div>
  );



}

export default App;
