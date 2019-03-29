import React, { Component } from 'react';

class Book extends Component {
    render() {
        const authors = this.props.bookData.volumeInfo.authors.join(", ");

        const price = this.props.bookData.saleInfo.hasOwnProperty('retailPrice') ? this.props.bookData.saleInfo.retailPrice.amount : "No price available";

        const image = this.props.bookData.volumeInfo.hasOwnProperty('imageLinks') ? 
        <img src={this.props.bookData.volumeInfo.imageLinks.thumbnail} alt={this.props.bookData.volumeInfo.title}></img> : "No image available";

        return (
            <div className="Book">
                <h2>{this.props.bookData.volumeInfo.title}</h2>
                <div className="image">
                    {image}
                </div>
                <div className="info">
                    Author: {authors} <br/>
                    Price: {price}
                </div>
                <div className="book_description">
                    {this.props.bookData.volumeInfo.description}
                </div>
            </div>
        );
    }
}

export default Book;