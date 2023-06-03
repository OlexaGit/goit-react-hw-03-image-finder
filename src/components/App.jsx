import React, { Component } from 'react';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { getGallery } from './Api/JsonPixabayApi';
import css from './App.module.css';

export class App extends Component {
  state = {
    gallery: [],
    searchInput: '',
    totalPages: 1,
    lengthArray: 0,
    isBtnVisible: false,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    // if (
    //   this.state.page !== prevState.page ||
    //   this.state.query !== prevState.query
    // ) {
    //   fetch();
    // }
    if (prevState.searchInput !== this.state.searchInput) {
      try {
        const gallery = await getGallery(this.state.searchInput);
        this.setState({ gallery });
        console.log(gallery);
      } catch (error) {
        console.error(error);
      }
    }
  }

  handleFormSubmit = searchInput => {
    this.setState({ searchInput });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmitSearchInput={this.handleFormSubmit} />
        <ImageGallery searchInput={this.state.searchInput} />
        <Loader />
        {/* Ось рекомендації до 3ДЗ. 
            Image Finger: Вся основна логіка повинна бути в Арр 
            Використовувати componentDidUpdate і робити запит на бекенд потрібно в Арр 
            Достатньо однієї умови для запиту 
            componentDidUpdate(prevProps, prevState){ if(this.state.page !== prevState.page || this.state.query!== prevState.query ){ fetch() } } 
            Функція для запиту повинна бути в окремому файлі, в Арр її лише викликаємо 
            Коли на бекенді закінчилися фото, приховуємо кнопку “Load more” 
            Для перевірки можна використовувати слова для пошуку “min” “max” 
            Один із варіантів реалізації приховування кнопки 
            “Load more” this.steState(prev =>({ images: [...prev.images, ...hits], loadMore: this.state.page < Math.ceil(totalHits / 12 ) })) 
            Не забуваємо коректно опрацьовувати слухача для клавіатури в компоненті модального вікна. */}
      </div>
    );
  }
}
