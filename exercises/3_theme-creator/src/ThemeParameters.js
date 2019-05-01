import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'

class ThemeParameters extends Component {

   setColor = (event) => {
      console.log("Hex", event.target.value)
      this.props.dispatch({ type: "colorChange", color: event.target.value })
   }
   setFont = (event) => {
      this.props.dispatch({ type: "setFont", font: event.target.value })
   }
   setItalic = () => {
      this.props.dispatch({ type: "setItalic" })
   }
   setBold = () => {
      this.props.dispatch({ type: "setBold" })
   }
   setText = () => {
      this.props.dispatch({ type: "setText" })
   }
   setBigger = () => {
      this.props.dispatch({ type: "setBigger" })
   }
   setSmaller = () => {
      this.props.dispatch({ type: "setSmaller" })
   }

   render = () => {
      return (
         <div>
            <div> Pick your color
               <input onChange={this.setColor} type="color" value={this.props.userStyleProp.backgroundColor} />
            </div>
            <div>Pick your font</div>
            <div>
               <input type="radio" name="fontgroup" value="Arial" onChange={this.setFont} /> Arial
               <input type="radio" name="fontgroup" value="Times" onChange={this.setFont} /> Times new roman
            </div>
            <div>
               <input type="checkbox" onChange={this.setItalic} /> Italicize
            </div>
            <div>
               <input type="checkbox" onChange={this.setBold} /> Bolden
            </div>
            <button onClick={this.setText}> Randomize! </button>
            <div>
               <button onClick={this.setSmaller}> Smaller! </button>
               <button onClick={this.setBigger}> Bigger! </button>
            </div>
         </div>
      );
   }
}

let mapStateToProps = state => {
   return {
      userStyleProp: state.userStyle
   }
}

let ConnectedThemeParameters = connect(mapStateToProps)(ThemeParameters)

export default ConnectedThemeParameters;
