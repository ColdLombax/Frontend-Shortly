import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import { UserProvider } from './UserContext';

function App() {
  return (
    <div id="base" className="bg-white">
      <UserProvider value="focus:outline-none focus:ring-4">
        <Navbar />
        <Landing />
      </UserProvider>
    </div>
  );
}

export default App;
