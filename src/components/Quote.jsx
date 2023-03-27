import db from '../db/quotes.json'
const Quote = ({index}) => {
  return (
    <>
        <p>{db[index].phrase}</p>        
    </>
  )
}
export default Quote