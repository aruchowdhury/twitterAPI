import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./AppContext";
import { Link } from "react-router-dom";

const Header = () => {
  //Receiving states using react context
  const { toggle, handleToggle } = useContext(AppContext);

  //Using toggle state and handleToggle function to switch screens/components
  return (
    <Wrapper>
      {toggle ? (
        <Link onClick={handleToggle} to="/">
          <NameDiv>Joe Biden's Tweets</NameDiv>
        </Link>
      ) : (
        <Link onClick={handleToggle} to="/biden">
          <NameDiv>Hilari Clinton's Tweets</NameDiv>
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
  margin-left: 5px;
  margin-top: 5px;
  /* background-color: #b8b5ff; */
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;

const NameDiv = styled.button`
  height: 100%;
  width: 100%;
  padding: 1.6rem 1.2rem;
  border: none;
  border-radius: 0.5rem;
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
  @media screen and (max-width: 800px) {
    &:hover {
      transition: none;
      transform: none;
    }
  }
`;
