import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/HeaderCom/Header';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='containter-fluid'>
        <Header />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
