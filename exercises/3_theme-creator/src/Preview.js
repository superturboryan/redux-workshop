import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'

class Preview extends Component {

   render = () => {

      return (
         <div style={this.props.userStyleProp}>
            {this.props.randomTextProp}
         </div>
      );
   }
}

let mapStateToProps = state => {
   return {
      userStyleProp: state.userStyle,
      randomTextProp: state.randomText
   }
}

let ConnectedPreview = connect(mapStateToProps)(Preview)

export default ConnectedPreview;
