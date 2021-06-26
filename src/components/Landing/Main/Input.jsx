import React, { useState } from 'react';

function Input() {
  const [userInput, setUserInput] = useState('');
  const [isValidInput, setIsValidInput] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setIsValidInput(false);

    // Input Validation
    const expression = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
    const regex = new RegExp(expression);
    if (userInput.match(regex)) {
      // Call API
    } else {
      setIsValidInput(true);
    }
    setUserInput('');
  };

  return (
    <form className="bg-purple-base flex flex-col p-6 pl-10 pr-10 rounded-xl bg-mobile-shorten-bg bg-no-repeat bg-right-top relative bottom-10">
      <input
        type="url"
        id="url-input"
        name="url-input"
        placeholder="Shorten a link here..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className={`rounded-md p-3 text-custom-black ${isValidInput ? 'border-2 border-red-500' : ''}`}
      />
      {isValidInput && <i className="text-red-400 mt-1 text-sm">Please add a link</i>}
      <button
        type="submit"
        onClick={submitHandler}
        className="bg-cyan-base p-3 rounded-md text-white font-bold mt-3"
      >
        Shorten It!
      </button>
    </form>
  );
}

export default Input;
