import React from 'react';

import facebook from '../../../assets/icon-facebook.svg';
import twitter from '../../../assets/icon-twitter.svg';
import pinterest from '../../../assets/icon-pinterest.svg';
import instagram from '../../../assets/icon-instagram.svg';

function Social() {
  return (
    <ul className="flex gap-5 mt-10 lg:ml-20 lg:mr-20">
      <li>
        <img src={facebook} alt="facebook" />
      </li>
      <li>
        <img src={twitter} alt="facebook" />
      </li>
      <li>
        <img src={pinterest} alt="facebook" />
      </li>
      <li>
        <img src={instagram} alt="facebook" />
      </li>
    </ul>
  );
}

export default Social;
