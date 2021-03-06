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
    books: [],
    isLoading: true
  }

  handleBookShelfChanger = this.handleBookShelfChanger.bind(this);

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books, isLoading: false});
    });
  }

  // EVENT HANDLERS
  handleBookShelfChanger(book, shelfStr) {
    BooksAPI.update(book, shelfStr).then((json) => {
    });
    book.shelf = shelfStr;

    // TODO working but should refactor
    let books1 = this.state.books.filter(oBook => {
      return book.id !== oBook.id
    })
    let books2 = books1.concat(book);
    this.setState({ books: books2 });
  }

  render() {
    const { books, isLoading } = this.state;

    return (
      <Router>
        <div className="app">
          <Route exact path="/" render={()=> (
            isLoading ? (
              <p className="loading-message">Loading...</p>
            ) : (
              <ShelvesList handleBookShelfChanger={this.handleBookShelfChanger} books={this.state.books} />
            )
          )}/>
          <Route path="/search" render={()=><Search handleBookShelfChanger={this.handleBookShelfChanger} books={this.state.books} />} />
        </div>
      </Router>
    )
  }
}

export default BooksApp
