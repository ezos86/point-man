import React, { FC } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Pages
import MainPage from './pages/main.page';
import About from './pages/about.page';
import NoPage from './pages/lost.page';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="" element={<MainPage />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
