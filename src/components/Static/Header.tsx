import React, { useState } from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";
import Button from "../res/Button";
import {RiArrowDropDownLine} from "react-icons/ri"

const Header=()=>{
      const [hover,setHover] =useState(false)
      const [scroll,setScroll]=React.useState< boolean>(false)
      const onHover = ()=>{
            
      setHover(!hover)
      };  
      console.log(hover)
      const onScroll=()=>{
            if(window.scrollY>70){
                   setScroll(true)
            }else{setScroll(false)}
      }
      window.addEventListener("scroll",onScroll)
          return(
                    <div>
                        {
                       scroll?       (
                                             <Box bcc="transparent"> 
                 
                    <Main>
                        
                              <Logo to="/PayCash">
                                        Logo
                              </Logo>
                                        <Holder>
                     <Routes to="/PayCash">Home</Routes>    
                                                             <Routes to="/Products"
                     onMouseEnter={()=>{
   onHover()
}} 
onMouseLeave={()=>{
   onHover()
}}>Products
{hover ?   <Icons/>:
<Icons/>}{""}
{/* <Cover></Cover> */}
                   </Routes>         
                                       <Routes to="/How it Workes">How it 
orks</Routes>      
                     <Routes to="/Pages"   onMouseEnter={()=>{
     onHover()
  }}
  onMouseLeave={()=>{
     onHover()
  }}>Pages{hover ?   <Icons/>:
                     
<Icons/>}{""}

{/* <Cover></Cover> */}
                                                  
                     </Routes>      
                     <Routes to="/Contact">Contact</Routes>      
                                        </Holder>
                                                  <Get to="/Get">
                                                <Button pad="10px 19px" text="Get Start" icons="" col="#fff" bag="#4F46E5"bgl="#fff"    cg="#4F46E5"   />                           
                                                </Get>
                    </Main>
              </Box>     
                              ):(
                                                                              <Box bcc="#16113B">
                 
                    <Main>
                              <Logo to="/PayCash">
                                        Logo
                              </Logo>
                                        <Holder>
                     <Routes to="/PayCash">Home</Routes>      
                                         <Routes to="/Products"
                      onMouseEnter={()=>{
    onHover()
 }} 
 onMouseLeave={()=>{
    onHover()
 }}>Products
 {hover ?   <Icons/>:
 <Icons/>}{""}
 {/* <Cover></Cover> */}
                    </Routes>      
                    <Routes to="/How it Workes">How it 
orks</Routes>      
                     <Routes to="/Pages"   onMouseEnter={()=>{
     onHover()
  }}
  onMouseLeave={()=>{
     onHover()
  }}>Pages{hover ?   <Icons/>:
                     
<Icons/>}{""}

{/* <Cover></Cover> */}
                                                  
                     </Routes>      
                     <Routes to="/Contact">Contact</Routes>      
                                        </Holder>
                                                  <Get to="/Get">
                                                <Button pad="10px 19px" 
text="Get Start" icons="" col="#fff" bag="#4F46E5"bgl="#fff"    
cg="#4F46E5"   />                           
                                                 </Get>
                    </Main>
              </Box>        
                              )
                        }
                    </div>
          )
}

export default Header 

const Cover= styled.div`
      width: 150px;
      height: 260px;
      border-radius: 5px;
      background-color: red;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top:74px;
`
const Box = styled.div<{bcc:string}>`
width: 100%;
height: 10vh;

/* background-color: #16113B; */
/* background: transparent; */
background-color: ${(props)=>props.bcc};
border-bottom: 1px solid #392e81;
justify-content: center;
align-items: center;
display: flex;
position: fixed;
`
const Main = styled.div`
width: 90%;
height: 10vh;
justify-content: space-between;
align-items: center;
display: flex;
`
const Icons = styled(RiArrowDropDownLine)`
font-size: 30px;
justify-content: center;
display: flex;
align-items: center;
`
const Holder = styled.div`
width: 53%;
height: 10vh;
justify-content: center;
align-items: center;
display: flex;
`
const Routes = styled(Link)`
justify-content: center;
display: flex;
align-items: center;
border-radius: 5px;
text-decoration: none;
/* flex-direction: column; */
color: #ffffffff;
padding: 7px 10px;
margin: 0px 15px;
:hover{
          background-color: #302B50;
          cursor: pointer;
}
`
const Get = styled(Link)`
width: 16%;
height: 10vh;
align-items: center;
display: flex;
text-decoration: none;
justify-content: center;
/* background-color: red; */
`
const Logo = styled(Link)`
text-decoration: none;
color: #ffffffff;
`