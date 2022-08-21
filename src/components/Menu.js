import React, { useState } from 'react';
import './menu.css';
import downIcon from '../images/icon-arrow-down.svg';
import upIcon from '../images/icon-arrow-up.svg';
import logo from '../images/logo.svg';
import items from './Items';

function Menu() {
  const { features, company } = items;
  const [icon, setIcon] = useState({ first: downIcon, second: downIcon });
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);

  const [openMenu, setOpenMenu] = useState(false);

  const handleDropDown = e => {
    if (e === 'first') {
      open1
        ? setIcon({ ...icon, first: upIcon })
        : setIcon({ ...icon, first: downIcon });
      setOpen1(!open1);
    }

    if (e === 'second') {
      open2
        ? setIcon({ ...icon, second: upIcon })
        : setIcon({ ...icon, second: downIcon });
      setOpen2(!open2);
    }
  };

  const DropDownFeatures = () => {
    if (!open1) {
      return (
        <div className="dropDown-features">
          {features.map((val, index) => (
            <div key={index} className="features">
              <img src={val.icon} />
              <a>{val.title}</a>
            </div>
          ))}
        </div>
      );
    }
  };

  const DropDownCompany = () => {
    if (!open2) {
      return (
        <div className="dropDown-company">
          {company.map((val, index) => (
            <div key={index} className="features company">
              <a>{val.title}</a>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <nav className="Navigation">
        <figure>
          <img src={logo} />
        </figure>
        <div className={`Menu-modal ${openMenu ? 'modal' : ''}`}></div>
        <div className={`Menu-items ${openMenu ? 'open' : ''}`}>
          <ul>
            <li className="Features" onClick={() => handleDropDown('first')}>
              Features <img src={icon.first} />
            </li>
            <DropDownFeatures />
            <li className="Company" onClick={() => handleDropDown('second')}>
              Company <img src={icon.second} />
            </li>
            <DropDownCompany />
            <li>Carrers</li>
            <li>About</li>
          </ul>
          <div className="Button">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
        <div
          className={`Hamburguer ${openMenu ? 'openMenu' : ''}`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div className="Menu-button"></div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
