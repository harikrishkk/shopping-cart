import './App.css';

import Navbar from '@shared/Navbar';
import Footer from '@shared/Footer';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Users from '@pages/Users';
import About from '@pages/About';
import NoFound from '@shared/NoFound';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <div className="bg-slate-100 min-h-screen flex grow flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
