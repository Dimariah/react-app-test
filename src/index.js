// no need to add ./ beacuse it is depenedency
import {createRoot} from 'react-dom/client'
import books from './books'
import Book from './Book'
import './index.css'
// name of function capitalazied so react know that it is component
// if function return nothing it i will get error
// function must return one element only
const BookList = () =>(
    <section className="BookList">
      {
        books.map(book => {
          return <Book key={book.id} {...book}/>
        })
      }
    </section>
)

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<BookList/>)