import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import '../index';
export default props => {
  return (
    <Menu>
      <a className='menu-item' href="/">Class C</a>

      <a className="menu-item" href="/funct">
        Functional C
      </a>

      <a className="menu-item" href="/pure">
        Pure
      </a>


    </Menu>
  );
};