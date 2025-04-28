import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="content">
        <h1>Добро пожаловать на наш сайт</h1>
        <p>Это пример адаптивного навбара</p>
      </main>
    </div>
  );
}

export default App; 