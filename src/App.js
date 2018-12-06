import React, { Component } from 'react';
import './App.css';
import List from './Components/list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List 
        type="card"
        loadmore={true}
        dshow={false}
        start={3}
        amount={3}
        />
      </div>
    );
  }
}

export default App;
