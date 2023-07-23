import styled from "styled-components"
import Card2 from "../../components/res/Card2"

const HowWork=()=>{
          return(
                    <div>
                      <Box>
                              <Main>
                                        <Cover>
                                                  How it works

                                        </Cover>
                                        <Text>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.


                                        </Text>
                              </Main>
                              <Main2>
                                        {/* <Card2 name={pic}/> */}
                                        <Card2/>
                                        <Card2/>
                                        <Card2/>
                              </Main2>
                              </Box>        
                    </div>
          )
}
export default  HowWork

const Cover =styled.div`
width: 30%;
height: 10vh;
justify-content: center;
display: flex;
align-items: center;
color: #0B081D;
font-size: 50px;
font-weight: 500;
/* background-color: red; */
`
const Text =styled.div`
width: 60%;
height: 10vh;
justify-content: center;
display: flex;
align-items: center;
text-align: center;
font-size: 18px;
font-weight: 400;
/* background-color: red; */
`
const Box =styled.div`
width: 100%;
height: 70vh;
justify-content: center;
display: flex;
align-items: center;
/* background-color: red; */
flex-direction: column;
`
const Main =styled.div`
width: 90%;
height: 20vh;
justify-content: center;
display: flex;
align-items: center;
/* background-color: blue; */
flex-direction:column;
`
const Main2 =styled.div`
width: 90%;
height: 30vh;
justify-content: space-between;
display: flex;
align-items: center;
/* background-color: #000; */

`