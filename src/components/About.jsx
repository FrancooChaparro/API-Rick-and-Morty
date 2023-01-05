import React from 'react'
import Nav from './Nav'
import { useSelector } from 'react-redux';
import style from "../stylesheets/About.module.css"

export default function About ()  {
  let DarkMode = useSelector((state) => state.dark) 
  return (
    <>
    <Nav />
    <div className={ DarkMode ? style.About : style.AboutDark}>
        <h1>Franco Agustin Chaparro</h1>
        <p>Tengo 25 años, vivo en caballito CABA. Naci en bahia blanca.</p>
    </div>
    </>
  )
}
