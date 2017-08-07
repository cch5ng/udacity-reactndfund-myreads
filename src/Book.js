import React from 'react'
import './App.css'

class Book extends React.Component {
  state = {
    bookShelfChangerValue: "none"
  }

  this.handleBookShelfChanger = this.handleBookShelfChanger.bind(this);

  // TODO figure out where the initial bookShelfChangerValue is coming from
  // TODO add value attrib to select element

  handleBookShelfChanger(ev) {
    this.setState({bookShelfChangerValue: ev.target.value});
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
          <div className="book-shelf-changer">
            <select onChange={this.handleBookShelfChanger}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">The Adventures of Tom Sawyer</div>
        <div className="book-authors">Mark Twain</div>
      </div>
    )
  }
}

export default Book