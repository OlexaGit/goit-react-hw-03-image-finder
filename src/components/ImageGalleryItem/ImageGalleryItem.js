import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { webformatURL } = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img className={css.image} src={webformatURL} alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
