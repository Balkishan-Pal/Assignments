
import "./gitinput.css"
function GitInput({handleChange,handleSearch,list,handleDate ,text,datee}){
    return(
        <div >
        <div id = "inputdiv1">

        
            <input type="number" placeholder="Enter Pincode" onChange={handleChange}></input>
            <input type="date" onChange={handleDate} name="date" placeholder="enter todays date"></input>
            <button onClick={handleSearch}>Search</button>
            </div>
            <div id="datadiv">
            {
               list.map(users=><div id="insidediv" key={users.session_id}>
               <h4>{users.name}</h4>
               <p><span id="address">Address -</span> {users.address}</p>

               <ul id="listd">
               <li>Slot1 - {users.slots[0]} </li>
               <li>Slot2 - {users.slots[1]} </li>
               <li>Slot3 - {users.slots[2]} </li>
               <li>Slot4 - {users.slots[3]}</li>
               <li id="available"> Available-doses- {users.available_capacity} </li>
               </ul>

               <p>vaccine-name: {users.vaccine}</p>
               </div>)
            }
            </div>
        </div>
      
    )
}
export {GitInput}