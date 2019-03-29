import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        input: ''
    }

    updateInput = (input) => {
        this.setState({
            input
        })
    }

    render() {
        return (
            <div className="SearchBar">
                <form className="SearchBar_Form">
                    <label htmlFor="search_term">Search: </label>
                    <input 
                        type="text" 
                        id="search_term" 
                        name="search_term" 
                        placeholder="Ex: Harry Potter" 
                        onChange={e => this.updateInput(e.target.value) }
                    />
                    <button type="submit" onClick={e => this.props.handleSubmit(e, this.state.input)}>Search</button>
                </form>             
            </div>
        );
    }
}

export default SearchBar;