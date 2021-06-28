import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../../../UserContext';

function LinkCard({ short, long }) {
  const [isCopied, setIsCopied] = useState(false);
  const focusStyle = useContext(UserContext);

  const copyHandler = () => {
    setIsCopied(true);
    const temp = document.createElement('textarea');
    temp.value = short;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  // Paragraph Styling
  const linkOverflowStyle = 'pb-2 pt-2 overflow-ellipsis overflow-hidden whitespace-nowrap';
  return (
    <div className="m-auto w-5/6 mb-5 bg-white rounded-md text-custom-black p-4">
      <p className={`${linkOverflowStyle}`}>{long}</p>
      <hr />
      <p className={`${linkOverflowStyle} text-cyan-base`}>{short}</p>
      <button
        type="button"
        onClick={copyHandler}
        className={` ${isCopied ? 'bg-purple-base' : 'bg-cyan-base'} w-full rounded-md text-white p-2 font-bold ${focusStyle}`}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
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
