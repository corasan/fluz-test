import React, { Component } from 'react';
import { Platform, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class App extends Component {
  state = {
    searchText: ''
  }

  handleSearchChange = (searchText) => {
    this.setState({ searchText })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            value={this.state.searchText}
            onChangeText={this.handleSearchChange}
            style={styles.input}
            placeholder="Search image"
          />
          <TouchableOpacity style={{ width: 40 }}>
            <Icon
              name="search"
              color="#a8a8a8"
              size={34}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 20,
    paddingTop: 100
  },
  input: {
    height: 50,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    paddingLeft: 20,
    fontSize: 18,
    flex: 1
  },
  searchContainer: {
    width: '100%',
    borderColor: '#d3d3d3',
    borderRadius: 100,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5
  }
});
