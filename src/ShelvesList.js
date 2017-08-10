import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookGrid from './BookGrid'
import './App.css'

const BookShelf = ({ books, handleBookShelfChanger }) => (
  <div className="bookshelf-books">
    {books.length ? (
      <BookGrid books={books} handleBookShelfChanger={handleBookShelfChanger}/>
    ) : (
      <p><em>No books here! <Link to="/search">Add some</Link></em></p>
    )}
  </div>
)

class ShelvesList extends React.Component {
  render() {
    const books = this.props.books;
    let currentlyReading;
    let wantToRead;
    let read;
    let none;
    if (this.props.books.length) {
      currentlyReading = this.props.books.filter((book) => {
        return book.shelf === "currentlyReading";
      })
      wantToRead = this.props.books.filter((book) => {
        return book.shelf === "wantToRead";
      })
      read = this.props.books.filter((book) => {
        return book.shelf === "read";
      })
    }
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {books.length === 0 ? (
            <div>You don't have any books yet please <Link to="/search">add some</Link></div>
            ) : (

            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  {currentlyReading.length > 0 ? <BookShelf books={currentlyReading} updateBookShelf={this.props.updateBookShelf} handleBookShelfChanger={this.props.handleBookShelfChanger} ></BookShelf> : null}
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  {wantToRead.length > 0 ? <BookShelf books={wantToRead} updateBookShelf={this.props.updateBookShelf} handleBookShelfChanger={this.props.handleBookShelfChanger} ></BookShelf> : null}
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  {read.length > 0 ? <BookShelf books={read} updateBookShelf={this.props.updateBookShelf} handleBookShelfChanger={this.props.handleBookShelfChanger} ></BookShelf> : null}
                </div>
              </div>
            </div>
            )
          }

        <div className="open-search">
          <Link to="/search">
            Add a book
          </Link>
        </div>
      </div>
    </div>
    )
  }
}

export default ShelvesList
