import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import styles from './navigation.module.css';
import utilStyles from '../styles/utils.module.css';

export default (props) => {
  return (
    <Menu isOpen>
      <img
        src="/images/profile.jpg"
        className={`${styles.navigationImage} ${utilStyles.borderCircle}`}
        alt="Picture of me"
      />
      <p className={`${styles.navigationLocation}`}>Bournemouth, Dorset</p>
      <hr className="solid" />
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/burgers">
        Burgers
      </a>

      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>

      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};
