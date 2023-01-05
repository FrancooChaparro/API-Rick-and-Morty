import axios from "axios";
// export const GET_CHARACTERS = "GET_CHARACTERS";
export const DELETE_CHARACTER = "DELETE_CHARACTER";

export function onSearch(character) { 
  if (character < 826 ) { 

    return async function(dispatch){     
      const json = await axios.get(`https://rickandmortyapi.com/api/character/${character}`);   
      return dispatch({
        type: "GET_CHARACTERS",
        payload: json.data
      });   
    }; 
  } else { 
    return ({
      type: "GET_CHARACTERS",
      payload: character
    });   
  }; 
  }
 

export const onClose = (id) => {
 
  return {
    type: DELETE_CHARACTER,
    payload: id,
  };
};


export const Oscuro = (DarkMode) => {
    console.log("actionpayload",JSON.parse(localStorage.getItem("darkmode")));
  return {
    type: "DARK_MODE",
    payload: JSON.parse(localStorage.getItem("darkmode")),
  };
};