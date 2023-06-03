import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import css from './SearchForm.module.css';

class Searchbar extends Component {
  state = {
    searchInput: '',
  };

  handlesearchChange = evt => {
    this.setState({ searchInput: evt.currentTarget.value.toLowerCase() });
    // console.log(this.state.searchInput);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state.searchInput);
    this.setState({ searchInput: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>
              <ImSearch />
            </span>
          </button>
          <input
            className={css.input}
            type="text"
            name="searchInput"
            value={this.state.searchInput}
            onChange={this.handlesearchChange}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
