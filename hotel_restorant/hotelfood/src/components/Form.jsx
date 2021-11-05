import "./from.css"

function Details({handleChange,handleSubmit,list,rating,payment}){
    return(
        <>
        <div id="inputhandlingdiv">
        <input type="text" placeholder="Title" name="title" onChange={handleChange}></input>
        <input type="img" placeholder="Image Url" name="image" onChange={handleChange}></input>
        <input type="number" placeholder="ratings" name="ratings" onChange={handleChange}></input>
        <select name="paymentmethod" onChange={handleChange}>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
            <option value="any">Any</option>
        </select>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
        <div id="bigdiv">
        {
            list.
            filter(function(e){ 
                return e.ratings>=rating
            }).
            filter((e)=>e.paymentmethod==payment).
            map(e=><div className= "datadiv" key={e.id}>

            <div id="unorderlist">

            <img src={e.image}></img>
            <h3> {e.title}</h3>
            
            <div id= "flexdiv">
            <p id="greencol"> <i class="fas fa-star"></i> {e.ratings}</p>
            <p id="colorred"> {e.paymentmethod}</p>
            </div>
            
            
            </div>
            </div>)
        }
        </div>
       
        </>
    )
}

export {Details}