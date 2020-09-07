import React from 'react';

import UniverSityBlock from '../UniversityBlock'
// We're using bulma.io for example styles
// you can use any css styling as you like
import './main.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <UniverSityBlock />
        </div>
      </section>
    </div>
  );
}

export default App;
