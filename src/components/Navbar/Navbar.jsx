import React, { useState } from 'react';
import Items from './Items';
import Toggle from './Toggle';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <Items setIsActive={setIsActive} />
      <Toggle isActive={isActive} />
    </div>
  );
}

export default Navbar;
