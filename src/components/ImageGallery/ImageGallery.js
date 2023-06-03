import React, { Component } from 'react';
import axios from 'axios';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    gallery: [],
    totalPages: 1,
    lengthArray: 0,
    isBtnVisible: false,
    page: 1,
  };
  async componentDidUpdate(prevProps, prevState) {
    const per_page = 12;
    const myApiKey = '35687240-9029e9ca17f641307dafe05a9';
    const imageType = 'photo';
    const orientation = 'horizontal';
    const safesearch = 'true';
    if (prevProps.searchInput !== this.props.searchInput) {
      console.log(prevProps.searchInput);
      console.log(this.props.searchInput);
      try {
        const { data } = await axios.get(
          `https://pixabay.com/api/?key=${myApiKey}&q=${this.props.searchInput}&image_type=${imageType}&orientation=${orientation}&safesearch=${safesearch}&page=${this.state.page}&per_page=${per_page}`
        );
        console.log(data.hits);
        console.log(this.state.searchInput);
      } catch (error) {
        console.error(error);
      }
    }
  }

  render() {
    return (
      <ul className={css.ImageGallery}>
        {this.props.searchInput}
        {/* <!-- Набір <li> із зображеннями --> */}
      </ul>
    );
  }
}

export default ImageGallery;
