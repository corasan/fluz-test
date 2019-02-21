import { createContext } from 'react';

export default createContext({
  results: [],
  searchImage: () => {},
  selectImage: () => {},
  selectedImage: {}
})