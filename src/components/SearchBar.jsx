import styles from "../stylesheets/SearchBar.module.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { onSearch } from "../redux/actions";




function SearchBar() {
   const [character, setCharacter] = useState("");
   const dispatch = useDispatch();
   let DarkMode = useSelector((state) => state.dark) 

   const characterID = (e) => {
      setCharacter(e.target.value);
   
   }
   const handleSearch  = (e) => {   
      e.preventDefault()
      if (character.length === 0 || character === " " ) { 
         return 
      } else { 
         dispatch(onSearch(character.trim()))
         setCharacter("")
      }
      
      
   }
   
   const handleEnter  = (e) => { 
      if (e.key === "Enter") {
          handleSearch(e)
      }
   }

   return (
      <div className={styles.containerBar}>
         <input  name="Enter" onKeyPress={(e) => handleEnter(e)} value={character} className={DarkMode ? styles.SearchBar : styles.SearchBarDark} onChange={characterID} type='text' />
         <button type="submit" className={DarkMode ? styles.buttonADD : styles.buttonADDDark} onClick={(e) => handleSearch(e)}>Agregar</button>
      </div>
   );
}



export default SearchBar;