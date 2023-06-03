import React from 'react';
import css from './Buton.module.css';

const Button = () => {
  // LoadMoreGallery = () => {
  //   console.log('Load More');
  // };
  return (
    <div className={css.ButtonState}>
      <button className={css.Button} type="button">
        Load More
      </button>
    </div>
  );
};

export default Button;
