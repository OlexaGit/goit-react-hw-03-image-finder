import React, { Component } from 'react';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { getGallery } from './Api/JsonPixabayApi';
import css from './App.module.css';
import ErrorWrapper from './Page/ErrorWrapper';
import Info from './Info/Info';

export class App extends Component {
  state = {
    gallery: [],
    searchInput: '',
    isError: false,
    total: 0,
    totalHits: 1,
    isLoaderVisible: false,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchInput !== this.state.searchInput ||
      this.state.page !== prevState.page
    ) {
      try {
        this.setState({ isLoaderVisible: true });
        const data = await getGallery(this.state.searchInput, this.state.page);
        const gallery = data.hits;

        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...gallery],
          total: data.total,
          totalHits: data.totalHits,
        }));
      } catch (error) {
        this.setState({ isError: true });
        console.error(error);
      } finally {
        this.setState({ isLoaderVisible: false });
      }
    }
  }

  handleFormSubmit = searchInput => {
    this.setState({
      searchInput,
      page: 1,
      gallery: [],
    });
  };

  LoadMoreGallery = () => {
    let nextPage = this.state.page;
    this.setState({ page: nextPage + 1 });
    console.log('page:', this.state.page);
  };

  render() {
    console.log('totalHits:', this.state.totalHits);

    const { isLoaderVisible, isError, gallery, totalHits } = this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmitSearchInput={this.handleFormSubmit} />
        {isLoaderVisible && <Loader />}

        <ErrorWrapper isError={isError}>
          <ImageGallery onGallery={gallery} />

          {totalHits > 12 && <Button onLoadMore={this.LoadMoreGallery} />}
          {totalHits === 0 && <Info />}
        </ErrorWrapper>
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
