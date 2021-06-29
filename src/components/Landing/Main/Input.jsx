import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import UserContext from '../../../UserContext';

function Input({ setLinkList }) {
  const HTTP = 'https://api.shrtco.de/v2/shorten?url=';
  const focusStyle = useContext(UserContext);
  const [userInput, setUserInput] = useState('');
  const [isValidInput, setIsValidInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setIsValidInput(false);

    // Input Validation
    const expression = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
    const regex = new RegExp(expression);
    if (userInput.match(regex)) {
      setIsLoading(true);
      fetch(`${HTTP}${userInput}`)
        .then((response) => response.json())
        .then((data) => {
          setLinkList((prevList) => [
            ...prevList,
            { short: data.result.short_link, long: userInput },
          ]);
          setIsLoading(false);
        });
    } else {
      setIsValidInput(true);
    }
    setUserInput('');
  };

  return (
    <form
      className="bg-purple-base flex flex-col p-6 pl-10 pr-10 rounded-xl bg-mobile-shorten-bg bg-no-repeat bg-right-top relative bottom-10
      lg:bg-desktop-shorten-bg lg:w-10/12 lg:flex-row lg:gap-5 lg:p-10 lg:relative lg:items-center"
    >
      <input
        type="url"
        id="url-input"
        name="url-input"
        placeholder="Shorten a link here..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className={`rounded-md p-3 text-custom-black ${focusStyle} ${isValidInput ? 'border-2 border-red-500' : ''} lg:w-10/12`}
      />
      {isValidInput && <i className="text-red-400 mt-1 text-sm lg:absolute lg:bottom-4">Please add a link</i>}
      <button
        type="submit"
        onClick={submitHandler}
        className={`bg-cyan-base p-3 rounded-md text-white font-bold mt-3 ${focusStyle} lg:w-2/12 lg:mt-0`}
      >
        Shorten It!
      </button>
      {isLoading && <p className="text-white text-2xl text-center mt-5 lg:mt-0">Requesting...</p>}
    </form>
  );
}

Input.propTypes = {
  setLinkList: PropTypes.func.isRequired,
};

export default Input;
