import { createStore } from "redux"

let reducer = (state, action) => {

   if (action.type === "colorChange") {

      return {
         ...state, userStyle: {
            height: "100vh",
            width: "50vh",
            padding: "30px",
            fontStyle: "normal",
            backgroundColor: action.color
         }
      }
   }


   return state
}

const store = createStore(
   reducer,
   {
      userStyle: {
         height: "100vh",
         width: "50vh",
         padding: "30px",
         fontStyle: "normal",
         backgroundColor: "grey"
      }
   },
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store


