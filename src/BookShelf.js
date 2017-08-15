import React from 'react'
import { Link } from 'react-router-dom'
import BookGrid from './BookGrid'

// TODO refactor, this component is redundant
const BookShelf = ({ books, handleBookShelfChanger }) => (
  <div className="bookshelf-books">
    {books.length ? (
      <BookGrid books={books} handleBookShelfChanger={handleBookShelfChanger}/>
    ) : (
      <p><em>No books here! <Link to="/search">Add some</Link></em></p>
    )}
  </div>
)

export default BookShelf;
