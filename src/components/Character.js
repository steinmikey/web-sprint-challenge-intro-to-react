// Write your Character component here
import React, { useState } from "react";
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
    margin: 5px 0px;
    border-radius: 14px;
    background-color: black;
    color: white;
  }
`;

const StyledInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: -5px auto 5px;
  background-color: white;
  border-radius: 14px;
  align-items: flex-start;

  div {
    padding: 4px 50px;
  }
`;

export default function Character(props) {
  const [characterInfo, setCharacterInfo] = useState(null);
  const { list, name, birthYear, current, setCurrent } = props;

  return (
    <div>
      <StyledCharacter
        onClick={() => {
          if (current === name) {
            setCurrent(null);
          } else {
            setCurrent(name);
            setCharacterInfo(list.find((char) => char.name === name));
          }
        }}
      >
        <div>
          <h2>{name}</h2> <h3>{birthYear}</h3>
        </div>
      </StyledCharacter>
      {current === name ? (
        <StyledInfo>
          <div>Gender: {characterInfo.gender}</div>
          <div>Eye Color: {characterInfo.eye_color}</div>
          <div>Height: {characterInfo.height}</div>
          <div>Mass: {characterInfo.mass} kg</div>
          <div>Skin: {characterInfo.skin_color}</div>
          <div>Height: {characterInfo.height}</div>
        </StyledInfo>
      ) : null}
    </div>
  );
}
