import React from "react";
import  styled  from "styled-components";
interface ifooter{
          Image?:string,
          icon?:string,
          text?:string,
          text3?:string,
          text4?:string,
          text5?:string,
          text6?:string,
          text2?:string,
          ht?:string,
}

const Footer:React.FC<ifooter>=({Image,icon,text,text3,text2,text4,text5,text6,ht})=>{
          return(
                    <div>
    <Box>
          <Main>
                 <Div>{Image}</Div>   
                      <Text heig={ht}>{text}</Text> 
                      <Text heig={ht}>{text2}</Text> 
                      <Text heig={ht}>{text3}</Text> 
                      <Text heig={ht}>{text4}</Text> 
                      <Text heig={ht}>{text5}</Text> 
     <Cover>{icon}</Cover>
          </Main>
    </Box>
                    </div>
          )
}

export default Footer
const Cover=styled.div``
const Text=styled.div<{heig?:any}>`
width: 100%;
height: ${({heig})=>heig};
/* justify-content: center; */
display: flex;
align-items: center;
font-size: 15px;
/* color: #F1F2FC; */
color: #000000cc;
/* background-color: #3d3d33; */
`
const Box=styled.div`
width: 250px;
height: 250px;
justify-content: center;
display: flex;
align-items: center;
/* background-color: red; */
`
const Main=styled.div`
width: 90%;
min-height: 20px;
flex-wrap: wrap;

justify-content: center;
display: flex;
align-items: center;
flex-direction: column;
/* background-color: #000; */
`
const Div=styled.div`
width: 100%;
height: 7vh;
display: flex;
align-items: center;
font-size: 20px;
/* background-color: #fff; */
color: #000000cc;
`