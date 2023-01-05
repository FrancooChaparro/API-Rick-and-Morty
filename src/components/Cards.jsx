import Card from './Card';
import styles from "../stylesheets/Cards.module.css"
import {useSelector} from "react-redux"


export default function Cards() {
    const personajes = useSelector((state) => state.characters)

    return (
         <div className={styles.containerImg}>
                 {
         
         personajes.length > 0 && personajes.map((e, index) => {
              return (
                <div key={index}>
                  <Card name={e.name} species={e.species} gender={e.gender} image={e.image} id={e.id} />
                </div>
              )
            }) 
        }

         </div>
    )

}



