import { useDispatch, useSelector } from 'react-redux';

function Details() {
    const details = useSelector(store => store.details);
    return (
      <>
        <h1>Details</h1>
     
      </>
    );
  }
  
  
  export default Details;