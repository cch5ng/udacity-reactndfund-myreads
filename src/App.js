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
    booksList: []
  }

  //this.updateBookShelf = this.updateBookShelf.bind(this);
  //this.addBook = this.addBook.bind(this);
  //this.searchLinkHandler = this.searchLinkHandler.bind(this);

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log('books: ' + books);
      this.setState({booksList: books});
    });
  }

  // EVENT HANDLERS
  searchLinkHandler(ev) {
    // TODO (maybe move to ShelvesList?)
  }

  // case where book is existing but the shelf needs updating, default view
  updateBookShelf(book) {
    // TODO
    // copy existing bookList
    // get the index of the list element matching the book arg
    // do a slice (splice) to replace the old book with new book?
    // or just update the prop manually?
    // update the state
  }

  // case where book is new and added to shelf from search view
  addBook(book) {
    // TODO check spread operator syntax
    this.setState({booksList: [...this.state.booksList, book]})
  }

  // TODO learn the lifecycle functions better; like test and be able to explain well

  // TODO need to define routes in render (2-3 routes)
  // default route / ; search route /search
  // TODO need to define which controls and handlers are necessary
  // control for plus sign (links to /search)
  // somewhere need handlers for the drop down lists (not sure where)

  render() {
    return (
      <Router>
        <div className="app">

            <Route exact path="/" component={ShelvesList} />
            <Route path="/search" component={Search} />

        </div>
      </Router>

    )
  }
}

export default BooksApp
