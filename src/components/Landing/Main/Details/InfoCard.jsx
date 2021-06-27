import React from 'react';
import PropTypes from 'prop-types';

function InfoCard({ icon, title, desc }) {
  return (
    <section className="mt-10 m-auto w-5/6">
      <p className="">{icon}</p>
      <p>{title}</p>
      <p>{desc}</p>
    </section>
  );
}

InfoCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default InfoCard;
