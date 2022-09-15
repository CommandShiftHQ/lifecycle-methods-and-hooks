import "../styles/grandchild.css";
import { useThemeContext } from "./App";

const Grandchild = () => {
  const { useDarkTheme, setUseDarkTheme } = useThemeContext();

  const handleClick = () => {
    setUseDarkTheme(!useDarkTheme)
  }

  return (
    <div className="grandchild">
      <div className="grandchild__title">Grandchild component</div>
      <div>{useDarkTheme ? "use dark theme" : "use light theme"}</div>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
};

export default Grandchild;
