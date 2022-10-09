import React from 'react';
import {Outlet} from 'react-router-dom'

const App = () => {
    return (
      <div id="router-container">
        <Outlet />
      </div>
    );
}

export default App;
