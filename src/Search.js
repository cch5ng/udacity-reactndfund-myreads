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

class Search extends React.Component {
  state = {
  }

  searchInputHandler = this.searchInputHandler.bind(this);

  //this.handleBookShelfChanger = this.handleBookShelfChanger.bind(this);

  // TODO figure out where the initial bookShelfChangerValue is coming from
  // TODO add value attrib to select element
  // TODO some dynamic data like cover img url, select value, title, author

  searchInputHandler(ev) {
    if (ev.target.value.length) {
      BooksAPI.search(ev.target.value, 25).then(books => {
        console.log('search books: ' + books);
        console.log('len search books: ' + books.length);
        this.setState({booksList: books})
      })
      console.log('user entered: ' + ev.target.value)
    }
  }

  render() {
    let booksList;
    if (this.state.booksList) {
      booksList = this.state.booksList
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <span className="close-search"></span>            
          </Link>
          <div className="search-books-input-wrapper">
            {/* 
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={this.searchInputHandler}/>
            
          </div>
        </div>
        <div className="search-books-results">
          {booksList ? (
              <BookShelf booksList={this.state.booksList} handleBookShelfChanger={this.props.handleBookShelfChanger}></BookShelf>
            ) : (
              null
            )
          }
        </div>
      </div>
    )
  }
}

export default Search
