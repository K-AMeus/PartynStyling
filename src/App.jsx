import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Signup from './Signup.jsx';
import Events from './Events.jsx';
import './index.css';

function App() {
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = (event) => {
    event.preventDefault();
    setShowSignup(true);
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Header onLoginClick={handleLoginClick} />
      <div className="flex-grow">
        {showSignup ? <Signup /> : <Events />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
