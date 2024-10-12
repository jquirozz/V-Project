import { useContext } from "react";

// Context
import { useTheme } from "./../context/ThemeContext";
import { themes } from "./../context/themes";
import { languages } from "./../context/languages";
import { LanguageContext } from "./../context/LanguageContext";

// Style & Icons
import "./styles/Settings.scss";
import { IoMdSunny } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Settings = () => {
  const { theme, changeTheme } = useTheme();
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className="Settings">
      <Settings_Section title="Themes">
        {Object.keys(themes).map((theme_item) => (
          <button
            onClick={() => changeTheme(theme_item)}
            className={theme_item === theme && "active"}
            type="button"
            key={theme_item}
          >
            {theme_item === "light" ? <IoMdSunny /> : <BsFillMoonStarsFill />}
            <label>{theme_item}</label>
          </button>
        ))}
      </Settings_Section>

      <Settings_Section title="Languages">
        {languages.map(({ name, code }) => (
          <button
            onClick={() => changeLanguage(code)}
            className={language === code && "active"}
            type="button"
            key={code}
          >
            {name}
          </button>
        ))}
      </Settings_Section>
    </div>
  );
};

function Settings_Section({ title, children }) {
  return (
    <section className="Settings_Section">
      <h2>{title}</h2>
      <div className="action-wrap">{children}</div>
    </section>
  );
}

export default Settings;
