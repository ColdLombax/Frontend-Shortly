/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import recognition from '../../../../assets/icon-brand-recognition.svg';
import records from '../../../../assets/icon-detailed-records.svg';
import customizeable from '../../../../assets/icon-fully-customizable.svg';

function InfoCard({ icon, title, desc }) {
  let iconPick = recognition;
  let topAdjustment = 'lg:top-0';
  switch (icon) {
    case 'records':
      iconPick = records;
      topAdjustment = 'lg:top-10';
      break;
    case 'customizeable':
      iconPick = customizeable;
      topAdjustment = 'lg:top-20';
      break;
    default:
      iconPick = recognition;
      break;
  }
  return (
    <section className={`mt-20 m-auto w-5/6 bg-white rounded-md p-8 relative lg:text-left lg:w-10/12 ${topAdjustment}`}>
      <div className="w-full flex justify-center absolute -top-10 -left-0">
        <img src={iconPick} alt={title} className="bg-purple-base p-5 rounded-full" />
      </div>
      <p className="text-custom-black font-bold text-xl mt-5">{title}</p>
      <p className="text-sm mt-5">{desc}</p>
    </section>
  );
}

InfoCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default InfoCard;
