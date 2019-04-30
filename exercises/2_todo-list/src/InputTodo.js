import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'

class InputTodo extends Component {

   handleSubmit = (evt) => {
      evt.preventDefault()
      //Dispatch action to reducer to add item to list
      this.props.dispatch({ type: "add-todo", item: this.props.todoInput })
   }

   handleChange = (evt) => {
      //Dispatch action to reducer to update state for input
      this.props.dispatch({ type: "update-input", input: evt.target.value })
   }

   handleReverse = () => {
      this.props.dispatch({ type: "reverse" })
   }

   render = () => {
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <input onChange={this.handleChange} value={this.props.todoInput} />
               <input type="submit" />
            </form>
            <button onClick={this.handleReverse}>Reverse!</button>
         </div>
      )
   }
}

let mapStateToProps = st => {
   return {
      todoItems: st.todoItems,
      todoInput: st.addTodoInput
   }
}

let connectedInputTodo = connect(mapStateToProps)(InputTodo)

export default connectedInputTodo;
