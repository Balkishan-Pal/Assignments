import styled from "styled-components"


const Navbar = styled.div`
${'' /* border: 1px solid gray; */}
padding:10px;
background: #2577eb;
color:white;
display:flex;
justify-content:space-between
` 




const Logo = styled.div`
width:10%;
${'' /* border:1px solid red; */}
@media all and (max-width:450px){
    display:none;
}
` 



const Contentdiv = styled.div`
display: flex;
justify-content:space-between;
width:30%;
margin-right: 4%;
@media all and (max-width:620px){
    font-size:small;
}
@media all and (max-width:450px){
    display:grid
}


${'' /* border: 1px solid red */}
` 

const A = styled.a`
text-decoration: none;
color: white;
padding-top: 20px;
font-size:larger;
font-weight:600;
` 

export {Navbar,Logo,Contentdiv,A}