import React, { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();
    console.log("puasa");
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input onChange={e => setInput(e.target.value)} value={input} />
    </form>
  );
};

export default SearchBar;
