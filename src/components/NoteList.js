import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



class NoteList extends Component{
    render(){
        const notes = this.props.Notes;
        const all_notes = notes.map(note => {
            return(
                <Card className="note" key={note.id} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {note.date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {note.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={() => this.props.deleteNote(note.id)} size="small" color="primary">
                            Delete Note
                        </Button>
                    </CardActions>
                </Card>
            )
        })
        return(
            <>
                {all_notes}
            </>
        )
    }
}

export default NoteList;