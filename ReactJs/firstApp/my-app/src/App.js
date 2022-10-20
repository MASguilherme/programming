import React from "react";
import Card from "./components/Card";
import contacts from "./components/contacts";


function CreateCard(contact){
  return(
    <Card 
    key={contact.id}
    name={contact.name}
    img={contact.img}
    tel={contact.tel}
    email={contact.email}
    />
  );
}

function App() {
  return (
    <div className="container">
      <div className="titleAPP">
        <h1>My contats</h1>
      </div>
      {contacts.map(CreateCard)}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].img}
        tel={contacts[0].tel}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        tel={contacts[1].tel}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].img}
        tel={contacts[2].tel}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
