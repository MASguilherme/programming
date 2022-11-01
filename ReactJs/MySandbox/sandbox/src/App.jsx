import React, { useState } from "react";



function App() {
  const [headingText, setHeadingText] = useState();
  function Change(event){
    setHeadingText(event.target.value);

  }

  return (
    <section>
      <h1>{headingText}</h1>
      <input type="text" onChange={Change} 
      placeholder="What's your name?" 
      name="headingText" />
      <button type="submit">Send</button>
    </section>
  );
}

export default App;
