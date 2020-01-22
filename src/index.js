import React from 'react';
import ReactDOM from 'react-dom';

import { Navbar, Footer } from './components';

import './styles/layouts.scss';
import './styles/typography.scss';
import './styles/reset.scss';
import './styles/animations.scss';



function App() {
  return (
    <div className="App">
      <div id="bg"></div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));