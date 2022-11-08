import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import imgMain from '../../../images/portfolio/portfolio-main.jpg';
import { portfolioDescription, videosPortfolioList, portfolioPostersList, portfolioDiplomasList, feedbackList, imgGridPortfolioList } from '../../../data/data';
import ScrollToTop from "../../utils/ScrollToTop";
import { useState } from "react";
import PopupImage from "../PopupImage/PopupImage";
import VideoContainer from "../VideoContainer/VideoContainer";
import feedbackVideo from '../../../videos/feedback/feedback-video.MP4';
import feedbackVideoPoster from '../../../videos/feedback/img-screen/videoScreen1.jpg';

function Portfolio() {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [popupImg, setPopupImg] = useState({});

  function openPopup(src, alt) {
    setPopupIsOpen(true);
    return setPopupImg(
      {
        src: src,
        alt: alt
      });
  };

  return (
    <div className='portfolio'>
      <ScrollToTop />
      <Header popupIsOpen={popupIsOpen} />
      <img className='portfolio__img-main' src={imgMain} alt='Magic Man и команда.' />
      <h1 className='portfolio__title'>Сергей Magic Man Салтымаков</h1>
      {portfolioDescription.map((item, i) =>
        <p className='portfolio__description' key={`portfolio-descriptio-${i}`}>{item}</p>)}
      <h2 className='portfolio__title'>О шоу</h2>
      <div className='portfolio__videos-list'>
        {videosPortfolioList.map((item) =>
          <VideoContainer key={item.id} src={item.video} poster={item.poster} />
        )}
      </div>
      <h2 className='portfolio__title'>Фото</h2>
      <div className='portfolio__photos-grid'>
        {imgGridPortfolioList.map((item, i) =>
          <img className={`portfolio__img portfolio__img_${i}`} key={item.id} src={item.src} alt={item.alt} onClick={() => openPopup(item.src, item.alt)} />)}
      </div>
      <h2 className='portfolio__title'>Афиши</h2>
      <div className='portfolio__img-list'>
        {portfolioPostersList.map(item =>
          <img className='portfolio__poster' src={item.src} alt={item.alt} key={item.id} onClick={() => openPopup(item.src, item.alt)} />)}
      </div>
      <h2 className='portfolio__title'>Награды</h2>
      <div className='portfolio__img-list portfolio__img-list_diplomas'>
        {portfolioDiplomasList.map(item =>
          <img className='portfolio__diploma' src={item.src} alt={item.alt} key={item.id} onClick={() => openPopup(item.src, item.alt)} />)}
      </div>
      <h2 className='portfolio__title'>Отзывы</h2>
      <div className='portfolio__feedback-grid'>
        {feedbackList.map((item, i) =>
          <img className={`portfolio__feedback-img portfolio__feedback-img_${i}`} key={item.id} src={item.src} onClick={() => openPopup(item.src, item.alt)} alt='Отзыв о работе Сергея Салтымакова.' />
        )}
        <div className='portfolio__video-review'>
          <VideoContainer src={feedbackVideo} poster={feedbackVideoPoster} mod='review' />
        </div>
      </div>
      <Footer />
      {popupIsOpen ? <PopupImage popup={popupImg} setPopupIsOpen={setPopupIsOpen} popupIsOpen={popupIsOpen} /> : null}
    </div >
  );
}

export default Portfolio;
