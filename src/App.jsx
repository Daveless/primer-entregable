import "./App.css";
import Quote from "./components/Quote";
import ResetIcon from "./components/ResetIcon";
import Planet from "./components/Planet";
import {
  ChangequoteButton,
  QuoteBox,
  PhraseContainer,
  TittleApp,
} from "./components/style";
import db from "../src/db/quotes.json";
import { useState } from "react";
import background1 from "../src/assets/backgrounds/1.jpg";
import background2 from "../src/assets/backgrounds/2.jpg";
import background3 from "../src/assets/backgrounds/3.jpg";
import background4 from "../src/assets/backgrounds/4.jpg";
import Author from "./components/Author";

function App() {
  /*background*/
  const backgroundsArray = [background1, background2, background3, background4];
  const [backgroud, setBackgroud] = useState(0);

  /*phrase*/

  const changeNumber = () => Math.floor(Math.random() * db.length);
  let nextIndex = 0;
  let nextBackground = 0;
  const [index, setIndex] = useState(changeNumber());

  const handler = () => {
    nextIndex = changeNumber();
    do {
      nextIndex = changeNumber();
    } while (index === nextIndex);
    setIndex(nextIndex);
    nextBackground = Math.floor(Math.random() * backgroundsArray.length);
    do {
      nextBackground = Math.floor(Math.random() * backgroundsArray.length);
    } while (backgroud === nextBackground);
    setBackgroud(nextBackground);
  };

  return (
    <div className="App">
      <TittleApp>InfoGalax</TittleApp>
      <QuoteBox bg={backgroundsArray[backgroud]}>
        <PhraseContainer>
          <Quote index={index}></Quote>
        </PhraseContainer>
        <ChangequoteButton onClick={handler}>
          <ResetIcon></ResetIcon>
        </ChangequoteButton>
        <Planet></Planet>
        <Author index={index}></Author>
      </QuoteBox>
    </div>
  );
}

export default App;
