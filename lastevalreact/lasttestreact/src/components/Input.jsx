import { useState } from 'react';
import axios from "axios"
import "./input.css"
import {Avatar, Button, Grid, Paper,TextField} from "@material-ui/core"
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { blue } from '@material-ui/core/colors';
function Input(){


    const initdata ={
        username: "",
        email:"",
        phone:"",
        dob:"",
        password:""
      }
      
          const [text,setText]= useState(initdata)
         
      
          const handleInput = (e)=>{
            const {name,value,type,checked} = e.target;
            setText({...text ,[name]:type ==="checkbox" ?checked :value})
          }
      
         const handleSubmit =async(e)=>{
        //  e.preventDefault()
           handlepost()
           setText(initdata)
         }
      
      
         const handlepost =async()=>{
           const user =  await axios.post("http://localhost:3001/posts",{
             ...text
           })
           
         }
      
      const notify=()=>{
          toast("Registration Successfull !")
      }

  const paperstyle ={padding:20, width:300  , margin:"40px auto" }
  const linestyle ={margin:"10px auto"}
  const colorofbanner={color: "blue" ,width:"100px"}
    return(
        <Grid>
   <Paper elevation={10} style={paperstyle}>
       
          <h1>SignUp <Grid><AppRegistrationIcon style={colorofbanner}/></Grid> </h1>
            <form  id ="form">
              <div>
                  
                  <TextField placeholder="Enter Name" type="text" name="username" onChange={handleInput} value ={text.username} fullWidth required style={linestyle}></TextField>
                  
              </div>

              <div>
                  
                  <TextField placeholder="Enter Email" type="email" name = "email" onChange={handleInput} value ={text.email} fullWidth required style={linestyle}></TextField>
                  
              </div>

              <div>
                  
                  <TextField placeholder="Enter Phone No." type="number" name = "phone" onChange={handleInput} value ={text.phone} fullWidth required style={linestyle}></TextField>
                  
              </div>

              <div>
                 
                  <TextField placeholder="Enter Dob" type="date" name = "dob" onChange={handleInput} value ={text.dob} fullWidth required style={linestyle}></TextField>
                  
              </div>

              <div>
                  
                  <TextField placeholder="Enter password" type="password" name = "password" onChange={handleInput} value ={text.password} fullWidth required style={linestyle}></TextField>
                  
              </div>
              <Button color="primary" type="submit" variant="contained" onClick={()=>{handleSubmit();notify()}}  id="bu" style={linestyle}fullWidth required>Register</Button>
             
              <ToastContainer></ToastContainer>
            </form>
            </Paper>
        </Grid>
    )
}
export {Input}