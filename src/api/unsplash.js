import axios from 'axios';

// customized copy of axios to a specific location (ie. headers)
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID dff296d59d99c859d749d8706074ae974e87e8fe747f6fda0794887b9b5e29f4'
  }
});
