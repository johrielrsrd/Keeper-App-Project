import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item, setItem] = useState([]);

  function addNote(inputNote) {
    setItem((prevValue) => {
      return [...prevValue, inputNote];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {item.map((noteItem, noteKey) => {
        return (
          <Note
            key={noteKey}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
