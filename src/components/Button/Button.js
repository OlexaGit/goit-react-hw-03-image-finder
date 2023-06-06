import React from 'react';
import css from './Buton.module.css';

const Button = ({ onLoadMore }) => {
  // LoadMoreGallery = () => {
  //   console.log('Load More');
  // };
  // const { onLoadMore } = this.props;
  return (
    <div className={css.ButtonState}>
      <button onClick={onLoadMore} className={css.Button} type="button">
        {/* <button className={css.Button} type="button" onClick={this.onLoadMore}> */}
        Load More
      </button>
    </div>
  );
};

export default Button;
