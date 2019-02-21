import React, { Component } from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SearchContext from '../SearchContext';

class Results extends Component {
  renderItem = ({ item }, selectImage) => {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        style={{ margin: 5 }}
        onPress={() => selectImage(item, () => navigate('ImageDetails'))}
      >
        <Image source={{ uri: item.previewURL }} style={styles.image} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchContext.Consumer>
          {({ results, selectImage }) => (
            <FlatList
              data={results.hits}
              keyExtractor={(item, key) => key.toString()}
              renderItem={item => this.renderItem(item, selectImage)}
              numColumns={3}
              contentContainerStyle={{ alignItems: 'center' }}
            />
          )}
        </SearchContext.Consumer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 120
  }
})

export default Results;
