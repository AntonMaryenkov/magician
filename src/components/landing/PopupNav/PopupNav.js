import NavList from '../NavList/NavList';
import imgBackground from '../../../images/popup-nav/imgBackground.jpg';
import imgRubiksCube from '../../../images/popup-nav/rubiks-cube.png';

function PopupNav(props) {
  const closePopup = () => props.setPopupNav(false);

  return (
    <div className='popup-nav__container'>
      <div className='popup-nav'>
        <NavList nameBlock='popup-nav' setPopupNav={props.setPopupNav} popupNav={props.popupNav} />
        <img className='popup-nav__img' src={imgBackground} alt='Magic Man с парящим кубиком рубика.' />
        <button className='popup-nav__button-close' onClick={closePopup} />
        <img className='popup-nav__overlay' src={imgRubiksCube} alt='' />
      </div>
    </div>
  );
}

export default PopupNav;
