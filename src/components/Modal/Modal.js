import React from 'react';
import css from './Modal.module.css';

const Modal = () => {
  console.log('Modal');
  const { onGallery } = this.props;
  // console.log(onGallery);
  return (
    <div>
      {onGallery.map(({ id, largeImageURL }) => (
        <img src={largeImageURL} alt="" />
      ))}
    </div>
  );
};
export default Modal;
