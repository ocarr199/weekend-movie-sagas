import React, {useState}from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
function AddMovie () {
    let [title, setTitle] = useState('');
    let [poster, setPoster] = useState('');
    let [description, setDescription] = useState('');
    let [genre, setGenre] = useState('');
    const dispatch = useDispatch();

    const handleTitleChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setTitle(event.target.value)
    }
    const handleUrlChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPoster(event.target.value)
    }
    const handleDescriptionChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setDescription(event.target.value)
    }

    const handleGenreChange = (event) => {
      console.log('event happened');
      //Similar to in redux -- we dont want to get rid of the id field when we update name
      setGenre(event.target.value)
  }


    const postMovie = () => {
      event.preventDefault();
      console.log('hello')
        console.log(title)
        dispatch({ type: 'POST_MOVIE', payload: {title: title, poster: poster, description: description, genre_id: genre} });
        // dispatch({ type: 'POST_GENRE' });

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
                    //  native
                     defaultValue=''
                     onChange={handleGenreChange}
                    //   onChange={handleChange}
        //   inputProps={{
        //     name: 'age',
        //     id: 'filled-age-native-simple',
        //   }}
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
        Primary
      </Button>
        </form>
            </>

    )
}

export default AddMovie