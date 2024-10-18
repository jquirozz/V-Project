import UseFetchApi from "../hooks/UseFetchApi";

function UseAgents() {
  const { content, error, loading } = UseFetchApi({
    query: "agents",
    param: "isPlayableCharacter=true",
  });

  const agentsMapped = content?.map((agent) => ({
    id: agent.uuid,
    name: agent.displayName,
    roleName: agent.role?.displayName,
    roleIcon: agent.role?.displayIcon,
    colors: agent.backgroundGradientColors,
    icon: agent.displayIcon,
    background: agent.background,
  }));

  // From A to Z
  const agents = agentsMapped?.sort((a, b) => a.name.localeCompare(b.name));

  return { agents, error, loading };
}

export default UseAgents;
