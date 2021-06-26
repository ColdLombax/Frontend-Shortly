import React from 'react';
import PropTypes from 'prop-types';

function LinkCard({ short, long }) {
  return (
    <div className="m-auto w-3/4 bg-cyan-base">
      <p>{long}</p>
      <p>{short}</p>
      <button type="button">Copy</button>
    </div>
  );
}

LinkCard.propTypes = {
  short: PropTypes.string.isRequired,
  long: PropTypes.string.isRequired,
};

export default LinkCard;

// state(copied) when not active setIntveral(state(copy) 2 seconds)
// long link = previous user input each card has own state
// short link = api returned call
