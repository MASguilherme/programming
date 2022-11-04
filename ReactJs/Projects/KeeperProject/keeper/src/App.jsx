import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import InsertNote from "./components/InsertNote";

function App() {
  return (
    <section>
      <Header />
      <InsertNote />
      <Note />
      <Footer />
    </section>
  );
}

export default App;
