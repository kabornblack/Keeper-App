import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";

function createNote(note) {
    return <Note 
        key={note.key}
        title={note.title}
        content={note.content}
    />;
}

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return <div>
            <Header/>
            {notes.map((noteItem, index) => {
                return <Note 
                key={index}
                id={index}
                title={noteItem.title} 
                content={noteItem.content} 
                onDelete={deleteNote} 
                />
            })}
            <CreateArea
                onAdd={addNote}
            />
            <Footer/>
    </div>
}

export default App;