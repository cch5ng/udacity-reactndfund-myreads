import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  componentDidMount() {
    let books = BooksAPI.getAll();
    // TODO where to save and how to pass it to where it needs go

  }

  // TODO learn the lifecycle functions better; like test and be able to explain well

  // TODO break down on paper, what components are needed
  // TODO need to define routes in render (2-3 routes)
  //  default view (3 shelves); all books view
  // TODO need to define which controls and handlers are necessary
  // control for plus sign (links to /search)
  // somewhere need handlers for the drop down lists (not sure where)

  render() {
    return (
    )
  }
}

export default BooksApp