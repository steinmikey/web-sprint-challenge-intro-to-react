import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [list, setList] = useState(null);
  const [error, setError] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        // console.log(res.data);
        setList(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Sorry, something went wrong...");
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {error && <h2>{error}</h2>}
      {list &&
        list.map((ch) => {
          return <Character key={ch.name} name={ch.name} birthYear={ch.birth_year} />;
        })}
    </div>
  );
};

export default App;
