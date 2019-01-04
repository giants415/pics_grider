import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar'

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID dff296d59d99c859d749d8706074ae974e87e8fe747f6fda0794887b9b5e29f4'
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}


export default App;
