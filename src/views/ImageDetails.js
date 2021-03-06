import React from 'react';
import { View, Image, Text } from 'react-native';
import SearchContext from '../SearchContext';

const ImageDetails = () => (
  <View style={{ flex: 1, paddingVertical: 30, backgroundColor: '#000' }}>
    <SearchContext.Consumer>
      {({ selectedImage: {
        webformatHeight,
        webformatURL,
        tags
      }}) => (
        <>
          <Image
            style={{ resizeMode: 'contain', height: webformatHeight }}
            source={{ uri: webformatURL }}
          />
          <Text style={{ textAlign: 'center', color: '#fff' }}>
            Tags: {tags}
          </Text>
        </>
      )}
    </SearchContext.Consumer>
  </View>
);

export default ImageDetails;
