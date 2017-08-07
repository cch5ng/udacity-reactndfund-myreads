import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import './App.css'

class ShelvesList extends React.Component {
  state = {
    //showSearchPage: true
  }

  // componentDidMount() {
  // }

  // TODO need to figure out details for real data; ie some dynamic data is dep
  // on which shelf type

  render() {
    let bookShelves = [];
    return (
      <div className="list-books-content">
        <div>
        {bookShelves.map((shelf) => {
            <div>
              <Shelf></Shelf>
            </div>
        })}
        </div>
      </div>
    )
  }
}

export default ShelvesList