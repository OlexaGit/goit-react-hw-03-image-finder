import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  // state = {
  //   gallery: [],
  // };

  render() {
    const { onGallery } = this.props;
    // console.log(onGallery);
    return (
      <ul className={css.ImageGallery}>
        {onGallery.map(({ id, webformatURL }) => (
          <ImageGalleryItem key={id} webformatURL={webformatURL} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
