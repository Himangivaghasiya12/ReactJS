import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Shop from './pages/Shop'
import ContactUs from './pages/ContactUs'
import Error404 from './pages/Error404'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* React Router DOM */

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/contactus" element={<ContactUs/>}></Route>
          <Route path="/*" element={<Error404/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
