import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ShelvesList from './ShelvesList'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    booksList: [],
    isLoading: true
  }

  //this.updateBookShelf = this.updateBookShelf.bind(this);
  //this.addBook = this.addBook.bind(this);
  //this.searchLinkHandler = this.searchLinkHandler.bind(this);
  // correct syntax; don't use this on the left
  handleBookShelfChanger = this.handleBookShelfChanger.bind(this);

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log('books: ' + books);
      this.setState({booksList: books, isLoading: false});
    });
  }

  // EVENT HANDLERS
  searchLinkHandler(ev) {
    // TODO (maybe move to ShelvesList?)
  }

  handleBookShelfChanger(book, shelfStr) {
    console.log('book title: ' + book.title);
    console.log('shelfStr: ' + shelfStr);
    let curIdx = -1;
    for (var i = 0; i < this.state.booksList.length; i++) {
      if (book.title === this.state.booksList[i].title) {
        curIdx = i;
        console.log('i: ' + i);
        break;
      }
    }

    // case book moved from a diff shelf
    if (curIdx > -1) {
      const slicePref = this.state.booksList.slice(0, i);
      const sliceSuf = this.state.booksList.slice(i + 1);
      let updateBook = Object.assign({}, this.state.booksList[i]);
      updateBook.shelf = shelfStr;
      this.setState({booksList: [...slicePref, updateBook, ...sliceSuf]})      
    }

    // case book moved from search to shelf
    // TODO test
    this.setState({booksList: [...this.state.booksList, book]});

  }

  // TODO learn the lifecycle functions better; like test and be able to explain well

  // TODO need to define routes in render (2-3 routes)
  // default route / ; search route /search
  // TODO need to define which controls and handlers are necessary
  // control for plus sign (links to /search)
  // somewhere need handlers for the drop down lists (not sure where)

  render() {
    const { booksList, isLoading } = this.state;

    return (
      <Router>
        <div className="app">
          <Route exact path="/" render={()=> (
            isLoading ? (
              <p className="loading-message">Loading...</p>
            ) : (
              <ShelvesList handleBookShelfChanger={this.handleBookShelfChanger} booksList={this.state.booksList} />
            )
          )}/>
          <Route path="/search" render={()=><Search handleBookShelfChanger={this.handleBookShelfChanger} />} />
        </div>
      </Router>
    )
  }
}

export default BooksApp
