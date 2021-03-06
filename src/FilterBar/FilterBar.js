import React, { Component } from 'react';

class FilterBar extends Component {

    render() {
        return (
            <div className="FilterBar">
                <form>
                    <label htmlFor="print-type">Print Type: </label>
                    <select id="print-type" name="print-type" onChange={(e) => this.props.handlePrintChange(e.target.value)}>
                        <option value="ALL">All</option>
                        <option value="BOOKS">Books</option>
                        <option value="MAGAZINES">Magazines</option>
                    </select>
                    <label htmlFor="book-type">Book Type: </label>
                    <select id="book-type" name="book-type">
                        <option value="none">No Filter</option>
                        <option value="not-ebook">Print Only</option>
                        <option value="ebook">Ebook</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default FilterBar;