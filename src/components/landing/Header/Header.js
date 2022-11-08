import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logotip.png';
import NavList from '../NavList/NavList';
import PopupNav from '../PopupNav/PopupNav';

function Header(props) {
  const headerRef = useRef(null);

  const [popupNav, setPopupNav] = useState(false);

  const clickIconMenu = () => setPopupNav(true);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [headerClass, setHeaderClass] = useState('header');
  const [headerVisible, setHeaderVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      if (currentScrollPos <= headerRef.current.clientHeight && popupNav !== true) {
        setHeaderClass('header');
        setHeaderVisible(false);
        return setPrevScrollPos(currentScrollPos);
      }
      if (currentScrollPos - prevScrollPos > 5 && popupNav !== true) {
        setHeaderClass('header header_fixed header_not-visible');
        setHeaderVisible(false);
        return setPrevScrollPos(currentScrollPos);
      }
    }
    if (prevScrollPos > currentScrollPos) {
      if (prevScrollPos - currentScrollPos >= 20 && currentScrollPos > headerRef.current.clientHeight) {
        setHeaderClass('header header_fixed header_visible');
        setHeaderVisible(true);
        return setPrevScrollPos(currentScrollPos);
      } else {
        if (headerVisible === false) {
          setHeaderClass('header');
          return setPrevScrollPos(currentScrollPos);
        }
      };
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  });

  const clickLogo = () => window.scrollTo(0, 0);

  return (
    <div className={props.popupIsOpen ? 'header' : headerClass} ref={headerRef}>
      <NavLink to='/' className='header__logo-link' onClick={clickLogo}>
        <img className='header__logo' src={logo} alt='Логотип' />
      </NavLink>
      <div className='header__nav-container'>
        <NavList nameBlock='header' />
        <a className='header__tel' href='tel:+79133002501'>+7 913 300 25 01</a>
        <button className='header__nav-button' onClick={clickIconMenu} />
      </div>
      {popupNav ? <PopupNav setPopupNav={setPopupNav} popupNav={popupNav} /> : null}
    </div>
  );
}

export default Header;
