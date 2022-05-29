import React, {Component} from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Header from './components/Header';
// import Search from './components/Search';
import NoteList from './components/NoteList';
import {Card, Box ,CardActions, CardContent,Button, Typography, TextField, Stack} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';


class App extends Component {
  state = {
    search: '',
    note: '', 
    notes:[
      {id: nanoid(), title:'This is #1 note.', date: '5/28/2022'},
      {id: nanoid(), title:'This is #2 note.', date: '5/28/2022'},
      {id: nanoid(), title:'This is #3 note.', date: '5/28/2022'},
    ]
  }

  handelChange = (e) => {
    this.setState({
      note:e.target.value,
    })
  }

  saveNote = (e) => {
    e.preventDefault();
    let notes = this.state.notes;
    let note = this.state.note;
    const date = new Date();
    if (note !== ''){
      notes.push({id:nanoid(), title:note, date:date.toLocaleDateString()})
    }
    this.setState({
      note:'',
      notes: notes,
    })
  }


  deleteNote = (id) => {
    let notes  = this.state.notes.filter((note) => note.id !== id)
    this.setState({
      notes:notes
    })
  }

  handelSearch = (e) => {
    console.log(e.target.value)
    // this.setState({
    //   note:e.target.value,
    // })
  }


  SearchNote = () => {
    let search = this.state.search;
    let notes  = this.state.notes.filter((note) => note.title === search);
    this.setState({
      notes:notes
    })
  }
  
  render(){
    console.log(this.state.notes)
    return (
        <>
        <div>
          <Header />
        </div>
        <div>
        <div className="search">
            {/*this is our search icon within our search bar and I have fixed it's size to 1.3em*/}
            <Autocomplete
                onChange={(event, newValue) => {
                    this.setState({
                        search : newValue
                    })
                    
                }}
                onSubmit={this.SearchNote}
                disablePortal
                id="combo-box-demo"
                options={this.state.notes.map(note => {return(note.title)})}
                sx={{ width: 10000 }}
                renderInput={(params) => <TextField {...params} label="Search for your notes..." />}
                />
            </div>

        </div>
        <div className="notes-list">
          <NoteList Notes={this.state.notes} deleteNote={this.deleteNote} />
          <Box sx={{ maxWidth: 275 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                    <Typography variant="p">
                      <Box onClick={this.saveNote} component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
                      <div>
                        <TextField id="outlined-multiline-static" value={this.state.note} onChange={this.handelChange} label="Note" multiline rows={4}/>
                        <CardActions>
                          <Stack direction="row" spacing={2}>
                            <Button variant="contained" >
                              Save Note
                            </Button>
                          </Stack>
                        </CardActions>
                      </div>
                      </Box>
                    </Typography>
                    </CardContent>
                </React.Fragment>
            </Card>
          </Box>
        </div>
        </>
    );
  }
}

export default App;
