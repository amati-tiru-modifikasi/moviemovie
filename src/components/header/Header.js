import React, { Component } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const Wrapper = styled.div`
  display: flex;
  padding: 1rem 2rem;
  height: 6rem;
  align-items: center;
  color: var(--color-primary-dark);
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin-right: auto;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Judul</Title>
        <SearchBar />
      </Wrapper>
    );
  }
}

export default Header;
