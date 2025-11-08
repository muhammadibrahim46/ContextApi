// import { useEffect, useState } from 'react'
// import './App.css'
// import { ThemeProvider } from './component/contexts/theme'
// import ThemeBtn from './component/themBtn.jsx'
// import Card from './component/card.jsx'
import React from "react";
import './App.css';
import Card from './component/card.jsx'
import ThemeBtn from './component/themBtn.jsx'
function App() {
  return (
    <div>
      <div className="justify-center items-center mt-30">
        <Card />
      </div>
      <div className=" justify-center items-center mt-30">
        <ThemeBtn />
      </div>
    </div>
  );
}

export default App;