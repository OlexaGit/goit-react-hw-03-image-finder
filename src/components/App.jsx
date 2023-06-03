import React, { Component } from 'react';
import Loader from './Loader/Loader';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import css from './App.module.css';

export class App extends Component {
  state = {
    searchInput: '',
  };

  handleFormSubmit = searchInput => {
    this.setState({ searchInput });
  };

  // async componentDidMount() {
  //   const per_page = 12;
  //   const myApiKey = '35687240-9029e9ca17f641307dafe05a9';
  //   const imageType = 'photo';
  //   const orientation = 'horizontal';
  //   const safesearch = 'true';

  //   try {
  //     const { data } = await axios.get(
  //       `https://pixabay.com/api/?key=${myApiKey}&q=${this.state.searchInput}&image_type=${imageType}&orientation=${orientation}&safesearch=${safesearch}&page=${this.state.page}&per_page=${per_page}`
  //     );
  //     console.log(data.hits);
  //     console.log(this.state.searchInput);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

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
