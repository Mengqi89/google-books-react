import React, { Component } from 'react';

class Book extends Component {
    render() {
        return (
            <div className="Book">
                <h2>Title</h2>
                <div className="image">
                    Image
                </div>
                <div className="info">
                    Author: <br/>
                    Price: 
                </div>
                <div className="book_description">
                    Description
                </div>
            </div>
        );
    }
}

export default Book;