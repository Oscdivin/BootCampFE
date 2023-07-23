import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/Common/Layout"
import HomeSceen from "../Pages/HomeSceen"
import PayCash from "../Pages/Home/PayCash"
import Products from "../Pages/Products/Products"
import Howitworks from "../Pages/How it Works/How it Works"
import Pages from "../Pages/Page/Pages"
import Contact from "../Pages/Contact/Contact"
import Get from "../Pages/Get/Getstarted"
// import Getstarted from "../Pages/Get/Getstarted"

export const mainRoutes = createBrowserRouter([{
     
          path:"/",
          element:<Layout/>,
          children:[{
                    path:"/",
                    index:true,
                    element: <HomeSceen/>,
                    
          },
          {
               path:"/PayCash"   ,
               index:true,  
               element:<PayCash/>
          },
          {
                    path:"/Products",
                    index:true,
                    element:<Products/>,
          },
          {
                    path:"/How it Workes",
                    index:true,
                    element:<Howitworks/>,
          },
          {
                    path:"/Pages",
                    index:true,
                    element:<Pages/>,
          },
          {
                    path:"/Contact",
                    element:<Contact/>,
                    index:true,
          },
          {
               path:"/Get",
               element:<Get/>,
               index:true,
          }
          ]
          
},
{
     
}
])