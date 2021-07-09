import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createCard(emoji) {
  return (
    <Card
      key={emoji.id}
      name={emoji.name}
      img={emoji.imgURL}
      tel={emoji.phone}
      email={emoji.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createCard)}
    </div>
  );
}

export default App;
