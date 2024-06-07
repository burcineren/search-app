import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './app.scss'
import Home from './views/home';
import AddNewPage from './views/add-record-page';

function App() {

  return (
    <>
     <BrowserRouter>
    <div>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/add-new" element = {<AddNewPage/>}/>

      </Routes>
    </div>
  </BrowserRouter>
    </>
  )
}

export default App
