import React, { Component } from 'react';
import './GoogleBooksApp.css';
import SearchBar from '../SearchBar/SearchBar';
import FilterBar from '../FilterBar/FilterBar';
import BooksList from '../BooksList/BooksList';

class GoogleBooksApp extends Component {
    state = {
        books: [],
        printTypeFilter: "All",
        bookTypeFilter: "none",
        loading: false,
    }

    handleSubmit = (e, input) => {
        e.preventDefault();
        this.setState({ loading: true });

        const url =`https://www.googleapis.com/books/v1/volumes?q=${input}`;

        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong, please try again later.')
                }
                return res.json();
            })
            .then(data => {
                
                this.setState({
                    books: data.items,
                    loading: false
                })
            })
    }

    updatePrintFilter = (printType) => {
        this.setState({
            printTypeFilter: printType
        })
    }

    updateEBookFilter = (ebook) => {
        let filter = '';
        if (ebook === 'none') {
            filter = 'none';
        } else if (ebook === 'ebook') {
            filter = true;
        } else {
            filter = false;
        }
        this.setState({
            bookTypeFilter: filter
        })
    }

    render() {
        const loading = this.state.loading
            ? <div>Loading...</div>
            : '';

        const { printTypeFilter, bookTypeFilter } = this.state;

        return (
            <div className="GoogleBooksApp">
                <header>
                    <h1>Google Books Search</h1>
                </header>
                
                <SearchBar handleSubmit={this.handleSubmit} />
                <FilterBar 
                    handlePrintChange={this.updatePrintFilter}
                    handleEBookChange={this.updateEBookFilter}/>
                {loading}
                <BooksList 
                    list={this.state.books}
                    printTypeFilter={printTypeFilter}
                    bookTypeFilter={bookTypeFilter} />
            </div>
        );
    }
}

export default GoogleBooksApp;