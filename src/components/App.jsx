export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
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
      React homework template
    </div>
  );
};
