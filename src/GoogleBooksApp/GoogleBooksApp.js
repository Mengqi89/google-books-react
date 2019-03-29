import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FilterBar from '../FilterBar/FilterBar';
import BooksList from '../BooksList/BooksList';

class GoogleBooksApp extends Component {
    state = {
        books: [],
        loading: false,
    }

    handleSubmit = (e, input) => {
        this.setState({
            loading: true
        })
        e.preventDefault();
        console.log(input);

        const url =`https://www.googleapis.com/books/v1/volumes?q=${input}`;

        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong, please try again later.')
                }
                return res.json();
            })
            .then(data => {
                console.log(data)
                this.setState({
                    books: data.items,
                    loading: false
                })
            })

    }

    filterPrint = (printType) => {
        const newBooks = [];
        for (let i=0; i < this.state.books.length; i++) {
            if (this.state.books[i].volumeInfo.hasOwnProperty('printType')) {
                if (this.state.books[i].volumeInfo.printType === printType)
                newBooks.push(this.state.books[i])
            } 
        }

        this.setState({
            books: newBooks
        })
    }

    render() {
        const loading = this.state.loading
            ? <div>Loading...</div>
            : '';

        return (
            <div className="GoogleBooksApp">
                <h1>Google Books Search</h1>
                <SearchBar handleSubmit={this.handleSubmit} />
                <FilterBar handlePrintChange={this.filterPrint}/>
                {loading}
                <BooksList list={this.state.books} />
            </div>
        );
    }
}

export default GoogleBooksApp;