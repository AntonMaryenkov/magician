import { useEffect, useState } from "react";

function PopupImage(props) {
  const [buttonLeft, setButtonLeft] = useState(false);
  const [buttonRight, setButtonRight] = useState(false);

  const [img, setImg] = useState(
    {
      id: props.popup.id,
      src: props.popup.src,
      alt: props.popup.alt
    });

  function changeImage(arg) {
    const currentImgIndex = props.popupImgList.findIndex(item => item.id === img.id);
    const nextImgIndex = currentImgIndex + arg;
    const imgListLength = props.popupImgList.length;

    if (nextImgIndex < imgListLength && nextImgIndex >= 0) {
      return setImg(props.popupImgList[nextImgIndex]);
    }
  };

  function showButton() {
    const currentImgIndex = props.popupImgList.findIndex(item => item.id === img.id);
    const imgListLength = props.popupImgList.length;

    if (currentImgIndex === 0 ) {
      setButtonLeft(false);
    } else {
      setButtonLeft(true);
    }
    if (currentImgIndex === imgListLength - 1) {
      setButtonRight(false);
    } else {
      setButtonRight(true);
    }
  };

  useEffect(() => {
    showButton();
  }, [changeImage])

  function closePopup() {
    return props.setPopupIsOpen(false);
  };

  const ESC_CODE = 27;

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
        <button className='popup-image__button popup-image__button_close' onClick={closePopup} />
        <img className='popup-image__image' src={img.src} onClick={clickImg} alt={img.alt} />
        {buttonLeft ? <button className='popup-image__button popup-image__button_left' onClick={() => changeImage(-1)} /> : null}
        {buttonRight ? <button className='popup-image__button popup-image__button_right' onClick={() => changeImage(1)} /> : null}
      </div>
    </div>
  );
}

export default PopupImage;
