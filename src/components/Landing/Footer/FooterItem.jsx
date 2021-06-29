/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import UserContext from '../../../UserContext';

function FooterItem({ name }) {
  const focusStyle = useContext(UserContext);
  return (
    <li className="mb-3 font-bold lg:font-medium lg:text-sm">
      <a href="#" className={`${focusStyle} lg:hover:text-cyan-base`}>{name}</a>
    </li>
  );
}

FooterItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FooterItem;
