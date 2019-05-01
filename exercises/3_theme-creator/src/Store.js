import { createStore } from "redux"

let reducer = (state, action) => {

   if (action.type === "colorChange") {
      return {
         ...state, userStyle: { ...state.userStyle, backgroundColor: action.color }
      }
   }

   if (action.type === "setFont") {
      return {
         ...state, userStyle: { ...state.userStyle, fontFamily: action.font }
      }
   }

   if (action.type === "setItalic") {
      return {
         ...state, userStyle: {
            ...state.userStyle,
            fontStyle: state.userStyle.fontStyle === "normal" ? "italic" : "normal"
         }
      }
   }

   if (action.type === "setBold") {
      return {
         ...state, userStyle: {
            ...state.userStyle,
            fontWeight: state.userStyle.fontWeight === "normal" ? "bold" : "normal"
         }
      }
   }

   if (action.type === "setText") {
      return {
         ...state, randomText: randomText(500)
      }
   }

   if (action.type === "setSmaller") {

      let digits = /\d/g
      let currentSize = state.userStyle.fontSize.match(digits).join("")

      return {
         ...state, userStyle: {
            ...state.userStyle,
            fontSize: (currentSize - 1) + "px"
         }
      }
   }

   if (action.type === "setBigger") {

      let digits = /\d/g
      let currentSize = state.userStyle.fontSize.match(digits).join("")

      return {
         ...state, userStyle: {
            ...state.userStyle,
            fontSize: (Number(currentSize) + 1) + "px"
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
         fontWeight: "normal",
         backgroundColor: "#C0C0C0",
         fontFamily: "Arial",
         fontSize: "16px"
      },
      randomText: randomText(500),
   },
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function randomText(length) {
   var result = '';
   var characters = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Zabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

export default store


