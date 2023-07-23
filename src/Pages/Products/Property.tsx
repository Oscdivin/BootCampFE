import styled from "styled-components"

const  Propert=()=>{
          return(
                    <div>
                      <Box>
                              <Main>
                                        <Text>
                                                  Our products

                                        </Text>
                                        <Span>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.


                                        </Span>
                              </Main>
                              </Box>      
                    </div>
          )
}
export default Propert
const Box=styled.div`
width: 100%;
height: 30vh;
/* background-color: red; */
justify-content: center;
display: flex;
align-items: center;

`
const Main=styled.div`
width: 90%;
height: 20vh;
/* background-color: #fff; */
justify-content: center;
display: flex;
align-items: center;
flex-direction: column;
`
const Text=styled.div`
width: 40%;
height: 10vh;
/* background-color: #333; */
justify-content: center;
display: flex;
font-size: 60px;
font-weight: 500;
color: #16113B;
align-items: center;
`

const Span=styled.div`
width: 50%;
height: 10vh;
/* background-color: #333; */
justify-content: center;
text-align: center;
display: flex;
align-items: center;
color: #34343;
`