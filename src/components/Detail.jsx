import React, {useEffect}from 'react';
import { Link, useParams } from "react-router-dom";
import styles from "../stylesheets/Detail.module.css";
import { useSelector } from 'react-redux';


export default function Detail ( )  {
  const [cruiseDetail, setCruiseDetail] = React.useState({});
  const { id } = useParams();
  let DarkMode = useSelector((state) => state.dark) 

useEffect(() => {
 

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setCruiseDetail(data);
    })
    .catch((error) => console.log(error));
    return () => setCruiseDetail({});
  }
  , []);


  return (
    <div className={ DarkMode ? styles.ContainerDetails : styles.ContainerDetailsDark}>
      <div className={styles.Details}>
    <div className={styles.ContainerButton}>
      <Link to="/Home">
      <button>Volver atras</button>
      </Link>
    </div>
    <div className={styles.ContainerInfo}>
      
      <h1>ID : {cruiseDetail.id}</h1>
      <h1>Name : {cruiseDetail.name}</h1>
      <h1>Status : {cruiseDetail.status}</h1>
      <h1>Species : {cruiseDetail.species}</h1>
      <h1>Gender : {cruiseDetail.gender}</h1>
    </div>
    <div className={styles.ContainerImage}>
      <img src={cruiseDetail.image} alt="" />
    </div>
      </div>
    </div>
  )
}
