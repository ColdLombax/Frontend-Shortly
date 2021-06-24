import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
function Toggle({ isActive }) {
  return (
    <div>
      {isActive && (
      <div className="rounded-xl bg-indigo-900 w-3/4 m-auto text-white text-center p-5">
        <ul>
          <li>
            {/* MOVE THIS ITEM INTO IT'S OWN COMPONENT */}
          </li>
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
