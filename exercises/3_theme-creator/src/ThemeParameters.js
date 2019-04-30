import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'

class ThemeParameters extends Component {
   constructor(props) {
      super(props)
      this.color = this.color.bind(this)
      this.arial = this.arial.bind(this)
      this.timesNewRoman = this.timesNewRoman.bind(this)
      this.italic = this.italic.bind(this)
   }

   color(event) {
      console.log(event.target)
      this.props.dispatch({ type: "colorChange", color: event.target.value })
   }
   arial = () => { }
   timesNewRoman = () => { }
   italic(evt) { }

   render = () => {
      return (
         <div>
            <div> Pick your color
               <input onChange={this.color} type="color" value={this.props.userStyleProp.backgroundColor} />
            </div>
            <div>Pick your font</div>
            <div>
               <input type="radio" name="fontgroup" value="arial" onChange={this.arial} /> Arial
               <input type="radio" name="fontgroup" value="times new roman" onChange={this.timesNewRoman} /> Times new roman
            </div>
            <div>
               <input type="checkbox" onChange={this.italic} /> italic
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
