import React, { Component } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const Wrapper = styled.div`
    display:flex;
    padding 1rem 2rem;
    height: 6rem;
    background-color: #444;
    align-items: center;
    color: #fff;
`;

const Title = styled.div`
    font-size: 2rem;
    font-wight: 500
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
