import axios from "axios"

const url = "http://localhost:2233/api/v1/auth"


export const registeruser = async (data:any)=>{
          try {
                    return await
                    axios.post(`${url}/register`,data).then((res)=>{
                              return res.data.data
                    })
          } catch (error) {
                    console.log(error)
          }
}

export const signinuser = async (data:any)=>{
          try {
                    return await
                    
axios.post(`${url}/sign-in`,data).then((res)=>{
                              return 
res.data.data
                    })
          } catch (error) {
                    console.log(error)
          }
}

export const getone = async (data:any)=>{
          try {
                    return await
                    
axios.post(`${url}/user-info`,data).then((res)=>{
                              return 
res.data.data
                    })
          } catch (error) {
                    console.log(error)
          }
}