import React, { Component } from 'react';
import Book from '../Book/Book'

class BooksList extends Component {

    render() {
        console.log(this.props.list);
        console.log(this.props.printType);
        const newBooks = this.props.list.filter(item => {
            if (item.volumeInfo.printType === this.props.printType || this.props.printType === "ALL") {
                return true;
            }
        });
        console.log(newBooks)

        const books = newBooks.map(book => {
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