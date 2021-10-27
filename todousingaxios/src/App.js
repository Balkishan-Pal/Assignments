import logo from './logo.svg';
import './App.css';
import {Todo} from "./component/Todo"
import { useState , useEffect} from 'react';
import axios from "axios"

function App() {

  const [text,setText] = useState({
    name:"",
    status:false
  })
 const [gettext, setGettext] = useState([])
 const [showdata, setShowdata] = useState([])

 const handleAdd=async()=>{
   const list = await axios.post("http://localhost:3002/todos",{
   ...text
   })
   console.log(list)
 }

 const handleget =async()=>{
  const { data } = await axios.get(`http://localhost:3002/todos`);
  setGettext(data)
  setShowdata(gettext)
 }

 useEffect(() => {
  handleget()
}, []);


useEffect(
  () => {
    console.log(gettext);
    setShowdata(gettext);
  },
  [ gettext ]
);

  const handlechange =(e)=>{
    const {name,value}=e.target;
    setText({
      ...text,
      [name]:value
    })
   
   }

 const handleClick =(e)=>{
   e.preventDefault()
   handleAdd()
   handleget()
   console.log(text)
 }


  return (
    <div className="App">
     <Todo handlechange={handlechange} handleClick={handleClick} list={showdata}></Todo>
    </div>
  );
}

export default App;
