import React, { useState } from 'react';

import Input from './Input';
import LinkCard from './LinkCard';

function Main() {
  const [linkList] = useState([
    { short: 'short link', long: 'long link' },
    { short: 'test link', long: 'long link' },
  ]);

  const cards = linkList.map((link) => <LinkCard short={link.short} long={link.long} />);

  return (
    <main>
      <div className="flex justify-center mt-20">
        <Input />
      </div>
      <section id="cards">
        {cards}
      </section>
    </main>
  );
}

export default Main;
