import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookGrid from './BookGrid'
import './App.css'

const BookShelf = ({ booksList, handleBookShelfChanger }) => (
  <div className="bookshelf-books">
    {booksList.length ? (
      <BookGrid booksList={booksList} handleBookShelfChanger={handleBookShelfChanger}/>
    ) : (
      <p><em>No books here! <Link to="/search">Add some</Link></em></p>
    )}
  </div>
)

class ShelvesList extends React.Component {
  state = {
    //showSearchPage: true
  }

  // componentDidMount() {
  // }

  // TODO need to figure out details for real data; ie some dynamic data is dep
  // on which shelf type

  render() {
    const booksList = this.props.booksList;
    let currentlyReading;
    let wantToRead;
    let read;
    let none;
    if (this.props.booksList.length) {
      console.log('ShelvesList this.props.booksList: ' + this.props.booksList);
      console.log('book type: ' + typeof this.props.booksList[0]);

      currentlyReading = this.props.booksList.filter((book) => {
        return book.shelf === "currentlyReading";
      })
      wantToRead = this.props.booksList.filter((book) => {
        return book.shelf === "wantToRead";
      })
      read = this.props.booksList.filter((book) => {
        return book.shelf === "read";
      })

      console.log('len currentlyReading: ' + currentlyReading.length);
      console.log('len wantToRead: ' + wantToRead.length);
      console.log('len read: ' + read.length);
    }
    //                <BookGrid booksList={wantToRead} ></BookGrid>
    //                <BookGrid booksList={read} ></BookGrid>
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {booksList.length === 0 ? (
            <div>You don't have any books yet please <Link to="/search">add some</Link></div>
            ) : (

            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  {currentlyReading.length > 0 ? <BookShelf booksList={currentlyReading} updateBookShelf={this.props.updateBookShelf} handleBookShelfChanger={this.props.handleBookShelfChanger} ></BookShelf> : null}
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  {wantToRead.length > 0 ? <BookShelf booksList={wantToRead} updateBookShelf={this.props.updateBookShelf} handleBookShelfChanger={this.props.handleBookShelfChanger} ></BookShelf> : null}
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  {read.length > 0 ? <BookShelf booksList={read} updateBookShelf={this.props.updateBookShelf} handleBookShelfChanger={this.props.handleBookShelfChanger} ></BookShelf> : null}
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
