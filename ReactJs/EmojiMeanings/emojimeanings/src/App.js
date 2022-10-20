import React from "react";
import Item from "./components/Item";
import dictionary from "./components/dictionary";

function CreateItem(dictionaryItems) {
  return (
    <Item
      key={dictionaryItems.id}
      emoji={dictionaryItems.emoji}
      title={dictionaryItems.title}
      content={dictionaryItems.content}
    />
  );
}

function App() {
  return (
    <section>
      <div className="dic-heading">
        <div className="dic-title">
          <h1>Emoji Meanings</h1>
        </div>
      </div>
      <div className="dic-section">{dictionary.map(CreateItem)}</div>
    </section>
  );
}

export default App;
