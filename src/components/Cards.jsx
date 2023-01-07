import Card from './Card';
import styles from "../stylesheets/Cards.module.css"
import {useSelector} from "react-redux"
import { useState } from 'react';


export default function Cards() {
   let DarkMode = useSelector((state) => state.dark) 
    const pages = 4
    let personajes = useSelector((state) => state.characters)
    // let [items, setitems] = useState(personajes.splice(0, pages))
    const [current, setCurrent] = useState(0)
    const [pagina, setPagina] = useState(1)
    // const pages = 10
    function reset  ()  { 
      setPagina(1);
      setCurrent(0);
    }



    function prev  () { 
      setCurrent(current-4)
      setPagina(pagina-1)
    }


    function next  () { 
      setCurrent(current+4)
      setPagina(pagina+1)
    }


    // personajes.splice(((pagina*4)),1).length == 0
    return (
         <div className={styles.containerImg}>
                 {
         
         personajes.length > 0 && personajes.map((e, index) => {
              return (
                <div key={index}>
                  <Card name={e.name} species={e.species} gender={e.gender} image={e.image} id={e.id} />
                </div>
              )
            }).splice(current, pages)
          }
         
          <div className={styles.containerPag}>
              <button className={ DarkMode ? styles.buttonPag : styles.buttonPagDark} onClick={()=> reset()}  disabled={pagina === 1}>PAGINA 1</button>
              <button className={ DarkMode ? styles.buttonPag : styles.buttonPagDark} onClick={()=> prev()}  disabled={pagina === 1}>PREV PAGE</button>
              <span>{pagina}</span>                           
              <button className={ DarkMode ? styles.buttonPag : styles.buttonPagDark} onClick={() => next()} disabled={pagina == Math.ceil(personajes.length / 4) || personajes.length === 0 }>NEXT PAGE</button>
             
          </div>

         </div>
    )

}



