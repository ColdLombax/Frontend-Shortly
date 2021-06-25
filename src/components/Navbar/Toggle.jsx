import React from 'react';
import PropTypes from 'prop-types';

import ToggleItem from './ToggleItem';

// eslint-disable-next-line no-unused-vars
function Toggle({ isActive }) {
  const navItems = [
    { title: 'Features' },
    { title: 'Pricing' },
    { title: 'Resources' },
    { title: '', isLine: true },
    { title: 'Login' },
    { title: 'Sign Up', isButton: true },
  ];
  // eslint-disable-next-line max-len
  const navElements = navItems.map((item) => <ToggleItem key={item.title} title={item.title} isLine={!item.isLine} isButton={item.isButton} />);

  return (
    <div>
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
