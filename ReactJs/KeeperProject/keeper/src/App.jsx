import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./components/notes";
function App() {
  return (
    <section>
      <Header />
      <div className="note-section">
        <div className="note-wrap">
          {notes.map((notes) => {
            return (
              <Note
                key={notes.id}
                title={notes.title}
                content={notes.content}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default App;
