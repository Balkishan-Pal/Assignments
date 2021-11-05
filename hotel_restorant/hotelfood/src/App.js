import logo from './logo.svg';
import './App.css';
import {Details} from "./components/Form"
import { useState ,useEffect} from 'react';
import axios from "axios"

function App() {

const [text, setText]=useState({
  title:"",
  image:"",
  ratings:4.1,
  paymentmethod:"",
})

const [getdata,setGetData] = useState([])
const [rating,setRating] = useState(4)
const [payment,setPayment] = useState("any")





const handleChange=(e)=>{
  const {name,value}=e.target
  setText({...text,[name]:value})
}



const handlePost=async()=>{
  const list = await axios.post("http://localhost:3001/food",{
    ...text
})

}

const handleGet=async()=>{
const {data} = await axios.get("http://localhost:3001/food")
setGetData(data)
console.log(data)
}

useEffect(()=>{
  handleGet()
},[])


const handleSubmit=()=>{
 handlePost()
 handleGet()
 setText("")
}

  return (
    <div className="App">
     Sort acc Ratings<button onClick ={()=>setRating(4)}>4</button>
     <button onClick ={()=>setRating(7)}>7</button>
     <button onClick ={()=>setRating(8)}>8</button>
     <br></br>
    Sort acc Payments: <button onClick ={()=>setPayment("cash")}>cash</button>
     <button onClick ={()=>setPayment("card")}>card</button>
     <button onClick ={()=>setPayment("any")}>Any</button>
     <Details handleChange={handleChange} handleSubmit={handleSubmit} list={getdata} rating={rating} payment={payment}/>
     
    </div>

  );
}

export default App;
