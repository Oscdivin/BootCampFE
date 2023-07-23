import styled from "styled-components"
import Card from "../../components/res/Card"
import pin from "../../assets/pexels-aleksandar-pasaric-1415794.jpg"
import  money from "../../assets/pexels-anna-nekrashevich-6802045.jpg"
import you from "../../assets/pexels-david-mcbee-730547.jpg"
import cover from "../../assets/pexels-jens-mahnke-1105754.jpg"
import div from "../../assets/Invoice-1536x864 (2).jpg"
import cil from "../../assets/product-icon-01-v2.png"
import pi from "../../assets/40c3cbf27b9a6a3a9e46efa6e0e014be196664eac3decc985feef3608d5cb8d1.png"
const CardPrope=()=>{
          return(
                    <div>
                           <Box>
                              <Main>
                                        <Card txt="Reconcile payments automatically" txt2="Lorem ipsum dolor sit amet consectetur. Mattis nunc sit arcu vulputate facilisi. Egestas dui porttitor senectus amet ac non viverra aliquam. Adipiscing nunc aliquet aliquet sodale."pio={pi} poc={pin}/>
                                        <Card txt="Move money faster" txt2="Moving money faster refers to the process of transferring funds from one account to another in a shorter amount of time. This can be done through various methods such as electronic transfers, mobile payment apps, or instant payment systems." poc={money} pio={you}/>
                                        {/* <Card poc={cover}/> */}
                                        <Card poc={div} txt2="Lorem ipsum dolor sit amet consectetur. Mattis nunc sit arcu vulputate facilisi. Egestas dui porttitor senectus amet ac non viverra aliquam. Adipiscing nunc aliquet aliquet sodale."pio={cil}/>
                                        </Main>
                                        </Box>   
                    </div>
          )
}

export default CardPrope
const Box=styled.div`
width: 100%;
min-height: 130vh;
background-color:#F7F9FC;
justify-content: center;
align-items: center;
display: flex;
`
const Main=styled.div`
width: 90%;
min-height: 110vh;
justify-content: center;
display: flex;
align-items: center;
/* background-color: blue;   */
/* flex-direction: column; */
flex-wrap: wrap;


`