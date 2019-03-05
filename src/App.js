import React, { Component } from 'react';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import counter from './store/counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store={counter} />
        <Navbar data={counter} />
      </div>
    );
  }
}

export default App;
