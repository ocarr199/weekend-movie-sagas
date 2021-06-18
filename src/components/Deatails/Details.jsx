import { useDispatch, useSelector } from 'react-redux';

function Details() {
    const details = useSelector(store => store.details);

    console.log('IN DETAILS ROUTE',details)
    return (
      <>
        <h1>{details.title}</h1>
     <img src={details.poster}></img>
     <p>{details.description}</p>
      </>
    );
  }
  
  
  export default Details;