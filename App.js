import React, { Component } from 'react';
import { Platform, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const API_KEY = '11684144-ab06e23739e68a5c5cb15efea';
const requestOptions = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}

export default class App extends Component {
  state = {
    searchText: ''
  }

  handleSearchChange = (searchText) => {
    this.setState({ searchText });
  }

  search = async () => {
    const query = this.state.searchText;
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo`;

    try {
      const response = await fetch(url, requestOptions);
      const results = await response.json();
    } catch (err) {
      console.log('[App - search()]', err);
    }
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
          <TouchableOpacity style={{ width: 40 }} onPress={this.search}>
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
