import styled from "styled-components" 
import imag from "../../assets/123.jpg"
import Button from "../../components/res/Button"
import Try from "./Try"
const PayCash =()=>{
          return(
                    <div>
           <Div>
                    <Main>
                              <Cover>
                                        
                              <Text>
                                    Mortgage products that
                              </Text>
                              <Text>
                                     move money
                              </Text>
                              </Cover>
                              <Small>
                                                                          A mortgage is a loan that is used to purchase a property, typically a house. It is a legal agreement between a borrower and a lender, where the borrower receives a certain amount of money to buy the property and agrees
                              </Small>
                              <Git>
                                    <Button cg="#4F46E5" col="#fff" bag="#4F46E5" 
 pad="15px 20px" icons="" text="Get Started" bgl="#fff"/>
                              </Git>
                    </Main>
           </Div>
           <Try/>
                    </div>
                    
          )
}
export default PayCash

const Cover =styled.div`
width: 70%;
height: 38%;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
`
const Div =styled.div`
          justify-content: center;
          display: flex;
          align-items: center;
          width: 100%;
          height: 100vh;
background:url(${imag});
background-image: cover cover center center;
background-repeat: no-repeat;
background-size: cover;
`
const Main = styled.div`
width: 100%;
height: 100vh;
justify-content: center;
display: flex;
align-items: center;
/* background-color: rgba(6, 0, 54, 0.856); */
   background-color:rgba(0, 5, 49, 0.897) ;
flex-direction: column;
`
const Text = styled.div`
width: 100%;
height: 15vh;
justify-content: center;
display: flex;
align-items: center;
font-size: 80px;
font-weight: 700;
color: #ffffffff;
text-align: center;
`
const Small = styled.div`
width: 87%;
height: 10vh;
justify-content: center;
display: flex;
align-items: center;
font-size: 20px;
font-weight: 400;
text-align: center;
color: #ffffffff;
`
const Git = styled.div`
width: 15%;
height: 10vh;
justify-content: center;
display: flex;
align-items: center;
`
