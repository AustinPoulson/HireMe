import React from 'react';

import profilePicture from './assets/profilePicture.png';
import './App.css';
import EtherMedia from './assets/EtherMediaIcon.svg';
import Github from './assets/github.svg';
import StackOverflow from './assets/stackoverflow.svg';
import LinkedIn from './assets/linkedin.svg';
import {isMobile} from './utils/dimensions';

export default function App() {
  return (
    <div className="App">
      <AboutMe />
      <div className={'linkSection ' + (isMobile() ? 'linkSectionMobile' : '')}>
        <Link icon={Github} link={'https://github.com/AustinPoulson'} />
        <Link
          icon={StackOverflow}
          link={'https://stackoverflow.com/users/12817213/austin-poulson'}
        />
        <Link
          icon={LinkedIn}
          link={'https://www.linkedin.com/in/austinpoulson/'}
        />
        <Link icon={EtherMedia} link={'https://ethermedia.app/'} />
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div
      className={
        'aboutContainer container ' + (isMobile() ? 'aboutMobile' : '')
      }
    >
      <div className="aboutLeftSection">
        <div
          className={
            'profilePictureSection ' + (isMobile() ? 'pictureMobile' : '')
          }
        >
          <img className="profilePicture" src={profilePicture} />
        </div>
      </div>
      <div className="infoSection">
        <h1 className="text">Austin Poulson</h1>
        <h2 className="text">
          Mobile Development | Web Development | Scripting
        </h2>
        <h3 className="text">
          Hi! I'm Austin Poulson, a developer based in Plymouth, Minnesota. I
          specialize in web and mobile app development with React Native. I'm
          currently working on a photo sales platform called EtherMedia. Please
          take a moment to review my work through the links below.
        </h3>
      </div>
    </div>
  );
}

function Link({icon, link}) {
  return (
    <a className="linkContainer container" href={link}>
      <img className="icon" src={icon} />
    </a>
  );
}
