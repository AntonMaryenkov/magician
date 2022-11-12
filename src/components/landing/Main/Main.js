import AboutArtist from '../AboutArtist/AboutArtist';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PhotosGrid from '../PhotosGrid/PhotosGrid';
import Programs from '../Programs/Programs';
import VideoMain from '../VideoMain/VideoMain';
import PromoVideo from '../PromoVideo/PromoVideo';
import { programsListFirst, programsListSecond } from '../../../data/data';
import PopupImage from '../PopupImage/PopupImage';
import { useState } from 'react';
import ScrollToTop from '../../utils/ScrollToTop';

function Main() {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [popupImg, setPopupImg] = useState({});
  const [popupImgList, setPopupImgList] = useState([]);

  function openPopup(obj, arr) {
    setPopupImgList(arr);
    setPopupIsOpen(true);

    return setPopupImg(
      {
        id: obj.id,
        src: obj.src,
        alt: obj.alt
      }
    );
  };

  return (
    <div className='main'>
      <ScrollToTop />
      <Header popupIsOpen={popupIsOpen} />
      <VideoMain />
      <AboutArtist />
      <Programs programsList={programsListFirst} title='Программы' />
      <Programs programsList={programsListSecond} title='А также' />
      <PhotosGrid openPopup={openPopup} />
      <PromoVideo />
      <Footer />
      {popupIsOpen ?
        <PopupImage popup={popupImg} popupImgList={popupImgList} popupIsOpen={popupIsOpen} setPopupIsOpen={setPopupIsOpen} />
        : null}
    </div>
  );
}

export default Main;
