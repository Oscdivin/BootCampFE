          import {Outlet} from "react-router-dom"
import Footer from "../Static/Footer"
import Header from "../Static/Header"
import styled from "styled-components"
// import Header from "../Static/Header"
const Layout =()=>{
          return(
                    <div>
                              {/* <Header/> */}
                              <Header/>
                    <Outlet/>
                    {/* <Footer/> */}
                                                 <Box>
                              <Main>
                                  <Footer Image="" text=""text2=" Mortgages are a common way for individuals to finance the 
purchase of a home. Is there anything specific you would like to know about mortgages?" ht="50px"/> 
                                  <Footer Image="Quick Links" text="Homepage"text2="About Us"text3="How It Works"text4="Our 
Team"text5="Use Case"ht="47px"/> 
                                  <Footer Image="Company" text="Products"text2="Pricing"text3="Disclaimer" text4="Privacy 
Policy"text5="Term Of Service"text6="" ht="47px"/> 
                                  <Footer Image="Contact Us" text="" text2="
Mortgages are a common way for individuals to finance the purchase of a home. Is there anything specific you would like to know 
about mortgages?
"ht="40px"/> 
                              </Main>
                              <Online>
                                     <Left>
                                        Online Payment Gateway & Fintech Template Kit by Tokomoo
                                        </Left>   
                                     <Right></Right>
                              </Online>
                             </Box>
                    </div>
                    
          )
}
export default Layout

const Left=styled.div`
font-size: 15px;
display: flex;
justify-content: center;
align-items: center;
/* background-color: green; */
`
const Right=styled.div`
font-size: 15px;
display: flex;
justify-content: center;
align-items: center;
`
const Box=styled.div`
width: 100%;
height: 73vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #E4F0FA;
`
const Main=styled.div`
width: 90%;
height: 69vh;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: blue; */
`
const Online=styled.div`
width: 90%;
height: 11vh;
display: flex;
justify-content: space-between;
align-items: center;
border-top: 1px solid silver;
`