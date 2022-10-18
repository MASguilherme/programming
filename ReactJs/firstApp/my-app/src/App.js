import Card from "./Card";
import contacts from "./contacts";

function App() {
  return (
    <div className="container">
      <div className="titleAPP">
        <h1>My contats</h1>
      </div>
      <Card
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
      />
    </div>
  );
}

export default App;
