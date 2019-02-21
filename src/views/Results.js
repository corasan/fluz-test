import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import SearchContext from '../SearchContext';

class Results extends Component {
  theValue = (context) => {
    console.log('context', context)

    return <Text>Hello</Text>
  }

  render() {
    console.log('context', this.context)
    return (
      <View style={{ flex: 1 }}>
        <SearchContext.Consumer>
          {value => this.theValue(value)}
        </SearchContext.Consumer>
      </View>
    );
  }
}

export default Results;
