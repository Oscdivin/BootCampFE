import styled from "styled-components" 
import pic from  "../../assets/feature-1.png"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form" 
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import { signinuser } from "../../Utils/AuthApi"
import { createUser } from "../../Global/GlobalState"
// import Sigin from './Sigin';
// import Button from '../components/res/Button';
const Sigin=()=>{
       const navigate =useNavigate()
       const user = useSelector((state:any)=>state.user)
       const dispatch =useDispatch()
       const model = yup.object({
              myemail:yup.string().required(),
              mypassword:yup.string().required(),
       })
       const{
              register, reset,handleSubmit, formState:{errors}
       }=useForm({
              resolver:yupResolver(model)
       })
       const onHandleSumbit= handleSubmit((data)=>{
              const {myemail, mypassword} =data
              signinuser(
                     {
                             email:myemail,
 password:mypassword,
                     }
              ).then((res)=>{
                     dispatch(createUser(res))
                     console.log(user)
              navigate("/PayCash")
              })
              reset()
       })
          return(
                    <div>
                       <Box onSubmit={onHandleSumbit}>
<Image src={pic}/>
<Cover>
       <Hloder>
<Input placeholder="Eenter your Email" {...register("myemail")}/>
       {errors.mypassword&&<Error>your Email</Error>}
</Hloder>

<Hloder>
<Input placeholder="Eenter your Password" type="password" {...register("mypassword")}/>
       {errors.mypassword&&<Error>your password</Error>}
</Hloder>
</Cover>
<Button type="submit">
Sigin    
</Button>
</Box>    
                    </div>
          )
}
const Cover = styled.div`
width: 90%;
height: 30vh;
display: flex;
flex-direction: column;
align-items: center;
`
const Error = styled.div`
width: 80%;
display: flex;
border: none;
align-items: center; 
justify-content: flex-end;
color: red;
`
export default Sigin
const Box = styled.form`
width: 400px;
min-height: 70px;
justify-content: center;
display: flex;
align-items: center;
background-color: #fff;
flex-direction: column;
border-radius: 5px;
`
const Button = styled.button`
padding: 13px 30px;
color: #fff;
justify-content: center;
display: flex;
align-items: center;
background-color:  rgba(0, 5, 49, 0.897);
outline: none;
border-radius: 5px;
border: 1px solid #fff;
margin: 15px;
`
const Hloder = styled.form`
width: 85%;
height: 58px;
justify-content: center;
align-items: center;
display: flex;
margin: 10px;
border: none;
border-bottom: 1px solid rgba(0, 5, 49, 0.897);
`
const Image = styled.img`
width: 30%;
height: 30%;
justify-content: center;
align-items: center;
display: flex;
`
const  Input=styled.input`
width: 100%;
height: 40px;
outline: none;
border: none;
color: red;
margin: 10px;
padding: 9px;
`

