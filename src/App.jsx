import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import SingleRepo from './pages/SingleRepo';
import ErrorBoundary from './components/ErrorBoundary';
import NotFoundPage from './pages/NotFound';

const App = () => {
  return (
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/repos/:username/:repoName" element={<SingleRepo />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </Router>
  );
};

export default App;

