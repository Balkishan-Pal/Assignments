import { Link } from "react-router-dom"


export const Movies = ()=>{
    return(
        <div>

            <div>
           <Link to = "/fastandfurios" > <img src ="https://m.media-amazon.com/images/I/81OqnFpyxUL._SL1500_.jpg"></img></Link>
           <h1>Fast And Furious</h1>
           <Link to = "/bookings"> <button>Book</button> </Link>
           </div>


           <div>
           <Link to = "/blackwidow" > <img src ="https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"></img></Link>
           <h1>Black Widow</h1>
           <Link to = "/bookings"> <button>Book</button> </Link>
           </div>


           <div>
           <Link to = "/avengers" > <img src ="https://image.api.playstation.com/vulcan/img/cfn/11307mfB_C9XcqTOrc2UYKVwNS-Im4Ncsv0WDC50BU-j1hyUXTfzKxgxKSMz_mbBtVoQmuvDLHzPclp__egUa2LmmHoD6uEO.png"></img></Link>
           <h1>Avengers</h1>
           <Link to = "/bookings"> <button>Book</button> </Link>
           </div>



        </div>
        
    )
}