import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./AppContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { toggle, handleToggle } = useContext(AppContext);

  return (
    <Wrapper>
      {toggle ? (
        <Link onClick={handleToggle} to="/">
          <NameDiv>Joe Biden</NameDiv>
        </Link>
      ) : (
        <Link onClick={handleToggle} to="/biden">
          <NameDiv>Hilari Clinton</NameDiv>
        </Link>
      )}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.2rem;
  background-color: #b8b5ff;
`;

const NameDiv = styled.button`
  height: 5rem;
  width: 15rem;
  border: none;
  background-color: #867ae9;
  font-size: 2rem;
  color: #21094e;
  &:hover {
    transition: transform 0.7s ease-in-out;
    transform: translate(3rem);
    background-color: #786dd0;
  }
  transition: transform 0.7s ease-in-out;
  transform: rotate(150);
  @media screen and (max-width: 600px) {
    &:hover {
      transition: none;
      transform: none;
    }
  }
`;
