import React from 'react';

import Navbar from './layouts/Navbar';

// ROUTER
import Router from './router/Router';

const App = () => {
  return (
    <>
      <Navbar />
      <div className={"right-side"}>
        <Router />
      </div>
    </>
  );
}

export default App;
