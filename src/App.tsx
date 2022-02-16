import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodosPage';



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route element={<AboutPage/>} path="/"/>
          <Route element={<TodosPage/>} path="/about"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;