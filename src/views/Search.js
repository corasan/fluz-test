import React, { Component, createContext } from 'react';
import { Platform, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import SearchContext from '../SearchContext';

export default class Search extends Component {
  state = {
    searchText: ''
  }

  handleSearchChange = (searchText) => {
    this.setState({ searchText });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <SearchContext.Consumer value={this.state.results}>
        {({ results, searchImage }) => (
          <View style={styles.container}>
            <View style={styles.searchContainer}>
              <TextInput
                value={this.state.searchText}
                onChangeText={this.handleSearchChange}
                style={styles.input}
                placeholder="Search image"
              />
              <TouchableOpacity
                style={{ width: 40 }}
                onPress={() => searchImage(this.state.searchText, () => navigate('Results'))}
              >
                <Icon
                  name="search"
                  color="#a8a8a8"
                  size={34}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </SearchContext.Consumer>
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
