import React, { useState } from 'react'
import styles from "../stylesheets/Form.module.css";
import { useSelector } from 'react-redux';


export const Inicio = ( {login }) => {
  let DarkMode = JSON.parse(localStorage.getItem("darkmode"))  


    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const  validation = (userData) => {
        const errors = {}
          if(!regexEmail.test(userData.username)) errors.username = "Debe ser un email"
          if(!userData.username) errors.username = "Debe contener un email"
          if(userData.username.length > 35)errors.username = "usuario muy largo"
        else if(userData.password.length < 1) errors.password = "debe tener mas de 6 digitos"
    
    
      return errors
    }
    const [userData, setUserData] = useState({
        username: "", 
        password: ""
    })

    const [errors, setErrors] = useState({
        username: "", 
        password: ""
    })

    const handleSubmit = (e) => { 
        e.preventDefault()
        login(userData)
       
    }

    const handleInputChange = (e) => { 
        setErrors(validation({...userData, [e.target.name] : e.target.value}))
        setUserData({...userData, [e.target.name] : e.target.value})
    }

    return (
        <div className={styles.Container}>
<div> 
</div>
        <div className={ DarkMode ? styles.ContainerForm : styles.ContainerFormDark}>

    <div className={styles.center}>
      <form onSubmit={handleSubmit}>
      <div className={styles.user}>
        <label name='username'>Username:</label><br />
        <input type="text" name='username'  className={errors.name && styles.warning} value={userData.username} onChange={(e) => handleInputChange(e)}/><br />
        <p  className={styles.danger}>{errors.name && errors.name}</p>
        </div>
      <div className={styles.pass}>
        <label name='password'>Password:</label><br />
        <input type="password" name='password' className={errors.password && styles.warning}   value={userData.password}  onChange={(e) => handleInputChange(e)}/><br />
        <p className={styles.danger}>{errors.password && errors.password}</p>
        </div>
        <button type='submit' >LOGIN</button>
     </form>     
    </div>
        </div>
         </div>
    )
}


