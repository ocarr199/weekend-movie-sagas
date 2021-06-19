
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
function AddMovie () {


    return (
            <> 
            <h2>Add Movie</h2>
            <FormControl>
                  <TextField id="outlined-title" label="Movie Title" variant="outlined" />
                  <TextField id="outlined-url" label="Poster URL" variant="outlined" />
                  <TextField id="outlined-desc" label="Description" variant="outlined" />
                  <Select
                    //  native
                     defaultValue=''
                    //   onChange={handleChange}
        //   inputProps={{
        //     name: 'age',
        //     id: 'filled-age-native-simple',
        //   }}
        displayEmpty
        >
          <MenuItem aria-label="None" value="" />
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
        </FormControl>
            </>

    )
}

export default AddMovie