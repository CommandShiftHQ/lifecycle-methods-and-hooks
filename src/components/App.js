import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import "../styles/app.css";
import Child from "./Child";

const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);

const ThemeContextProvider = ({ children }) => {
  const [useDarkTheme, setUseDarkTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ useDarkTheme, setUseDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

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

  useEffect(() => {
    console.log("Count updated");
  }, [count]);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <ThemeContextProvider>
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
        <div className="app__container">
          <div className="app__container-title">useContext</div>
          <Child />
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
