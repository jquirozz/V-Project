import { Link, NavLink } from "react-router-dom";

// Style & Icons
import "./styles/NavBar.scss";
import { IoMdSettings } from "react-icons/io";
import { GiNinjaHead, GiThrownKnife } from "react-icons/gi";
import { BiSolidMap } from "react-icons/bi";

const LOGO_IMG = <img src="/logo.png" alt="Valorant logo" />;

const ITEMS = [
  {
    text: "agents",
    icon: <GiNinjaHead />,
  },
  {
    text: "weapons",
    icon: <GiThrownKnife />,
  },
  {
    text: "home",
    icon: LOGO_IMG,
  },
  {
    text: "maps",
    icon: <BiSolidMap />,
  },
  {
    text: "settings",
    icon: <IoMdSettings />,
  },
];

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/" className="header">
        {LOGO_IMG}
        <h1>V-Project</h1>
      </Link>
      <section className="links">
        {ITEMS.map(({ text, icon }) => (
          <NavLink
            to={`/${text !== "home" ? text : ""}`}
            key={text}
            className={text === "home" && "mobile-logo"}
          >
            {icon}
            <h4>{text}</h4>
          </NavLink>
        ))}
      </section>
    </nav>
  );
}

export default NavBar;
