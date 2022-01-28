import './App.scss';
import Header from './Components/HeaderCom/Header';
import Main from './Components/MainCom/Main';
import Aboutme from "./Components/AboutmeCom/Aboutme";

function App() {
  return (
    <div className="App">
      <div className='containter-fluid'>
        <Header />
        <Aboutme />
        <Main />
      </div>
    </div>
  );
}

export default App;
