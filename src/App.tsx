import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodosPage';

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<AboutPage/>}/>
          <Route element={<TodosPage/>} path="/about"/>
        </Routes>
      </div>
    </>
  );
}

export default App;