import './css/main.scss';
import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import TopBar from './js/components/TopBar';
import NewBingo from './js/components/NewBingo';
import SavedBingo from './js/components/SavedBingo';
import CurrentGame from './js/components/CurrnetGame';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import shhhImage from './assets/shhh.png'

const App = () => {

    return (
        <HashRouter>
            <TopBar />
            <Routes>
                <Route
                    path='/'
                    element={<img src={shhhImage} alt='Shhh...' className='shhhImage' />} />
                <Route path='/new' element={<NewBingo />} />
                <Route path='/saved' element={<SavedBingo />} />
                <Route path='/game' element={<CurrentGame />} />
            </Routes>
        </HashRouter>
    )
}

export default App;
