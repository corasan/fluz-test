import React, { Component } from 'react';
import AppRoutes from './src/navigation';
import SearchContext from './src/SearchContext';

const API_KEY = '11684144-ab06e23739e68a5c5cb15efea';
const requestOptions = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}

class App extends Component {
  state = {
    results: []
  }

  searchImage = async (query, callback) => {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo`;

    try {
      const response = await fetch(url, requestOptions);
      const results = await response.json();
      this.setState({ results });
      
      if (callback) {
        callback();
      }
    } catch (err) {
      console.log('[App - search()]', err);
    }
  }

  render() {
    const context = {
      results: this.state.results,
      searchImage: this.searchImage
    };

    return (
      <SearchContext.Provider value={context}>
        <AppRoutes />
      </SearchContext.Provider>
    );
  }
}

export default App;
