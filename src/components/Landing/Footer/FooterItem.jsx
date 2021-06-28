/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

function FooterItem({ name }) {
  return (
    <li className="mb-3 font-bold">
      <a href="#">{name}</a>
    </li>
  );
}

FooterItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FooterItem;
