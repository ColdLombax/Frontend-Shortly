import React from 'react';

import logo from '../../assets/logo.svg';
import hamburger from '../../assets/icon-hamburger.svg';

function Items() {
  const menuClickHandler = () => {
    // console.log('hello');
  };

  const focusStyle = 'focus:outline-none focus:ring focus:border-blue-300';

  return (
    <div className="flex p-3">
      <button type="button" className={`${focusStyle} mr-auto`}>
        <img src={logo} alt="shortly" className="p-2" />
      </button>
      <button type="button" onClick={menuClickHandler} className={focusStyle}>
        <img src={hamburger} alt="hamburger" className="p-2" />
      </button>
    </div>
  );
}

export default Items;
