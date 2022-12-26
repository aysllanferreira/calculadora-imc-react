import React from 'react';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Table from './components/Table';
import Resultado from './components/Resultado';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <section className="App__calculadora">
        <Inputs />
        <Resultado />
      </section>
    </div>
  );
};

export default App;
