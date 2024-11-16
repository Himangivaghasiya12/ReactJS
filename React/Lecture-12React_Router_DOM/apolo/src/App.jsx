import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Shop from './pages/Shop'
import ContactUs from './pages/ContactUs'
import Error404 from './pages/Error404'
import NewProduct from './pages/NewProduct'
import OldProduct from './pages/OldProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { createBrowserRouter , RouterProvider, Route } from 'react-router-dom'


// const route = createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>
//   },
//   {
//     path:"/aboutus",
//     element:<AboutUs/>
//   },
//   {
//     path:"/contactus",
//     element:<ContactUs/>
//   },
//   {
//     path:'/shop',
//     element:<Shop/>
//   },
//   {
//     path:'*',
//     element:<Error404/>
//   }
// ])

/* React Router DOM */

function App() {

  return (
    <>
    {/* <RouterProvider router={route}></RouterProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/shop" element={<Shop/>}>
            <Route path='newproduct' element={<NewProduct/>}></Route>
            <Route path='oldproduct' element={<OldProduct/>}></Route>
          </Route>
          <Route path="/contactus" element={<ContactUs/>}></Route>
          <Route path="/*" element={<Error404/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
