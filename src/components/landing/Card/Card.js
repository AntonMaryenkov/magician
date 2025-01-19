import { NavLink } from "react-router-dom";

function Card(props) {

  return (
    <NavLink className='card' to={{
      pathname: `/programs/${props.id}`,
    }}>
      <img className='card__img' src={props.src} alt={props.alt} />
      <h3 className='card__title'>{props.name}</h3>
      <span className='card__duration'>{props.duration}</span>
    </NavLink>
  );
}

export default Card;
