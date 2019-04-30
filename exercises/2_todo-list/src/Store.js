import { createStore } from "redux"

let reducer = (state, action) => {

   if (action.type === "add-todo") {
      return { ...state, todoItems: state.todoItems.concat(action.item), addTodoInput: "" }
   }

   if (action.type === "update-input") {
      return { ...state, addTodoInput: action.input }
   }

   if (action.type === "reverse") {
      return { ...state, todoItems: state.todoItems.slice().reverse() }
   }

   return state
}

const store = createStore(
   reducer,
   { addTodoInput: "", todoItems: [] },
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store


