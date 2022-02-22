import './App.css';

import Navbar from '@shared/Navbar';
import Footer from '@shared/Footer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import NoFound from '@shared/NoFound';
import AuthWrapper from '@shared/AuthWrapper';

const Users = React.lazy(() => import('@pages/Users'));
const About = React.lazy(() => import('@pages/About'));

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <div className="bg-slate-100 min-h-screen flex grow flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="users"
              element={
                <React.Suspense fallback={<h1>Loading Page..</h1>}>
                  <Users />
                </React.Suspense>
              }
            />
            <Route
              path="about"
              element={
                <React.Suspense fallback={<h1>Loading Page..</h1>}>
                  <About />
                </React.Suspense>
              }
            />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
