import react from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.source} alt={props.title}></img>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href={props.share}>SHARE</a>
      <br></br>
      <a href={props.explore}>EXPLORE</a>
    </div>
  )
}

export default Card;