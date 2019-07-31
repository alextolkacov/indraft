import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Kitchen from './components/Content/Kitchen/Kitchen'
import Wardrobe from './components/Content/Wardrobe/Wardrobe'
import Office from './components/Content/Office/Office'
import Other from './components/Content/Other/Other'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Menu />
        <div className='app-wrapper-content'>
          <Route path='/kitchen' component={Kitchen} />
          <Route path='/wardrobe' component={Wardrobe} />
          <Route path='/office' component={Office} />
          <Route path='/other' component={Other} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
