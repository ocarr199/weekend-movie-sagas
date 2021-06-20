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
            const keptGenres = genre => genre.title == action.payload
            // filter out all objects in genre where title isnt = the title of the movie clicked on
            // state is the list of rows where the title is the title of the movie we clicked on
            // giving access to all genres the movie has
            return state.filter(keptGenres) ;
            case 'REFRESH_GENRES':
                return state;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
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
