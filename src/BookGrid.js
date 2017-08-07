import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'

// class BookGrid extends React.Component {
//   state = {
//   }

  // componentDidMount() {
  // }

  // TODO here apply flexbox try for 4col grid desk
  // tablet 3col
  // phone 2col

  // render() {
  //   let booksList;
  //   if (this.props.booksList.length) {
  //     booksList = this.props.booksList;
  //     console.log('BookGrid booksList: ' + booksList);
  //   }
    // return (
    //     <div className="book-grid-container">

const BookGrid = ({ booksList, handleBookShelfChanger }) => (
          <ol className="books-grid">
            {booksList.map(book => {
              return (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url('+ book.imageLinks.smallThumbnail+ ')' }}></div>
                      <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={ev => handleBookShelfChanger(book, ev.target.value)}>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
              )
            })}
          </ol>
        //</div>
)
//   }
// }

export default BookGrid
