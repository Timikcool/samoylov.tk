import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Typed from 'react-typed';
import { connect } from 'redux-bundler-react';
import { getNavHelper } from 'internal-nav-helper';
import * as THREE from 'three';
import './home.scss';
import toolsArr from './tools.json';

const shuffleArray = arr => {
  let array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Home = ({ doUpdateUrl }) => {
  ReactGA.pageview('/home');
  useEffect(() => {
    //scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight - 35 - 40);
    const target = document.querySelector('#qube');
    target && target.appendChild(renderer.domElement);

    // cube
    const geometry = new THREE.IcosahedronGeometry(1);
    const material = new THREE.MeshBasicMaterial({ color: 0x000 });
    material.wireframe = true;
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  });

  return (
    <div className="home">
      <h1>Timur Samoylov</h1>
      <div className="clay-container">
        <h2 className="glitch" data-text="developer you deserve">
          developer you deserve
        </h2>
      </div>
      <div className="main-text">
        <div>
          <p>
            Hi! You can call me Tim. I'm front-end developer with backend and{' '}
            <span className="blockchain color-switch">blockchain</span>{' '}
            experience
          </p>
          <div className="color-switch">
            <p>
              basically, I know nothing about design that's why this website
              looks so <span>awfaul</span>
            </p>
          </div>
        </div>
        <div>
          <p>
            {'Anyway, I do know something about '}
            <Typed
              strings={shuffleArray(toolsArr)}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </p>
          <p>
            Worked on fintech apps, social networks, PWAs, games, Electron apps.
          </p>
        </div>
        <div>
          <p>
            I have also participated as{' '}
            <span className="color-switch">{'dApp '}</span>
            developer in various projects on Ethereum, EOS and other not so well
            known platforms.
          </p>
          <p onClick={getNavHelper(doUpdateUrl)}>
            Won a couple blockchain and fintech hackathons. More info about it
            at{' '}
            <a className="color-switch" href={'/trophies'}>
              trophy room
            </a>
          </p>
        </div>
        {/* <div>
        <p>
          Cybersecurity is one of my passions. Thx to
          <a className="mr-robot" href="https://www.whoismrrobot.com/" target="_blank">
            <span>MR.ROBOT</span>
          </a>
          . So I know some weird words like pentesting, XSS, sqlmap, PCI DSS,
          OWASP...
        </p>
      </div> */}
        <div>
          <p>
            I love coding and making{' '}
            <a className="color-switch" href={'/crypto'}>
              pet-projects
            </a>{' '}
            for myself, but besides that I can: launch a startup and fail, play
            videogames on pro level, pitch idea or just speak in front of any
            amount of people, play guitar, whistle, watch SpaceX rocket launch
            or Netflix all night long and more!
          </p>
        </div>
        <div>
          <p>
            This website is a playground. I try different stuff here just for
            fun. So it might not to work correctly from time to time. Please,
            checkout other pages, make sure you've found all easter eggs and
            have fun. See ya!
          </p>
        </div>
      </div>
      <div id="qube" />
    </div>
  );
};
export default connect(
  'selectRoute',
  'selectPathname',
  'doUpdateUrl',
  Home
);
