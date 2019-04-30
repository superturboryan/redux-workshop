import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'

class Preview extends Component {

   render = () => {

      return (
         <div style={this.props.userStyleProp}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin sem et ante luctus sodales. Vivamus mi eros, fringilla et felis vitae, efficitur efficitur justo. Praesent dolor mauris, ultrices vel justo ac, sagittis
         </div>
      );
   }
}

let mapStateToProps = state => {
   return {
      userStyleProp: state.userStyle
   }
}

let ConnectedPreview = connect(mapStateToProps)(Preview)

export default ConnectedPreview;
