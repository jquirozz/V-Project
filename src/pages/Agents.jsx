import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Error from "../components/Error";
import Loading from "../components/Loading";

// Hooks
import UseAgents from "../hooks/UseAgents";

// Content
import { roles } from "../content/roles";

// Style & Icons
import "./styles/Agents.scss";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Agents() {
  const { agents, error, loading } = UseAgents();
  const [filterName, setFilterName] = useState("");
  const [filterRole, setFilterRole] = useState("");

  if (error) return <Error message={error} />;
  if (loading) return <Loading />;

  const filteredAgents = agents.filter((agent) => {
    const matchesName = agent.name
      .toLowerCase()
      .includes(filterName.toLowerCase());
    const matchesRole = filterRole
      ? agent.roleName.toLowerCase() === filterRole.toLowerCase()
      : true;
    return matchesName && matchesRole;
  });

  return (
    <main className="Agents">
      <header className="filter">
        <section className="byName">
          <input
            type="text"
            placeholder="Search by name"
            onChange={(e) => setFilterName(e.target.value)}
          />
          <div className="icon">
            <FaMagnifyingGlass />
          </div>
        </section>
        <aside className="byRole">
          {roles.map((role) => (
            <button
              className={role.name === filterRole && "active"}
              onClick={() => {
                setFilterRole((prevRole) =>
                  prevRole === role.name ? "" : role.name
                );
              }}
              key={role.name}
            >
              <img src={role.icon} alt={role.name} />
            </button>
          ))}
        </aside>
      </header>
      <div className="title">
        <h2 className="filteredRole">
          {filterRole ? `${filterRole}s` : "Agents"}
        </h2>
      </div>
      <section className="cards">
        {filteredAgents.map((agent) => (
          <Link
            to={`/agents/${agent.id}`}
            className="card"
            key={agent.id}
            style={{
              background: `linear-gradient(-55deg, #${agent.colors[1]}, 0%, #${agent.colors[2]} 40%, #${agent.colors[3]} 100%)`,
            }}
          >
            <img src={agent.icon} className="icon" alt={`${agent.name} icon`} />
            <img
              src={agent.background}
              className="background"
              alt={`${agent.name} name image`}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Agents;
