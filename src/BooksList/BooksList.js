import React, { Component } from 'react';
import Book from '../Book/Book'

class BooksList extends Component {
    render() {
        const books = this.props.list.map(book => {
            return <Book bookData={book} key={book.id}/>
        })

        return (
            <div className="BookList">
                {books}
            </div>
        );
    }
}

export default BooksList;