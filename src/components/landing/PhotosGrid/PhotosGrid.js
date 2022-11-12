import { imgPhotosGridList } from "../../../data/data";

function PhotosGrid(props) {
  return (
    <div className='photos-grid' id='photos-grid'>
      <h4 className='photos-grid__title'>Фотографии</h4>
      <div className='photos-grid__container'>
        {imgPhotosGridList.map((item, i) =>
          <img key={`main-photos-grid-img-${i}`}
            className={`photos-grid__img photos-grid__img_${i}`}
            onClick={() => props.openPopup(item, imgPhotosGridList)}
            src={item.src}
            alt={item.alt} />)}
      </div>
    </div>
  );
}

export default PhotosGrid;
