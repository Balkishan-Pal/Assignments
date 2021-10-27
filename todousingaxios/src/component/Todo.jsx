

function Todo({handlechange,handleClick,list}){
    return (
        <div>
            <input type = "text" placeholder = "Enter todo" onChange={handlechange} name="name"></input>
            <button onClick={handleClick}>Add</button>
            {
                list.map(e=><p key={e.id}>{e.name}</p>)
            }
        </div>
    )
}

export {Todo}
