import React from 'react';
import PropTypes from 'prop-types';

import ToggleItem from './ToggleItem';
import logo from '../../assets/logo.svg';

function Toggle({ isActive }) {
  const navItems = [
    { title: 'Features' },
    { title: 'Pricing' },
    { title: 'Resources' },
    { title: '', isLine: true },
    { title: 'Login' },
    { title: 'Sign Up', isButton: true },
  ];
  const navElements = navItems.map((item) => (
    <ToggleItem
      key={item.title}
      title={item.title}
      isLine={!item.isLine}
      isButton={item.isButton}
    />
  ));

  return (
    <div>
      <div className="hidden lg:block">
        <ul className="flex pr-16 pl-16 justify-center items-center mt-3 xl:mr-20 xl:ml-10">
          <li>
            <img src={logo} alt="shortly" className="p-2 mr-5 xl:ml-11" />
          </li>
          {navElements}
        </ul>
      </div>
      {isActive && (
      <div className="rounded-xl bg-purple-base w-3/4 m-auto text-white text-center p-5">
        <ul>
          {navElements}
        </ul>
      </div>
      )}
    </div>
  );
}

Toggle.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Toggle;
