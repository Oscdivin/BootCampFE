import  styled from "styled-components"
interface icard{
          txt?:string,
          poc?:string,
          pio?:string,
          txt2?:string,
          
}
const Card:React.FC<icard> =({txt,poc,pio,txt2})=>{
          return(
                    <div>
                        <Box>
                              <Main>
                                        <Cover>
                                             <Image src={pio}/>
  <Text>{txt}</Text>       
  <Small>{txt2}</Small>       
                                        </Cover>
                                        {/* <Div> */}
                                                  
                                        <Image2 src={poc}/>
                                        {/* </Div> */}
                              </Main>
                              </Box>      
                    </div>
          )
}
export default Card
const Cover=styled.div`
width: 50%;
height: 40vh;
/* display: flex; */
/* justify-content: center; */
/* align-items: center; */
/* background-color: #000; */
`
const Box =styled.div`
width: 1198px;
height: 410px;
justify-content: center;
display: flex;
align-items: center;
/* background-color: red; */
`
const Text =styled.div`
font-size: 35px;
font-weight: 500;
color: #0B081D;
`
const Small =styled.div`
font-size: 18px;
font-weight: 300;
color: red;
/* background-color: blue; */
color: #444;
width: 90%;
height: 15vh;
`
const Main =styled.div`
width: 100%;
height: 60vh;
justify-content: space-between;
display: flex;
align-items: center;
/* background-color: blue; */
`
const Div =styled.div``
const Image =styled.img`
width: 30%;
height: 100px;
object-fit: cover;
justify-content: center;
align-items: center;
display: flex;
border-radius: 5px;
`
const Image2=styled.img`
width: 100%;
height: 55vh;
border-radius: 10px;
object-fit: cover;
justify-content: center;
display: flex;
align-items: center;
background-color: green;
`