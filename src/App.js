import styles from "./stylesheets/AppDemo.module.css"
// import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx"
import { Inicio } from "./components/Inicio.jsx"
import Detail from './components/Detail.jsx';
import {  useSelector } from 'react-redux';
import Footer from "./components/Footer";

function App() {
  // ESTADOS
  let DarkMode = useSelector((state) => state.dark) 


 

  
  // let acceso = localStorage.getItem("acceses")
  // const [access, setAccess] = useState(acceso === "false" ? false : true)
  const navigate = useNavigate();
  // const Location = useLocation();

  // USUARIO Y CONTRASEÑA
  // const username = "francoo_chaparro@hotmail.com"
  // const password = "1234567"
  const username = "f"
  const password = "1"

  // FUNCIONES


  


  // useEffect(() => {
  //   !access && navigate('/');
  //   window.localStorage.setItem("acceses", "false")
  // }, []);

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {

      // localStorage.setItem("acceses", "true")


      // setAccess(true);
      navigate('/home');
    }
  }


  Location.pathname === "/" ? localStorage.setItem("acceses", "false") : localStorage.setItem("acceses", "true")



  return (
    <div className={ DarkMode ? styles.App : styles.AppDark} style={{ padding: '25px' /*,  backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZOzuv5K6rWMqK5lFPv2fGXI8mB5SzNYuUPhy2CUhbg&s)"*/}}>
      <Routes>
        <Route path='/' element={<Inicio login={login}  />} />      
       <Route path='/Detail/:id' element={<Detail  />} />
        <Route path='/Home' element={<Home  />} />
        <Route path='/About' element={<About />} />
      </Routes>
      {/* <div>
      <Footer />
      </div> */}
    </div>
  )
}

export default App
