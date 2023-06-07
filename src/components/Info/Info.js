import React, { Component } from 'react';
import css from './Info.module.css';

class Info extends Component {
  render() {
    // if (totalHits === 0) {
    //   Notiflix.Notify.info('Nothing found!');
    //   console.log('nothing found');
    // }
    return <h1 className={css.info}> Nothing found! try again...</h1>;
  }
}
export default Info;
