import { DELETE_CHARACTER } from "./actions";

let locc = JSON.parse(localStorage.getItem("Personajes"))
let darkGet = JSON.parse(localStorage.getItem("darkmode"))

const initialState = {
  characters: locc?.length > 0 ? locc : [], 
  detail: {},
  dark : JSON.parse(localStorage.getItem("darkmode")) === false ? false : true 
};


window.localStorage.setItem("Personajes", JSON.stringify(initialState.characters))

const valid = (state, action) => {
  if (action.name) { 
    console.log(state);
      let actiontype = action;
      let ids = state.map(e => e.id)
      if (!ids.includes(parseInt(actiontype.id)) || ids.length == 0) {
        return [...state, action]
      }
      else {
        alert("Ese personaje ya existe")
        return [...state]
      }
  }
  
  else { 
    alert("No existe personaje con ese id");
    return [...state]
  }
}





const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case "GET_CHARACTERS":
      console.log(state.characters);
      window.localStorage.removeItem("personajes")
      window.localStorage.setItem("Personajes", JSON.stringify(state.characters))
     
      return {
        ...state,
        characters: valid(state.characters, action.payload),
        log : console.log("log", state.characters)
      }; 
        
    case DELETE_CHARACTER:
      localStorage.removeItem('Personajes')
      window.localStorage.setItem("Personajes", JSON.stringify(state.characters))
      return {
        ...state,
        characters: state.characters.filter(
          (char) => char.id !== action.payload
        ),
      };

      case "DARK_MODE": 
      return { 
        ...state, 
        dark : JSON.parse(localStorage.getItem("darkmode"))
      }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;