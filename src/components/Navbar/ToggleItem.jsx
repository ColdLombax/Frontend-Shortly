import React from 'react';
import PropTypes from 'prop-types';

function ToggleItem({ title, isLine, isButton }) {
  return (
    <li>
      {isLine ? <p className={`p-4 ${isButton ? 'bg-cyan-base rounded-full' : ''}`}>{title}</p> : <div className="w-full h-px bg-custom-gray mt-3 mb-3" />}
    </li>
  );
}

ToggleItem.propTypes = {
  title: PropTypes.string.isRequired,
  isLine: PropTypes.bool,
  isButton: PropTypes.bool,
};

ToggleItem.defaultProps = {
  isLine: false,
  isButton: false,
};

export default ToggleItem;
