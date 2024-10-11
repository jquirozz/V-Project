import { useTheme } from "./../context/ThemeContext";

// Style & Icons
import "./styles/Settings.scss";
import { IoMdSunny } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Settings = () => {
  const { changeTheme } = useTheme();

  return (
    <div className="Settings">
      <section className="themes">
        <h2>Themes</h2>
        <div className="button-wrap">
          <button type="button" onClick={() => changeTheme("light")}>
            <IoMdSunny />
            <label>Light</label>
          </button>
          <button type="button" onClick={() => changeTheme("dark")}>
            <BsFillMoonStarsFill />
            <label>Dark</label>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Settings;
