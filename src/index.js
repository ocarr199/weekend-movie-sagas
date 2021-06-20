import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    yield takeEvery('POST_MOVIE', postMovie)
    yield takeEvery('REFRESH_MOVIE', fetchMovie)
    yield takeEvery('REFRESH_GENRES', fetchGenre)
}

function* postMovie(action){
    try{
        console.log(action.payload)
       yield axios.post('/api/movie', action.payload)
       yield put ({type: 'FETCH_MOVIES'})
    }catch {
        console.log('post movies error');
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all movies :', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
        
    } catch {
        console.log('get all movies error');
    }
        
}

// fetch movie from the DB that have a movie.id of the payload.id
function* fetchMovie(action) {
    // get all movies from the DB
    console.log(action.payload)
    try {
        const movie = yield axios.get(`/api/movie/${action.payload.id}`);
        console.log('get all movies :', movie.data);
        yield put({ type: 'MOVIE_DETAILS', payload: movie.data[0] });
        
    } catch {
        console.log('get all movies error');
    }
        
}

// fetch genres from the DB that have a movie.id of the payload.id
function* fetchGenre(action) {
    // get all movies from the DB
    console.log(action.payload)
    try {
        const genre = yield axios.get(`/api/genre/${action.payload.id}`);
        console.log('get specific genre :', genre.data);
        yield put({ type: 'SET_GENRES', payload: genre.data });
        
    } catch {
        console.log('get all movies error');
    }
        
}

function* fetchAllGenres() {
    // get all movies from the DB
    try {
        const genres = yield axios.get('/api/genre');
        console.log('get all genres :', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch {
        console.log('get all genres error');
    }
        
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// used to store movie after clicked up to show on details screen
const details = (state ={}, action) => {
    if (action.type === 'MOVIE_DETAILS'){
        // state is = details from MovieList.jsx
        return action.payload
    }if (action.type === "RELOAD_DETAILS"){
        return state
    }
    return state
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        case 'ADD_MOVIE':
            return [...state]
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        case 'FILTER_GENRES':
            console.log('action payload in filter genres ',action.payload)
            // const keptGenres = genre => genre.title == action.payload
            // filter out all objects in genre where title isnt = the title of the movie clicked on
            // state is the list of rows where the title is the title of the movie we clicked on
            // giving access to all genres the movie has
            return action.payload ;
            case 'REFRESH_GENRES':
                return state;
        default:
            return state;
    }
}

// used to edit movie after selected from details screen
const editMovie = (state = {}, action) => {
    if (action.type === "SET_EDIT_MOVIE"){
        return action.payload
    }else if (action.payload === "EDIT_TITLE_ONCHANGE"){
        return {...state, [action.payload.property] : action.payload.value }
    }
    return state
}
// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
        editMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
