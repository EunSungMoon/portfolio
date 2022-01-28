import './App.scss';
import Header from './Components/HeaderCom/Header';
import Main from './Components/MainCom/Main';


function App() {
  return (
    <div className="App">
      <div className='containter-fluid'>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
