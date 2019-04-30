import React, { Component } from 'react';
import './App.css';
import ConnectedPreview from './Preview.js'
import ThemeParameters from './ThemeParameters.js'


class App extends Component {
   render = () => {
      return (
         <div style={{ display: "flex" }}>
            <ConnectedPreview />
            <ThemeParameters />
         </div>
      );
   }
}

export default App;
