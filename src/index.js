import React from 'react';
import ReactDOM from 'react-dom'

import { Navbar } from './components'

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));