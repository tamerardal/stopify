import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.text}>Search..</TextInput>
    </View>
  );
};

export default SearchBar;
