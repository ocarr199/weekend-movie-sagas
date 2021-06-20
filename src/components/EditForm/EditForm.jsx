
import React, {useState}from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function EditForm (){

const movieToEdit = useSelector((store) => store.editMovie)
console.log(movieToEdit)

const dispatch = useDispatch();

const history = useHistory();


const handleTitleChange = (event) => {
    dispatch({
        type: "EDIT_TITLE_ONCHANGE",
        payload: { property: 'title', value: event.target.value}
    })
}
    return (
        <> 
        <h2>Add Movie</h2>
        <form >
              <TextField 
              value={movieToEdit.title}
              onChange={handleTitleChange} 
              id="outlined-title" label="Movie Title"
               variant="outlined" />
              <TextField
               value={movieToEdit.description} 
            //    onChange={handleUrlChange} 
               id="outlined-url" label="Movie decsiption"
                variant="outlined" />
          
    <Button 
    
    type="submit"
    variant="contained" 
    color="primary">
    Save
  </Button>
  <Button 
    // onClick={goHome}
    variant="contained" 
    color="primary">
    Cancel
  </Button>
    </form>
        </>

)
}


export default EditForm