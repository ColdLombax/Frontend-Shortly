import React, { useContext } from 'react';
import UserContext from '../../../UserContext';

function Header() {
  const focusStyle = useContext(UserContext);
  return (
    <header>
      <h1 className="text-custom-black text-4xl text-center mt-8 mb-5">More than just shorter links</h1>
      <p className="text-center m-auto w-5/6">
        Build your brand’s recognition and get detailed
        insights on how your links are performing.
      </p>
      <div className="flex justify-center mt-5">
        <button type="button" className={`pr-10 pl-10 p-3 rounded-full bg-cyan-base text-center text-white ${focusStyle}`}>Get Started</button>
      </div>
    </header>
  );
}

export default Header;
