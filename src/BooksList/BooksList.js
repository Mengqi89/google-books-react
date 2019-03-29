import React, { Component } from 'react';
import Book from '../Book/Book'

class BooksList extends Component {

    render() {
        const { printTypeFilter, bookTypeFilter } = this.props;
        const books = this.props.list
            .filter(book => (printTypeFilter === 'All' || book.volumeInfo.printType === printTypeFilter) && (
                bookTypeFilter === 'none' || book.saleInfo.isEbook === bookTypeFilter
            ))
            .map(book => {
            return <Book bookData={book} key={book.id}/>
        })

        console.log(books.length)

        return (
            <div className="BookList">
                {books}
            </div>
        );
    }
}

BooksList.defaultProps = {
    list: []
};

export default BooksList;