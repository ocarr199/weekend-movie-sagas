import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';

function Details() {
  // accessing the details reducer which hold the object of the movie that was clicked on 
  const dispatch = useDispatch();

const id = useParams()

  const details = useSelector(store => store.details);
  // accessing the genres selector after a movie was clicked on on the genres of that movie are 
  // held in the genres state
    const genres = useSelector(store => store.genres)

  useEffect(() => {
    dispatch({type: 'REFRESH_MOVIE', payload: id})
    // // send the details.title to the genres reducer
        dispatch({type: 'REFRESH_GENRES', payload: id})
}, []);

    console.log('IN DETAILS ROUTE', details)


    const history = useHistory();

    const goHome = () => {
      history.push('/')
    }

    return (
      <>
            <Button 
        
        onClick={goHome}
        variant="contained" 
        color="primary">
        Home
      </Button>
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