import React from 'react'
import style from "../stylesheets/Home.module.css";
import Cards from './Cards.jsx';
import { useSelector } from "react-redux"
import Nav from "./Nav";
import styles from "../stylesheets/Cards.module.css"

export default function Home() {
  const personajes = useSelector((state) => state.characters)

  return (
    <>
      <Nav />
      <div className={style.containerAll_Cards}>
      <Cards />
      </div> 
    </>
  )
}
