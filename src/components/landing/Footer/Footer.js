import logo from '../../../images/logotip.png';
import iconVk from '../../../images/icons/icon-vk.svg';
import iconInstagram from '../../../images/icons/icon-instagram.svg';
import { NavLink } from 'react-router-dom';

function Footer() {
  const clickLogo = () => window.scrollTo(0, 0);

  return (
    <div className='footer'>
      <NavLink to='/' onClick={clickLogo}>
        <img className='footer__logo' src={logo} alt='Логотип; "Magic Man".' />
      </NavLink>
      <div className='footer__links-container'>
        <ul className='footer__links'>
          <li>
            <a className='footer__link' href='https://www.instagram.com/magic_man_saltymakov/' target="_blank" rel="noreferrer">
              <img src={iconInstagram} className='footer__icon' alt='Иконка "Instagram".' />
            </a>
          </li>
          <li>
            <a className='footer__link' href='https://vk.com/saltymagic/' target="_blank" rel="noreferrer">
              <img src={iconVk} className='footer__icon' alt='Иконка "VK".' />
            </a>
          </li>
        </ul>
        <a className='footer__telephone' id='contacts' href='tel:+79133002501'>+7 913 300 25 01</a>
      </div>
    </div>
  );
}

export default Footer;
