import React, { Component } from 'react';
import './FilterBar.css';

class FilterBar extends Component {

    render() {
        return (
            <div className="FilterBar">
                <form>
                    <label htmlFor="print-type">Print Type: </label>
                    <select id="print-type" name="print-type" onChange={e => this.props.handlePrintChange(e.target.value)}>
                        <option value="All">All</option>
                        <option value="BOOK">Books</option>
                        <option value="MAGAZINE">Magazines</option>
                    </select>
                    <label htmlFor="book-type">Book Type: </label>
                    <select 
                        id="book-type" 
                        name="book-type"
                        onChange={e => this.props.handleEBookChange(e.target.value)}>
                        <option value="none">No Filter</option>
                        <option value="print">Print</option>
                        <option value="ebook">Ebook</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default FilterBar;