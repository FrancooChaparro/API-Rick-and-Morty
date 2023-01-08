import Card from './Card';
import styles from "../stylesheets/Cards.module.css"
import {useSelector} from "react-redux"
import { useState } from 'react';
// import { Paginate } from './Paginate';



export default function Cards() {
   let DarkMode = useSelector((state) => state.dark) 
    const pages = 4
    let personajes = useSelector((state) => state.characters)
    // let [items, setitems] = useState(personajes.splice(0, pages))
    const [current, setCurrent] = useState(0)
    const [pagina, setPagina] = useState(1)
    console.log(personajes.length, "EL ESTADO");
    // const pages = 10
    // if (personajes.length == 8 ) { 
    //   reset()
    // }

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
       <div className={styles.ContainerAll}>

         <div className={styles.containerImg}>
                  {        
           personajes.length > 0 && personajes.map((e, index) => {
             return (
               <div key={index}>
                  <Card pagina={pagina} personajes={personajes} prev={prev} name={e.name} species={e.species} gender={e.gender} image={e.image} id={e.id} />
                </div>
              )
            }).splice(current, pages)
          }
         </div>
         
           <div className={styles.containerPag}>
              <button className={ DarkMode ? styles.buttonPag : styles.buttonPagDark} disabled={true}> {personajes.length} </button>
              <button className={ DarkMode ? styles.buttonPag : styles.buttonPagDark} onClick={()=> reset()}  disabled={pagina === 1}>PAGE 1</button>
              <button className={ DarkMode ? styles.buttonPag : styles.buttonPagDark} onClick={()=> prev()}  disabled={pagina === 1}>PREV</button>
              <button className={ DarkMode ? styles.buttonPag : styles.buttonPagDark} disabled={true}>{pagina}</button>                           
              <button className={ DarkMode ? styles.buttonPag : styles.buttonPagDark} onClick={() => next()} disabled={pagina == Math.ceil(personajes.length / 4) || personajes.length === 0 }>NEXT</button>          
            </div>

            
          </div>

    )

}



