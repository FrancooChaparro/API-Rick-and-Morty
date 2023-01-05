import React from 'react'
import SearchBar from './SearchBar'
import style from "../stylesheets/Nav.module.css"
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onSearch, Oscuro } from "../redux/actions";

export default function Nav(props) {
  let DarkMode = useSelector((state) => state.dark) 
  console.log("state", DarkMode);
  const dispatch = useDispatch();
  const Location = useLocation()
  
  const dark = (e) => { 
    e.preventDefault();
    // DarkMode = !DarkMode
    if ( "localstorage", JSON.parse(localStorage.getItem("darkmode")) == false) {
      window.localStorage.setItem("darkmode", "true")
      console.log(JSON.parse(localStorage.getItem("darkmode")));
      return  dispatch(Oscuro(DarkMode))
    }
    if ( "localstorage", JSON.parse(localStorage.getItem("darkmode")) == true) {
      window.localStorage.setItem("darkmode", "false")
      console.log(JSON.parse(localStorage.getItem("darkmode")));
      return  dispatch(Oscuro(JSON.parse(localStorage.getItem("darkmode"))))
    }

  }
  
  const azar = (e) => {
    e.preventDefault();
    dispatch(onSearch(Math.ceil(Math.random() * 826)))
  }

  // const classN = (lo ,DarkMode) => { 
  //   lo = Location.pathname
  //   if(Location.pathname === "/About" && DarkMode == false){ 
  //     style.NavAbout} else { 
  //        style.NavAboutDark 
  //   }if (Location.pathname === "/Home" && DarkMode == false){ 
  //     style.Nav} else { 
  //       style.NavDark
  //   }
  // }

  return (
    <div className={style.containerAll_Nav}>
      

 <div className={(Location.pathname !== "/About" && DarkMode) ? style.Nav : style.NavDark}> 


  {/* // ||         (Location.pathname === "/Home" && DarkMode == true) ? style.Nav : style.NavDark}>  */}


          <button className={ DarkMode ? style.buttonNav : style.buttonNavDark} onClick={(e)=> dark(e)} >DarkMode</button>
        <NavLink to="/Home">
          <button className={ DarkMode ? style.buttonNav : style.buttonNavDark}>Home</button>
        </NavLink>
        <NavLink to="/About">
          <button className={ DarkMode ? style.buttonNav : style.buttonNavDark}>About</button>
        </NavLink>
        <button className={ DarkMode ? style.buttonNav : style.buttonNavDark} onClick={(e) => azar(e)}>Azar</button>
        {!(Location.pathname === "/About") && <SearchBar />}
      </div>
    </div>
  )
}

