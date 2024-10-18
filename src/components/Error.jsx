import "./styles/Error.scss";

function Error({ message }) {
  return <div className="Error">{message || "An error ocurred"}</div>;
}

export default Error;
