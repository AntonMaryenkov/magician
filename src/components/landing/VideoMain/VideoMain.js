import videoMain from '../../../videos/video-main.mp4';

function VideoMain() {
  return (
    <div className='video-main'>
      <video className='video-main__video' autoPlay muted playsInline={true} disablePictureInPicture={true}>
        <source src={videoMain} type='video/mp4'/>
      </video>
    </div>
  );
}

export default VideoMain;
