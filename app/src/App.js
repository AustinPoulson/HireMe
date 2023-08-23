import React from 'react';

import profilePicture from './assets/profilePicture.png';
import './App.css';
import EtherMedia from './assets/EtherMediaIcon.png';
import Github from './assets/github.svg';
import StackOverflow from './assets/stackoverflow.svg';

export default function App() {
  return (
    <div className="App">
      <AboutMe />
      <div className="linkSection">
        <Link icon={Github} link={'https://github.com/AustinPoulson'} />
        <Link
          icon={StackOverflow}
          link={'https://stackoverflow.com/users/12817213/austin-poulson'}
        />
        <Link icon={EtherMedia} link={'https://ethermedia.app/'} />
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="aboutContainer container">
      <div className="profilePictureSection">
        <img className="profilePicture" src={profilePicture} />
      </div>
      <div className="infoSection">
        <h1 className="text">Austin Poulson</h1>
        <h2 className="text">
          Mobile Development | Web Development | Scripting
        </h2>
        <h3 className="text">
          Hi! I'm Austin Poulson, a developer based in Plymouth, Minnesota.
          Thank you for visiting my profile. I'm still adding content and
          getting the design nailed down. Please check out my work at the links
          below. I hope you like what you see :)
        </h3>
      </div>
    </div>
  );
}

function Link({icon, link}) {
  return (
    <a className="linkContainer container" href={link}>
      <img src={icon} />
    </a>
  );
}
