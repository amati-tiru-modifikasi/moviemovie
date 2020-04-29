import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  background-color: var(--color-primary-dark);
  border: 1px solid var(--color-primary);
  border-radius: 4rem;
  font-size: 1.3rem;
  font-weight: 300;
  width: 30rem;
  color: var(--text-color);
  padding: 1.3rem 2rem;
  box-shadow: 0 4px 8px var(--shadow-color);
  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: var(--text-color);
  }
`;

const SearchBar = () => {
  const [input, setInput] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();
    console.log("puasa");
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        onChange={e => setInput(e.target.value)}
        value={input}
        placeholder="Pencarian..."
      />
    </form>
  );
};

export default SearchBar;
