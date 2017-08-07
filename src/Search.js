import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class Search extends React.Component {
  state = {
    bookShelfChangerValue: "none"
  }

  //this.handleBookShelfChanger = this.handleBookShelfChanger.bind(this);

  // TODO figure out where the initial bookShelfChangerValue is coming from
  // TODO add value attrib to select element
  // TODO some dynamic data like cover img url, select value, title, author

  handleBookShelfChanger(ev) {
    this.setState({bookShelfChangerValue: ev.target.value});
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <a className="close-search"></a>            
          </Link>
          <div className="search-books-input-wrapper">
            {/* 
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"/>
            
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default Search
