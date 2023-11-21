import React from 'react';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <section className='landing-area'>
        <h1>CHARLES HALS</h1>
        <h2>Data engineering, process automation, software engineering
        </h2>
      </section>
      <section className='expertise-area'>
        <div className="expertise-container">
          <div className="expertise-title">Data Engineering</div>
          <div className="expertise-description">Description Data Engineering</div>
        </div>
      </section>
      <section className="project-area">
        <div className="project-container">
          PROJECT 1
        </div>
        <div className="project-container">
          PROJECT 2
        </div>
        <div className="project-container">
          PROJECT 3
        </div>
      </section>
      <section className="experience-area">
        <div className="experience-container">
          Experience 1
        </div>
      </section>
    </div>
  );
};

export default App;