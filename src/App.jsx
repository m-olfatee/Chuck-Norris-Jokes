import React from 'react';
import './App.css';

import MyProvider from './context/MyProvider';
import Footer from './components/Footer';
import Body from './components/Body';
const App = () => {

  return (
    <MyProvider>
      <main>
        <Body />
        <Footer />
      </main>
    </MyProvider>
  );
}

export default App;

