import React, {useState}from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
function AddMovie () {
    let [title, setTitle] = useState('');
    let [poster, setPoster] = useState('');
    let [description, setDescription] = useState('');
    let [genre, setGenre] = useState('');
    const dispatch = useDispatch();

    const history = useHistory();

// hamdle change for inputs
    const handleTitleChange = (event) => {
        console.log('title changed');
        setTitle(event.target.value)
    }
    const handleUrlChange = (event) => {
        console.log('url changed');
        setPoster(event.target.value)
    }
    const handleDescriptionChange = (event) => {
        console.log('event descriptio changed');
        setDescription(event.target.value)
    }

    const handleGenreChange = (event) => {
      console.log('genre changed');
      setGenre(event.target.value)
  }

// function to send the movie object to a redux saga
    const postMovie = () => {
      event.preventDefault();
      console.log('hello')
        console.log(title)
        dispatch({ type: 'POST_MOVIE', payload: {title: title, poster: poster, description: description, genre_id: genre} });
        history.push('/')
}

  const goHome = () => {
    history.push('/')
  }
console.log(title)
    return (
            <> 
            <h2>Add Movie</h2>
            <form onSubmit={postMovie}>
                  <TextField 
                  value={title}
                  onChange={handleTitleChange} 
                  id="outlined-title" label="Movie Title"
                   variant="outlined" />
                  <TextField
                   value={poster} 
                   onChange={handleUrlChange} 
                   id="outlined-url" label="Poster URL"
                    variant="outlined" />
                  <TextField 
                  value={description} 
                  onChange={handleDescriptionChange} 
                  id="outlined-desc" 
                  label="Description" 
                  variant="outlined" />
                  <Select
                    
                     defaultValue=''
                     onChange={handleGenreChange}

        displayEmpty
        >
          <MenuItem aria-label="None" value={genre} />
          <MenuItem value={1}>Adventure</MenuItem>
          <MenuItem value={2}>Animated</MenuItem>
          <MenuItem value={3}>Biographical</MenuItem>
          <MenuItem value={4}>Comedy</MenuItem>
          <MenuItem value={5}>Disaster</MenuItem>
          <MenuItem value={6}>Drama</MenuItem>
          <MenuItem value={7}>Epic</MenuItem>
          <MenuItem value={8}>Fantasy</MenuItem>
          <MenuItem value={9}>Musical</MenuItem>
          <MenuItem value={10}>Romantic</MenuItem>
          <MenuItem value={11}>Science Fiction</MenuItem>
          <MenuItem value={12}>Space-Opera</MenuItem>
          <MenuItem value={13}>Superhero</MenuItem>
        </Select>
        <Button 
        
        type="submit"
        variant="contained" 
        color="primary">
        Save
      </Button>
      <Button 
        onClick={goHome}
        variant="contained" 
        color="primary">
        Cancel
      </Button>
        </form>
            </>

    )
}

export default AddMovie