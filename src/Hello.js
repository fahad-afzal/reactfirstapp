import "./Hello.css";

function Hello(props) {
  return (
    <div className="Hello">
      Hello my name is: <strong>{props.firstName}</strong>
      <h1>My friends list are following:</h1>
      <ol>
        <li>Adams</li>
        <li>Lana</li>
        <li>{2 + 1}</li>
      </ol>
    </div>
  );
}

export default Hello;
