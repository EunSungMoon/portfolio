import './App.scss';
import React from 'react';
import Header from './Components/HeaderCom/Header';
import Main from './Components/MainCom/Main';
import Footer from './Components/FooterCom/Footer';
import EmptyPage from './Pages/EmptyPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='containter-fluid'>
          <Switch>
            <Route exact path='/'>
              <Header />
              <Main />
              <Footer />
            </Route>
            <Route path='*'>
              <EmptyPage />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
