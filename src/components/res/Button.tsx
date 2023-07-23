import styled  from "styled-components" 
import {AiOutlineArrowRight} from "react-icons/ai"
interface ibutt{
          text?:string,
          icons?:string,
          pad?:string,
          bag?:string,
           cg?:string,
           col?:string,
           bgl?:string,
           
          
}
const Button:React.FC<ibutt>=({text,icons,pad,bag,cg,col,bgl})=>{
          return(
                    <div>
                            <Box pd={pad} bg={bag}bg2={cg} bg1={col}bg3={bgl}>
                              <Text>{text}</Text>
                              <Icons>{icons}</Icons>
                              </Box>  
                    </div>
          )
}

export default Button
const Box= styled.div<{pd?:any,bg:any,bg2:any,bg1:any,bg3:any}>`
justify-content: center;
display: flex;
align-items: center;
padding: ${({pd})=>pd};
background-color: ${({bg})=>bg};
color: ${({bg3})=>bg3};
margin: 0px 15px;
border-radius: 5px;
border: 1px solid #4F46E5;
cursor: pointer;

:hover{
        
       background-color: ${({bg1})=>bg1};
 color: ${({bg2})=>bg2};
}
`
const Text= styled.div`
justify-content: center;
display: flex;
align-items: center;
`
const Icons= styled(AiOutlineArrowRight)`
justify-content: center;
display: flex;
align-items: center;
`