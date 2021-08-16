// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 50%;

  div {
    display: flex;
    flex: auto;
    justify-content: space-between;
    align-items: center;
    padding: 2px 50px;
    margin: 4px;
    border-radius: 14px;
    background-color: black;
    color: white;
  }
`;

export default function Character(props) {
  const { name, birthYear } = props;

  return (
    <StyledCharacter>
      <div>
        <h2>{name}</h2> <h3>{birthYear}</h3>
      </div>
    </StyledCharacter>
  );
}
