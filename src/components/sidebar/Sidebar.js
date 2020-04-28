import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 25rem;
  background-color: #333;
  color: #fff;
  align-items: center;
`;

class Sidebar extends Component {
  render() {
    return <Wrapper>Sidebar</Wrapper>;
  }
}

export default Sidebar;
