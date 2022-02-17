import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodosPage';

const App: React.FC = () => {
  return (
    <><BrowserRouter>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/Typescript_TodoList" element={<AboutPage/>}/>
          <Route element={<TodosPage/>} path="/todo"/>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;