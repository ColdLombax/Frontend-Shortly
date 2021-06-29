import React, { useState } from 'react';

import Input from './Input';
import LinkCard from './LinkCard';
import Details from './Details/Details';

function Main() {
  const [linkList, setLinkList] = useState([]);

  const cards = linkList.map((link) => (
    <LinkCard
      key={link.short}
      short={link.short}
      long={link.long}
    />
  ));

  return (
    <main>
      <div className="flex justify-center mt-20">
        <Input setLinkList={setLinkList} />
      </div>
      <section id="cards">
        {cards}
      </section>
      <Details />
    </main>
  );
}

export default Main;
