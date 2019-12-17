import React, { useEffect, useState } from 'react';
import { connect } from 'redux-bundler-react';
import { getNavHelper } from 'internal-nav-helper';
import * as THREE from 'three';
import './labs.scss';
import CustomLabel from './CustomLabel';
import Balmer from './balmer';
import personalData from './personalData';
import RSA from './rsa';
import { Converter } from './converter';
import { encrypt } from './encrypt';
import { auth } from './auth';

const Labs = ({ route, pathname, doUpdateUrl }) => {
  const [currentPage, setCurrentPage] = useState('balmer');
  const headerNavItems = [
    {
      key: 'balmer',
      label: <CustomLabel text="Пик Балмера" className="labs-link" />
    },
    {
      key: 'personal-data',
      label: <CustomLabel text="Ваши данные" className="labs-link" />
    },
    {
      key: 'encrypt',
      label: <CustomLabel text="Шифрование" className="labs-link" />
    },
    {
      key: 'rsa',
      label: <CustomLabel text="RSA-шифрование" className="labs-link" />
    },
    {
      key: 'convert',
      label: <CustomLabel text="Конвертер валют" className="labs-link" />
    },
    {
      key: 'auth',
      label: <CustomLabel text="Авторизация" className="labs-link" />
    }
  ];

  useEffect(() => {
    //scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000);
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
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
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
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'balmer':
        return Balmer;
      case 'personal-data':
        return personalData;
      case 'rsa':
        return RSA;
      case 'convert':
        return Converter;
      case 'encrypt':
        return encrypt;
      case 'auth':
        return auth;
      default:
        return Balmer;
    }
  };

  const Page = renderPage();
  return (
    <div className="labs">
      <h2 className="glitch" data-text="Лабараторные">
        Лабараторные
      </h2>
      <div className="content">
        <div className="side-navigator">
          {headerNavItems.map(item => (
            <div
              onClick={() => setCurrentPage(item.key)}
              key={item.key}
              className={
                item.key === currentPage
                  ? 'active nav-item'
                  : 'disabled nav-item'
              }
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="lab-container">
          <Page />
        </div>
      </div>
      <div id="qube" />
    </div>
  );
};

export default connect('selectRoute', 'selectPathname', 'doUpdateUrl', Labs);
