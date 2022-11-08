import Card from '../Card/Card';

function CardList(props) {
  return (
    <div className='card-list'>
      {props.programsList.map((item, i) => <Card
        key={`card-main-page-${i}`}
        id={item.id}
        src={item.images.imgMain.src}
        alt={item.images.imgMain.alt}
        name={item.name}
        duration={item.duration}
        price={item.price}
        description={item.description}
      />)}
    </div>
  );
}

export default CardList;
