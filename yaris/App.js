import React, { Component } from 'react';

import Aux from './hoc/Aux/Aux';
import Car from './components/Car/Car';
import "react-responsive-carousel/lib/styles/carousel.css";

class App extends Component {
  render() {
    return (
      <Aux>
        <Car />
      </Aux>
    );
  }
}

export default App;
