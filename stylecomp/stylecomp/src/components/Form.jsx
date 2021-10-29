


export default function Forms({children,onSubmit}){
    return(
        <form style={{
            border:"1px solid gray",
            display: "grid",
            width:"50%",
            margin: "3% auto"
        }}
        onSubmit={onSubmit}>
        {children}
    </form>
    ) 
  
}

