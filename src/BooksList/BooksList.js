import React, { Component } from 'react';
import Book from '../Book/Book'

class BooksList extends Component {
    render() {
        return (
            <div className="BookList">
                <Book />
            </div>
        );
    }
}

export default BooksList;