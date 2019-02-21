import React, { Component } from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';
import SearchContext from '../SearchContext';

class Results extends Component {
  theValue = (context) => {
    console.log('context', context)

    return <Text>Hello</Text>
  }

  renderItem = ({ item: { previewURL, tags } }) => (
    <View style={{ margin: 5 }}>
      <Image source={{ uri: previewURL }} style={styles.image} />
    </View>
  )

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchContext.Consumer>
          {({ results }) => (
            <FlatList
              data={results.hits}
              keyExtractor={(item, key) => key.toString()}
              renderItem={this.renderItem}
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
