import {useState} from "react"
import "./todo.css"
function Todo(){
   const[text,setText] = useState("")
   const[todos,setTodos] = useState([])
   const[butt,setButt] = useState("Mark done")
 
   let style
   const handleChange=(e)=>{
       console.log("input box changed")
       setText(e.target.value)
   }


   const handleAdd=()=>{
     console.log(text)
     setTodos([...todos,text])
     setText("")
   }

   const handleColor=(e)=>{
     e.target.style.backgroundColor="lightgreen"
     e.target.style.color="black"
     e.target.style.border ="1px solid lightgreen"
      
     setButt("Completed")
    //  setTimeout(() => setButt("Dark Done"), [1000])
   }


    return (
        <div id={"bigdiv"}>
            <input value ={text} onChange={handleChange} type ="text" placeholder ="Enter To-Do"></input>
            <button onClick ={handleAdd}>Add</button>
            {
                todos.map((event)=>(
                    <div id={"listdiv"}>
                    <div id={"particulardiv"}>
                    {event} <button style={{color: "white",background:"black",border:"1px solid black"}} onClick ={handleColor} >{butt}</button>
                    </div> 
                    </div>
                ))
            }
        </div>
    )
}

export {Todo}