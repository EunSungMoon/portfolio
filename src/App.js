import './App.scss';
import React from 'react';
import Header from './Components/HeaderCom/Header';
import Main from './Components/MainCom/Main';
import Footer from './Components/FooterCom/Footer';

function App() {
  return (
    <div className="App">
      <div className='containter-fluid'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
