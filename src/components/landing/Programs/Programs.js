import CardList from "../CardList/CardList";

function Programs(props) {
  return (
    <div className='programs' id='programs'>
      <h2 className='programs__title'>{props.title}</h2>
      <CardList programsList={props.programsList} />
    </div>
  );
}

export default Programs;
