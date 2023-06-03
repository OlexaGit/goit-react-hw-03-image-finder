import axios from 'axios';

const page = 1;
const per_page = 12;
const myApiKey = '35687240-9029e9ca17f641307dafe05a9';
const imageType = 'photo';
const orientation = 'horizontal';

export const getGallery = async search => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=${myApiKey}&image_type=${imageType}&orientation=${orientation}&per_page=${per_page}`
  );
  return data.hits;
};
