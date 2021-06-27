import React, { useState } from 'react';

import Input from './Input';
import LinkCard from './LinkCard';
import Details from './Details/Details';

function Main() {
  const [linkList] = useState([
    { short: 'https://rel.ink/k4lKyk', long: 'https://twitter.com/frontendmentor' },
    { short: 'https://rel.ink/gob3X9', long: 'https://www.linkedin.com/compan…' },
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
      <Details />
    </main>
  );
}

export default Main;
