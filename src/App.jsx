import React from 'react';
import Header from './components/Header.jsx';
import SideMenu from './components/SideMenu.jsx';
import SideContent from './components/SideContent.jsx';
import MobileContent from './components/SmallerScreens/MobileContent.jsx';
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <div className="content">
        <SideContent />
        <SideMenu />
        <MobileContent />
      </div>
    </>
  )
}
