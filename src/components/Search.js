import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

class Search extends Component{
    state = {
        title: '',
    }

    render(){
        console.log(this.state.title)
        return(
            <div className="search">
            {/*this is our search icon within our search bar and I have fixed it's size to 1.3em*/}
            <Autocomplete
                onChange={(event, newValue) => {
                    this.setState({
                        title : newValue
                    })
                    
                }}

                disablePortal
                id="combo-box-demo"
                options={this.props.notes.map(note => {return(note.title)})}
                sx={{ width: 10000 }}
                renderInput={(params) => <TextField {...params} label="Search for your notes..." />}
                />
            </div>
            )
    }
}

export default Search;