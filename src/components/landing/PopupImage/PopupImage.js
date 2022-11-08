import { useEffect } from "react";

function PopupImage(props) {
  const ESC_CODE = 27;

  function closePopup() {
    return props.setPopupIsOpen(false);
  };

  function closeEscPopup(isOpen) {
    if (isOpen) {
      const handleEsc = (event) => {
        if (event.keyCode === ESC_CODE) {
          closePopup();
        }
      };
      document.addEventListener('keydown', handleEsc);
      return () => {
        document.removeEventListener('keydown', handleEsc);
      };
    }
  };

  useEffect(() => {
    closeEscPopup(props.popupIsOpen);
  }, []);

  function closePopupClickOverlay(event) {
    if (event.target !== event.currentTarget) return false;
    closePopup();
  };

  function clickImg() {
    const WIDTH__SCREEN__MOBILE = 680;
    const screenWidth = window.screen.width;

    if (screenWidth <= WIDTH__SCREEN__MOBILE) {
      return closePopup();
    }
  };

  return (
    <div className='popup-image' onClick={closePopupClickOverlay}>
      <div className='popup-image__container'>
        <button className='popup-image__button-close' onClick={closePopup}></button>
        <img className='popup-image__image' src={props.popup.src} onClick={clickImg} alt={props.popup.alt} />
      </div>
    </div>
  );
}

export default PopupImage;
