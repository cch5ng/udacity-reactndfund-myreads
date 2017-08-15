import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookGrid from './BookGrid'
import BookShelf from './BookShelf'
import './App.css'

class Search extends React.Component {
  state = {
    query: "",
    searchResults: []
  }

  searchInputHandler = this.searchInputHandler.bind(this);
  updateBookShelves = this.updateBookShelves.bind(this);
  dictBookIdToShelf = this.dictBookIdToShelf.bind(this);

  // TODO know that this basic logic for search and updating book shelf
  // works but should try to refactor it
  searchInputHandler(ev) {
    let query = ev.target.value;
    if (query.length) {
      BooksAPI.search(query, 25).then(results => {
        if (results.length) {
          let newSearchResults = this.updateBookShelves(results)
          this.setState({searchResults: newSearchResults, query})
        } else {
          this.setState({searchResults: [], query})
        }
      })
    }
  }

  updateBookShelves(searchResults) {
    let updatedSearchResults = []
    let idShelfDict = this.dictBookIdToShelf();

    searchResults.forEach(book => {
      if (idShelfDict[book.id]) {
        book.shelf = idShelfDict[book.id]
      } else {
        book.shelf = "none"
      }
      updatedSearchResults.push(book);
    })

    return updatedSearchResults;
  }

  // HELPERS
  dictBookIdToShelf() {
    let dict = {};

    this.props.books.forEach(book => {
      dict[book.id] = book.shelf
    })
    return dict;
  }

  render() {
    let searchResults;
    if (this.state.searchResults) {
      searchResults = this.state.searchResults
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <span className="close-search"></span>            
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.searchInputHandler}/>            
          </div>
        </div>
        <div className="search-books-results">
          {searchResults ? (
              <BookShelf books={this.state.searchResults} handleBookShelfChanger={this.props.handleBookShelfChanger}></BookShelf>
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
