import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);
const goToDetails = (details) => {
    console.log('THE DETAILS ARE ',details)
    dispatch({type: 'MOVIE_DETAILS', payload: details })
    history.push('/details')
}
    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={event => goToDetails(movie)} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;