import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
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

    const editMovie = () => {
      dispatch({type: "SET_EDIT_MOVIE", payload: details })
      history.push('/edit')
    }

    return (
      <>
            <Button 
        
        onClick={goHome}
        variant="contained" 
        color="primary">
        Home
      </Button>

      <Button 
        
        onClick={editMovie}
        variant="contained" 
        color="primary">
        Edit
      </Button>
      <Card variant="outlined"
      style={{backgroundColor:"#F5F5DC", margin:"30px"}}>

        <Typography variant="h2" component="h2">
       {details.title}
        </Typography>
     <img src={details.poster}></img>
     <p>{details.description}</p>
     <Typography variant="h3" component="h3">
      Genres:    
   
      </Typography>
      {genres.map(genre => {
                    return (
                        <p key={genre.id} >
                            {genre.name}
                        </p>
                    );
                })}
      {/* make a list of all the genres the movie belongs to */}
   
   
      </Card>
      </>
    );
  }
  
  
  export default Details;