import {ChangequoteButton} from "./style"
import Quote from "./Quote"
import db from '../db/quotes.json'
import { useState } from "react";

console.log(db[0].phrase);

const changeNumber = () => Math.floor(Math.random()*db.length)





const quoteBox = () => {

let nextIndex = 0
  const [index, setIndex] = useState(changeNumber())
 const handler = () => {
    nextIndex = changeNumber()
    do{
      nextIndex = changeNumber()
    }while(index === nextIndex)
    setIndex(nextIndex)
  }

  return (
    <div>        
        <Quote index={index}></Quote>
        <ChangequoteButton onClick={handler}>asd</ChangequoteButton>
    </div>
  )
}
export default quoteBox