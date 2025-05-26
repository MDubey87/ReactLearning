import "./CoreConcept.css";
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.tilte} />
      <h3>{props.tilte}</h3>
      <p>{props.description}</p>
    </li>
  );
}
export default CoreConcept;
