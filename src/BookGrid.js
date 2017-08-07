import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'

class BookGrid extends React.Component {
  state = {
  }

  // componentDidMount() {
  // }

  // TODO here apply flexbox try for 4col grid desk
  // tablet 3col
  // phone 2col

  render() {
    let bookList = [];
    return (
        return (
          <div className="book-grid-container">
            <ol className="books-grid">
              bookList.map((book) => {
                return(
                  <li>
                    <Book></Book>
                  </li>
                )
              });
            </ol>
          </div>
        )
    )
  }
}

export default BookGrid