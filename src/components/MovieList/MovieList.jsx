import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();


    useEffect(() => {
        // run the sagas for FETCH_MOVIES and FETCH_GENRES on load
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' });
    }, []);
const goToDetails = (details) => {
    // the details are the movie object
    console.log('THE DETAILS ARE ',details)
    // send details aka movie to the details reducer in index.js
    dispatch({type: 'MOVIE_DETAILS', payload: details })
    // send the details.title to the genres reducer
    dispatch({type: 'FILTER_GENRES', payload: details.title})
    history.push('/details')
}
    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {/* variable of movie declared */}
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            {/* run function go to details with the object of movie from the image clicked on */}
                            <img onClick={event => goToDetails(movie)} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;