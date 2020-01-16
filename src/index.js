import React from 'react';
import ReactDOM from 'react-dom'

import Navbar from './components/Navbar'

import './styles/reset.scss'
import './styles/layouts.scss'

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));