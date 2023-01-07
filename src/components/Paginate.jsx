// import React from 'react';
// import styles from "../stylesheets/Cards.module.css"
// import {useSelector} from "react-redux"
// import { useState } from 'react';

// export const Paginate = ({prev, next, reset, pagina}) => {
//     let DarkMode = useSelector((state) => state.dark) 
//     return (
//         <div  className={styles.containerPag}>
//             <button className={DarkMode ? styles.buttonPag : styles.buttonPagDark} onClick={() => reset()} disabled={pagina === 1}>PAGINA 1</button>
//             <button className={DarkMode ? styles.buttonPag : styles.buttonPagDark} onClick={() => prev()} disabled={pagina === 1}>PREV PAGE</button>
//             <span>{pagina}</span>
//             <button className={DarkMode ? styles.buttonPag : styles.buttonPagDark} onClick={() => next()} disabled={pagina == Math.ceil(personajes.length / 4) || personajes.length === 0}>NEXT PAGE</button>
//         </div>
//     )
// }
