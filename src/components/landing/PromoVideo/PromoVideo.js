import videoPromo from '.././../../videos/video-promo.mp4';
import videoScreenPromo from '../../../videos/videoScreenPromo.jpg';
import VideoContainer from '../VideoContainer/VideoContainer';

function PromoVideo() {
  return (
    <div className='promo-video' id='promo-video'>
      <h4 className='promo-video__title'>Промо</h4>
      <VideoContainer src={videoPromo} poster={videoScreenPromo} />
    </div>
  );
}

export default PromoVideo;
