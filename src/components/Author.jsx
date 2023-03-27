import db from '../db/quotes.json'
import style from '../style/author.module.css'

const Author = ({index}) => {
  return (
    <p className={style.author}>Source: {db[index].author}</p>
  )
}
export default Author