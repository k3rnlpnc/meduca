import React from 'react';
import './App.css';

const StartPage = () => {
    return (
        <div>
            <Welcome />
        </div>
    );
}

const Welcome = () => {
    return (
      <div className="background">
          <div className="welcome-block">
              <h1>meduca</h1>
              <button>Войти</button>
          </div>
      </div>
    );
}

export default StartPage;
