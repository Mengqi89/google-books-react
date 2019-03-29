import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FilterBar from '../FilterBar/FilterBar';
import BooksList from '../BooksList/BooksList';

class GoogleBooksApp extends Component {
    state = {
        books: [],
        loading: false
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
                    loading: false
                })
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
                <FilterBar />
                {loading}
                <BooksList />
            </div>
        );
    }
}

export default GoogleBooksApp;