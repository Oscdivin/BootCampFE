import styled from "styled-components" 
// import imag from "../../assets/pexels-walid-ahmad-1372014.jpg"
import imag from "../../assets/pexels-expect-best-323780.jpg"
import RealState from "./realstate"
import Propert from "./Property"
import CardPrope from "./CardPrope"
import HowWork from "./How work"
const Products=()=>{
          return(
                    <div>
                      <Div>
                             <Main>
                              <Box>
                                  Our products      
                              </Box>
                              <Text>
                                                                The property itself serves as collateral for the loan, meaning that if the borrower fails to make the required payments, the lender can take possession of the property. Mortgages are a common way for individuals to finance the purchase of a home
                              </Text>
                              </Main> 
                              </Div>    
                              <RealState/>  
                          <Propert/>
                          <CardPrope/>
                          <HowWork/>
                    </div>
          )
}
export default Products
const Div=styled.div`
width: 100%;
height: 100vh;
justify-content: center;
display: flex;
align-items: center;
/* background-image:url(${imag}); */
background-color: #130F33;
/* background-size: cover; */
/* background-position: center center; */
/* background-repeat: no-repeat; */
/*  */
`
const Main=styled.div`
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
   /* background-color:rgba(0, 5, 49, 0.801) ; */
`
const Box=styled.div`
width: 50%;
height: 19vh;
/* background-color: red; */
justify-content: center;
display: flex;
align-items: center;
/* text-align: center; */
font-size: 90px;
font-weight: 500;
color: #ffff;
`

const Text=styled.div`
width: 60%;
height: 15vh;
/* background-color: red; */
justify-content: center;
display: flex;
align-items: center;
text-align: center;
font-size: 18px;
font-weight: 300;
color: #ffff;
`
// const Div =styled.div``