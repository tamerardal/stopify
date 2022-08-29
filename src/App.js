import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import SongCardFlatList from './components/SongCardFlatList';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SongCardFlatList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
