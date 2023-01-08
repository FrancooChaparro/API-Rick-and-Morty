import styles from "../stylesheets/Card.module.css"
import { Link } from "react-router-dom"
import { onClose } from '../redux/actions';
import { useDispatch, useSelector} from "react-redux";

export default function Card({ name, species, gender, image, id, prev, personajes, pagina }) {
   let DarkMode = useSelector((state) => state.dark) 


   const cardDet = (e) => {
      e.preventdefault();

   }

   const dispatch = useDispatch();
   
   const handleClick=()=>{
      if ((personajes.length-1) % 4 == 0 && pagina != 1) { 
         
         prev();
      }
      dispatch(onClose(id));
   }


   return (
      //  <div className={styles.containerCard}>

      <div className={DarkMode ? styles.card : styles.cardDark}>
         <div className={styles.containerButton}>
            <button className={DarkMode ? styles.button : styles.buttonDark} onClick={handleClick} >X</button>
         </div>
         <Link style={{ textDecoration: "none" }} to={"/Detail/" + id} onClick={(e) => cardDet(e)}>
            <h2>{name}</h2>
            <img src={image} alt="rick" />
            <div className={DarkMode ? styles.data : styles.dataDark}>
               <h2>{species}</h2>
               <h2>{gender}</h2>
            </div>

         </Link>
      </div>
      //   </div>
   );
}
