import { NavLink } from "react-router-dom";
import image from '../../../images/image1.jpg';

function AboutArtist() {
  return (
    <div className='about-artist'>
      <div className='about-artist__description-block'>
        <h1 className='about-artist__title'>Сергей Magic Man Салтымаков</h1>
        <p className='about-artist__description'>
          Фокусник, иллюзионист, член Российской Ассоциации Иллюзионистов, член союза театральных деятелей РФ, артист высшей категории театра кукол Кузбасса им. А. Гайдара, педагог КемГИК. Автор и исполнитель иллюзионных шоу: «Секретные материалы», «Только, без фокусов», «Шоу фантастических иллюзий».
        </p>
        <NavLink className='about-artist__link' to='/portfolio'>Подробнее...</NavLink>
      </div>
      <img className='about-artist__img' src={image} alt='Magic Man и горящий кошелёк.' />
    </div>
  );
}

export default AboutArtist;
