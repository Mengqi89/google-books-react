import React, { Component } from 'react';
import Book from '../Book/Book'

class BooksList extends Component {

    filterPrintType = (item) => {
        if (
            item.volumeInfo.printType === this.props.printType 
                || this.props.printType === "ALL"
             ) {
            return true};
    };

    filterBookType = (item) => {
        if (this.props.bookType === "none") {
            return true;
        }
        else if 
        (item.saleInfo.isEbook === true && this.props.bookType === "ebook") 
        {
            return true;
        }
        else if 
        (item.saleInfo.isEbook === false && this.props.bookType === "not-ebook") 
        {
            return true;
        }
    };

    render() {
        const newBooks1 = this.props.list.filter(item => this.filterPrintType(item));
        // console.log(newBooks1)

        const newBooks2 =newBooks1.filter(item => this.filterBookType(item));
        // console.log(newBooks2)

        const books = newBooks2.map(book => {
            return <Book bookData={book} key={book.id}/>
        });

        return (
            <div className="BookList">
                {books}
            </div>
        );
    }
}

export default BooksList;