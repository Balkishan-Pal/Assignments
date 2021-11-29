import { useState } from "react"
import { Redirect } from "react-router"



const Bookings = () => {
    const [time, setTime] = useState(0)

    const handlebook = () =>{
        alert("booked")
    }

    return (
        <>
        <div>
            <input type="datetime" value={time} placeholder="time" onChange={(e)=>setTime(e.target.value)} width="20px"/>
            <select>
                <option value="Am">AM</option>
                <option value="Am">PM</option>
            </select>
        </div>
        <button onClick={handlebook}>Book</button>
        </>
    )
}

export {Bookings}