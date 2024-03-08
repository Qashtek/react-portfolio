import { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

import './App.css'

function App() {

  const currentDate = new Date();
  const thisYear = currentDate.getUTCFullYear();


  return (
    <>
      <Header />
      <MainContent />
      <Footer date={thisYear} />
    </>
  )
}

export default App
