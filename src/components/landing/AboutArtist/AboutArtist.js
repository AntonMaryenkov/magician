import { NavLink } from "react-router-dom";
import image from '../../../images/image1.jpg';
import { portfolioDescription } from "../../../data/data";

function AboutArtist() {
  return (
    <div className='about-artist'>
      <div className='about-artist__description-block'>
        <h1 className='about-artist__title'>Сергей Magic Man Салтымаков</h1>
        <p className='about-artist__description'>
          {portfolioDescription[0]}
        </p>
        <NavLink className='about-artist__link' to='/portfolio'>Подробнее...</NavLink>
      </div>
      <img className='about-artist__img' src={image} alt='Magic Man и горящий кошелёк.' />
    </div>
  );
}

export default AboutArtist;
