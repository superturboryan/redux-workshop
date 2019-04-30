import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'


class DisplayTodos extends Component {

   render = () => {

      return (this.props.todoItems.map(item => {
         return <div>{item}</div>
      }))
   }
}

let mapStateToProps = st => {
   return {
      todoItems: st.todoItems,
      todoInput: st.addTodoInput
   }
}

let connectedTodos = connect(mapStateToProps)(DisplayTodos)

export default connectedTodos;
