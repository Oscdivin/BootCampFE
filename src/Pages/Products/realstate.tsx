import styled  from "styled-components" 
import pix from "../../assets/pexels-expect-best-323780.jpg"
const RealState=()=>{
          return(
                    <div>
                          <Box>
                              <Main>
                                        <Holder>
                                                  <Left>
                                                  Help every phase of your business growth
                                                            </Left>  
<Right>
           A mortgage is a type of loan that is used to finance the purchase of a property, such as a house or a piece of land. When you take out a mortgage, the lender (usually a bank or a financial institution) provides you with the funds to buy the property, and you agree to repay the loan over a set period of time, typically with interest. The property itself serves

  
</Right>
                                        </Holder>
                                      <Image src={pix}/>
                              </Main>
                              </Box>    
                    </div>
          )
}

export default RealState
const Box=styled.div`
width: 100%;
height: 100vh;
background-color: #F4F6FB;
justify-content: center;
display: flex;
align-items: center;

`
const Holder=styled.div`
width: 90%;
height: 35vh;
justify-content: space-between;
display: flex;
align-items: center;
/* background-color:black; */
`
const Left=styled.div`
width: 58%;
height: 30vh;
display: flex;
justify-content: center;
align-items: center;
/* background-color: red; */
font-size: 60px;
font-weight: 300px;
color: #151036;
`
const Right=styled.div`
width:45%;
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
/* background-color: red; */
font-size: 15px;
font-weight: 200px;
color: #333;
`
const Main=styled.div`
width: 90%;
height: 90vh;
/* background-color: blue; */
justify-content: center;
display: flex;
align-items: center;
flex-direction: column;
`
const Image=styled.img`
          width: 90%;
          height:68vh;
          justify-content: center;
          align-items: center;
          display: flex;
          object-fit: cover;
          border-radius: 5px;
`


