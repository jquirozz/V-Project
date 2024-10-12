// Components
import Error from "../components/Error";
import Loading from "../components/Loading";

// Hooks
import UseFetchApi from "../hooks/UseFetchApi";

// Style & Icons
import "./styles/Agents.scss";

function Agents() {
  const {
    content: agents,
    error,
    loading,
  } = UseFetchApi({ query: "agents", param: "isPlayableCharacter=true" });

  if (error) return <Error message={error} />;
  if (loading) return <Loading message="Loading characters..." />;

  return (
    <main className="Agents">
      {agents.map((character) => (
        <div className="character" key={character.uuid}>
          <h3>{character.displayName}</h3>
        </div>
      ))}
    </main>
  );
}

export default Agents;
