import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './MovieList.css'


// const useStyles = makeStyles({
//     root: {
//       minWidth: 100,
//       maxWidth: 300,
//     },
//     card: {
//         margin: 10,
//         height: 400,
//         width: 300,
//         display: "inline-block",
//     },
//     title: {
//       fontSize: 14,
//     },
//     pos: {
//       marginBottom: 12,
//     },
//   });




function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();



// const classes = useStyles();

    useEffect(() => {
        // run the sagas for FETCH_MOVIES and FETCH_GENRES on load
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    const goToAdd = () => {
        history.push('/AddMovie')

    }

const goToDetails = (details) => {
    // the details are the movie object
    console.log('THE DETAILS ARE ',details)
    // send details aka movie to the details reducer in index.js
    // dispatch({type: 'MOVIE_DETAILS', payload: details })
    // // send the details.title to the genres reducer
    // dispatch({type: 'FILTER_GENRES', payload: details.title})
    history.push(`/details/${details.id}`)
}
    return (
        <main>
            <h1>MovieList</h1>
            <div className="buttonDiv">
            <Button 
        
        onClick={goToAdd}
        variant="contained" 
        color="primary">
        Add Movie
      </Button>
      </div>
       <Grid container spacing={3}>
            <section className="movies">
                {/* variable of movie declared */}
                {movies.map(movie => {
                    return (
                        <Grid item xs={3}>
                        <Card 
                        style={{backgroundColor:"#F5F5DC", margin:"10px"}}
                        variant="outlined">
                                 <CardContent>
                        <div key={movie.id} >
                            
                            <Typography variant="h5" component="h2">
                            {movie.title}
                              </Typography>
                            
                            {/* run function go to details with the object of movie from the image clicked on */}
                            <img onClick={event => goToDetails(movie)} src={movie.poster} alt={movie.title}/>
                
                        </div>
                        </CardContent>
                        </Card>
                        </Grid>
                    );
                })}
                
            </section>
            </Grid>
        </main>

    );
}

export default MovieList;