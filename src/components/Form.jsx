import React from 'react';
import style from "../stylesheets/Form.module.css"

export default function Form () {

  let DarkMode = JSON.parse(localStorage.getItem("darkmode"))
  return (
    <div style={style.Foot}>
    <div className={style.FormDark}>
        <label>Username:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="text" />
        <button>LOGIN</button>
    </div>
    </div>
  )
}
