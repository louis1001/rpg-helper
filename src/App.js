import React from 'react';
import {Route, Routes, HashRouter} from 'react-router-dom'

import Main from './pages/main';
const App = () => {
    return (
      <HashRouter>
        <div id="router-container">
          <Routes>
              <Route path="/" element={<Main/>} />
          </Routes>
        </div>
      </HashRouter>
    );
}

export default App;
