import React, { useContext } from 'react';
import UserContext from '../../../UserContext';

function Header() {
  const focusStyle = useContext(UserContext);
  return (
    <header className="text-center lg:text-left lg:md-auto">
      <h1 className="text-custom-black text-4xl mt-8 mb-5 font-bold lg:text-5xl lg:ml-20 xl:text-7xl xl:ml-40">More than just shorter links</h1>
      <p className=" m-auto w-5/6 lg:w-auto lg:m-0 lg:ml-20 lg:text-lg xl:ml-40 xl:text-2xl xl:w-7/12">
        Build your brand’s recognition and get detailed
        insights on how your links are performing.
      </p>
      <div className="flex justify-center mt-5 lg:justify-start lg:ml-20 lg:mt-10 xl:ml-40">
        <button type="button" className={`pr-10 pl-10 p-3 rounded-full bg-cyan-base text-center text-white ${focusStyle} font-bold`}>Get Started</button>
      </div>
    </header>
  );
}

export default Header;
