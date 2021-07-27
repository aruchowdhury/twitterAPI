import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./AppContext";
import { Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
const Header = () => {
  //Receiving states using react context
  const { isFlipped, handleFlip } = useContext(AppContext);

  //Used react-card-flip to flip header
  //Using isFlipped state and handleFlip function to switch screens/components
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Link to="/">
        <NameDiv onClick={handleFlip}>Joe Biden's Tweets</NameDiv>
      </Link>

      <Link to="/biden">
        <NameDiv onClick={handleFlip}>Hilari Clinton's Tweets</NameDiv>
      </Link>
    </ReactCardFlip>
  );
};

export default Header;

// const Wrapper = styled.div`
//   height: 5rem;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
//   font-size: 1.2rem;
//   margin-left: 5px;
//   margin-top: 5px;
//   /* background-color: #b8b5ff; */
//   @media screen and (max-width: 800px) {
//     display: flex;
//     justify-content: center;
//   }
// `;

const NameDiv = styled.button`
  height: 100%;
  width: 100%;
  padding: 1.8rem 1.2rem;
  border: none;
  background-color: #867ae9;
  font-size: 2.5rem;
  color: #21094e;
  &:hover {
    transition: 0.7s ease-in-out;
    opacity: 0.85;
  }
  @media screen and (max-width: 800px) {
    &:hover {
      transition: none;
      transform: none;
    }
  }
`;
