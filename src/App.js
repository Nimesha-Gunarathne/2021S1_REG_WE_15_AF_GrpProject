import './App.css';
import React, {useState} from 'react';

//importing components
import PaymentForm from './components/PaymentForm';

function App() {
  return (
    <div className="App">
      <div className="header-payment">
        <PaymentForm/>
      </div>
    </div>
  );
}

export default App;
