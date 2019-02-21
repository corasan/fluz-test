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
    results: [],
    selectedImage: null
  }

  searchImage = async (query, callback) => {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo`;

    try {
      const response = await fetch(url, requestOptions);
      const results = await response.json();
      this.setState({ results });
      
      if (callback) callback();
    } catch (err) {
      console.log('[App - search()]', err);
    }
  }

  selectImage = (selectedImage, callback) => {
    this.setState({ selectedImage });

    if (callback) callback();
  }

  render() {
    const { results, selectedImage } = this.state;

    const context = {
      results,
      selectedImage,
      searchImage: this.searchImage,
      selectImage: this.selectImage,
    };

    return (
      <SearchContext.Provider value={context}>
        <AppRoutes />
      </SearchContext.Provider>
    );
  }
}

export default App;
