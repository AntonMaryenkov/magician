import { useState } from "react";
import { useParams } from "react-router-dom";
import { programsListFirst, programsListSecond } from "../../../data/data";
import ScrollToTop from "../../utils/ScrollToTop";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PopupImage from "../PopupImage/PopupImage";
import VideoContainer from "../VideoContainer/VideoContainer";


function AboutProgram() {
  const { id } = useParams();

  const KEY_VIDEOS = 'videos';

  const data = programsListFirst.concat(programsListSecond).find(item => item.id === id);

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
    <div className='about-program'>
      <ScrollToTop />
      <Header popupIsOpen={popupIsOpen} />
      <h2 className='about-program__title'>{data.name}</h2>
      <div className='about-program__container-main'>
        <img className='about-program__img-main' src={data.images.imgAboutProgram.src} alt={data.images.imgAboutProgram.alt} />
        <div className='about-program__description-container'>
          {data.description.map((item, i) =>
            <p key={`about-program-description-${i}`} className='about-program__description'>{item}</p>
          )}
          <p className='about-program__duration-price'>Продолжительность: {data.duration}</p>
          <p className='about-program__duration-price'>Цена: {data.price}</p>
        </div>
      </div>
      <h3 className='about-program__title'>Галерея</h3>
      <div className='about-program__photos'>
        {data.images.photos.map((item, i) =>
          <img className='about-program__img'
            onClick={() => openPopup(item, data.images.photos)}
            key={`about-program-img-${i}`}
            src={item.src}
            alt={item.alt} />
        )}
      </div>
      {KEY_VIDEOS in data ?
        <div className='about-program__videos-block'>
          <h3 className='about-program__title'>Видео</h3>
          <div className='about-program__videos'>
            {data.videos.map(item =>
              <VideoContainer key={item.id} src={item.video} poster={item.poster} />
            )}
          </div>
        </div>
        : null}
      <Footer />
      {popupIsOpen ? <PopupImage popup={popupImg} popupImgList={popupImgList} setPopupIsOpen={setPopupIsOpen} popupIsOpen={popupIsOpen} /> : null}
    </div>
  );
}

export default AboutProgram;
