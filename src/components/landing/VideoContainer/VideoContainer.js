import { useRef } from "react";

function VideoContainer(props) {
  const videoRef = useRef();
  const buttonPlayVideoRef = useRef();

  function detectMob() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  };

  function playVideo() {
    buttonPlayVideoRef.current.style.display = 'none';
    if (detectMob()) {
      videoRef.current.controls = true;
      return videoRef.current.play();
    }
    if (videoRef.current.controls === false) {
      videoRef.current.autoPlay = true;
      return videoRef.current.controls = true;
    }
  };

  function onClickButtonPlay() {
    console.log(buttonPlayVideoRef.current.style.display)
    videoRef.current.play();
    return buttonPlayVideoRef.current.style.display = 'none';
  };

  function returnButton() {
    buttonPlayVideoRef.current.style.display = 'flex';
    return videoRef.current.controls = false;
  };

  return (
    <div className='video-container' onClick={() => playVideo()}>
      <video
        className='video-container__video'
        autoPlay={false}
        ref={videoRef}
        controls={false}
        poster={props.poster}
        onEnded={() => returnButton()}
      >
        <source src={props.src} type='video/mp4' />
      </video>
      <button
        className={props.mod === 'review' ? 'video-container__button video-container__button_review' : 'video-container__button'}
        ref={buttonPlayVideoRef}
        onClick={() => onClickButtonPlay()} />
      <div></div>
    </div>
  )
}

export default VideoContainer;
