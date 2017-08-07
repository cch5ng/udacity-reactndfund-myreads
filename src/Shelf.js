import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookGrid from './BookGrid'
import './App.css'

class Shelf extends React.Component {
  state = {
  }

  // componentDidMount() {
  // }

  // TODO title should be dynamic

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <BookGrid></BookGrid>
        </div>
      </div>
    )
  }
}

export default Shelf
