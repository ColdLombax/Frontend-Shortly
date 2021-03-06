import React from 'react';

import Boost from './Boost';
import Social from './Social';
import FooterItem from './FooterItem';

function Footer() {
  return (
    <div>
      <Boost />
      <footer className="flex flex-col items-center p-10 bg-custom-black lg:flex-row lg:items-start">
        <p className="text-white text-4xl font-bold mb-10 lg:mt-10 lg:mr-16 lg:ml-20 xl:mr-auto xl:ml-20 lg:cursor-pointer lg:hover:text-cyan-base">Shortly</p>
        <ul className="text-center lg:flex lg:gap-10 lg:mt-10 xl:gap-20 xl:mr-20">
          <li>
            <h3 className="text-white text-xl mb-5">Features</h3>
            <ul className="text-center">
              <FooterItem name="Link Shortening" />
              <FooterItem name="Branded Links" />
              <FooterItem name="Analytics" />
            </ul>
          </li>
          <li>
            <h3 className="text-white text-xl mt-10 mb-5 lg:mt-0">Resources</h3>
            <ul className="text-center">
              <FooterItem name="Blog" />
              <FooterItem name="Developers" />
              <FooterItem name="Support" />
            </ul>
          </li>
          <li>
            <h3 className="text-white text-xl mt-10 mb-5 lg:mt-0">Company</h3>
            <ul className="text-center">
              <FooterItem name="About" />
              <FooterItem name="Our Team" />
              <FooterItem name="Careers" />
              <FooterItem name="Contact" />
            </ul>
          </li>
        </ul>
        <Social />
      </footer>
    </div>
  );
}

export default Footer;
