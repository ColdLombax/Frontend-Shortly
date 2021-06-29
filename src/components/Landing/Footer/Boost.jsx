import React, { useContext } from 'react';

import UserContext from '../../../UserContext';
// import PropTypes from 'prop-types';

function Boost() {
  const focusStyle = useContext(UserContext);
  return (
    <section className="bg-purple-base mt-16 flex flex-col items-center bg-mobile-boost-bg bg-no-repeat bg-cover h-60 justify-center lg:p-20">
      <h2 className="text-white text-bold text-3xl font-bold lg:text-4xl">Boost your links today</h2>
      <button
        type="submit"
        className={`bg-cyan-base pr-10 pl-10 p-4 rounded-full text-xl text-white font-bold mt-5 ${focusStyle} lg:hover:bg-cyan-hover`}
      >
        Get Started
      </button>
    </section>
  );
}

Boost.propTypes = {

};

export default Boost;
