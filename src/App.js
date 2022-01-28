import './App.scss';
import Header from './Components/HeaderCom/Header';
import Main from './Components/MainCom/Main';
import Aboutme from "./Components/AboutmeCom/Aboutme";
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='containter-fluid'>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Aboutme />}/>
          <Route path='/' element={<Main />}/>
        </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
