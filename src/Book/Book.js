import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
    render() {
        const authors = this.props.bookData.volumeInfo.authors.join(", ");

        const price = this.props.bookData.saleInfo.hasOwnProperty('retailPrice') ? this.props.bookData.saleInfo.retailPrice.amount : "No price available";

        const image = this.props.bookData.volumeInfo.hasOwnProperty('imageLinks') ? 
        <img src={this.props.bookData.volumeInfo.imageLinks.thumbnail} alt={this.props.bookData.volumeInfo.title}></img> : "No image available";

        return (
            <div className="Book">
                <h2>{this.props.bookData.volumeInfo.title}</h2>
                <div className="book_info">
                    <div className="book_image">
                        {image}
                    </div>
                    <div className="book_info_text">
                        <div className="info">
                            Author: {authors} <br />
                            Price: {price}
                        </div>
                        <div className="book_description">
                            {this.props.bookData.volumeInfo.description}
                        </div>
                    </div>
                    
                </div>
                    
            </div>
        );
    }
}

Book.defaultProps = {
    bookData: []
};

export default Book;