import React, { Component } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const Wrapper = styled.div`
  display: flex;
  padding: 1rem 2rem;
  height: 6rem;
  padding: 1rem;
  align-items: center;
  color: var(--color-primary);
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  margin-right: auto;
  letter-spacing: -0.5px;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Title>TERKENAL</Title>
        <SearchBar />
      </Wrapper>
    );
  }
}

export default Header;
