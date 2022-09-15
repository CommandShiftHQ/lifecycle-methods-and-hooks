import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/app.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState("");

  useEffect(() => {
    console.log("App mounted");
    axios.get("https://random-word-api.herokuapp.com/word").then((res) => {
      setWord(res.data[0]);
    });
    return () => {
      console.log("App unmounted");
    };
  }, []);

  useEffect(() =>{
    console.log("Count updated");
  }, [count])

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="app">
      <div className="app__container">Lets look at some hooks!</div>
      <div className="app__container">
        <div className="app__container-title">useState</div>
        <div>Current count: {count}</div>
        <button onClick={handleClick}>+</button>
      </div>
      <div className="app__container">
        <div className="app__container-title">useEffect</div>
        <div>Fetched word: {word}</div>
      </div>
    </div>
  );
};

export default App;
