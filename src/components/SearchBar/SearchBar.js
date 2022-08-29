import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = search => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder="Search.."
        onChangeText={search.onSearch}
      />
    </View>
  );
};

export default SearchBar;
