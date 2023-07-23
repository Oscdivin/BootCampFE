import styled from "styled-components"
interface icard2{
          name?:string,
          text?:string,
          
}
const Card2 :React.FC<icard2>=({name,text})=>{
          return(
                    <div>
                              <Box>
                                        <Main src={name}/>
                                        <Text>{text}</Text>
                              </Box>
                    </div>
          )
}
export default Card2

const  Box =styled.div`
width: 200px;
height: 200px;
background-color: red;
justify-content: center;
display: flex;
align-items: center;
flex-direction: column;
`
const  Main =styled.img`
width: 50%;
height: 10vh;
background-color:#fff;
justify-content: center;
display: flex;
align-items: center;
flex-direction: column;
`
const  Text =styled.div`
font-size: 20px;
color: #0B081D;
`