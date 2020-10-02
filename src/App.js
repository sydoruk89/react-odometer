import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Odometer from './Odometer'

export default function App() {

  return (
    <>
      <Header user="Bill" />
      <Odometer count='0'/>
      <Footer trademark="&trade;" />
    </>
  );
}