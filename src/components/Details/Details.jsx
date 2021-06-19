import { useDispatch, useSelector } from 'react-redux';

function Details() {
  // accessing the details reducer which hold the object of the movie that was clicked on 
    const details = useSelector(store => store.details);
  // accessing the genres selector after a movie was clicked on on the genres of that movie are 
  // held in the genres state
    const genres = useSelector(store => store.genres)
    console.log('IN DETAILS ROUTE',details)

    return (
      <>
        <h1>{details.title}</h1>
     <img src={details.poster}></img>
     <p>{details.description}</p>
      <h1>Genres</h1>
      {/* make a list of all the genres the movie belongs to */}
      <ul>
      {genres.map(genre => {
                    return (
                        <li key={genre.id} >
                            {genre.name}
                        </li>
                    );
                })}
      </ul>
      </>
    );
  }
  
  
  export default Details;