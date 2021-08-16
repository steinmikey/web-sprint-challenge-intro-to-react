// Write your Character component here
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

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

const StyledInfo = styled.div`
  width: 50%;
`;

export default function Character(props) {
  const [characterInfo, setCharacterInfo] = useState(null);
  const [error, setError] = useState(null);
  const { name, birthYear, current, setCurrent } = props;

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        console.log(res);
        // setCharacterInfo(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Sorry, something went wrong...");
      });
  }, [current]);

  return (
    <div>
      <StyledCharacter
        onClick={() => {
          if (current === name) {
            setCurrent(null);
          } else {
            setCurrent(name);
          }
        }}
      >
        <div>
          <h2>{name}</h2> <h3>{birthYear}</h3>
        </div>
      </StyledCharacter>
      {error && <h2>{error}</h2>}
      {current === name ? <StyledInfo>Gender: </StyledInfo> : null}
    </div>
  );
}
