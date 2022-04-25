import "./Job.css";

function Job(props) {
  return (
    <div className={`job-container ${props.color}`}>
      <h2>{props.title}</h2>
      <div className="job-bottom">
        <p>{props.contract} - </p>
        <p>{props.country} - </p>
        <p>{props.city}</p>
      </div>
    </div>
  );
}
export default Job;
