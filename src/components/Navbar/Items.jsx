import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/logo.svg';
import hamburger from '../../assets/icon-hamburger.svg';
import UserContext from '../../UserContext';

function Items({ setIsActive }) {
  const menuClickHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  const focusStyle = useContext(UserContext);

  return (
    <div className="flex p-3">
      <button type="button" className={`${focusStyle} mr-auto`}>
        <img src={logo} alt="shortly" className="p-2 lg:hidden" />
      </button>
      <button type="button" onClick={menuClickHandler} className={focusStyle}>
        <img src={hamburger} alt="hamburger" className="p-2 lg:hidden" />
      </button>
    </div>
  );
}

Items.propTypes = {
  setIsActive: PropTypes.func.isRequired,
};

export default Items;
