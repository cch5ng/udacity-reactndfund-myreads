import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

const BookGrid = ({ books, handleBookShelfChanger }) => (
  <ol className="books-grid">
    {books.map(book => {
      return (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url('+ book.imageLinks.smallThumbnail+ ')' }}></div>
              <div className="book-shelf-changer">
                <select value={book.shelf ? book.shelf : "none"} onChange={ev => handleBookShelfChanger(book, ev.target.value)}>
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
)

export default BookGrid
