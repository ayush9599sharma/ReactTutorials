import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contactuss from './components/Contact/Contactuss.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element : <Layout/>,
//      children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contactuss/>
//       }
//      ]
//   }
// ])

const router =createBrowserRouter(createRoutesFromElements(
  <Route path="/" element= {<Layout/>}>
    <Route path=""  element={<Home/>}/>
    <Route path="about"  element={<About/>}/>
    <Route path="contact"  element={<Contactuss/>}/>
    <Route path='user/:user_id'  element={<User/>}/>
    <Route  path='github'  element={<Github/>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
