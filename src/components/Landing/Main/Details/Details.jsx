import React from 'react';

import InfoCard from './InfoCard';

function Details() {
  const infoData = [
    { icon: 'recognition', title: 'Brand Recognition', desc: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.' },
    { icon: 'records', title: 'Detailed Records', desc: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.' },
    { icon: 'customizeable', title: 'Fully Customizable', desc: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.' },
  ];

  // eslint-disable-next-line max-len
  const infoCards = infoData.map((info) => <InfoCard key={info.icon} icon={info.icon} title={info.title} desc={info.desc} />);
  return (
    <article className="m-auto text-center">
      <h2 className="text-custom-black font-bold text-2xl mt-20">Advanced Statistics</h2>
      <p className="mt-4 m-auto w-5/6">
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>
      {infoCards}
    </article>
  );
}

export default Details;
