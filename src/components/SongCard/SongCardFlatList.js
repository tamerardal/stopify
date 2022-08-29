import React, {useState} from 'react';
import {FlatList, View, StyleSheet, SafeAreaView} from 'react-native';
import SongCard from './SongCard';
import songData from '../../music-data.json';
import SearchBar from '../SearchBar/SearchBar';

const SongCardFlatList = song => {
  const [filter, setFilter] = useState(songData);
  const renderSong = ({item}) => <SongCard song={item} />;
  const renderKey = item => item.id.toString();
  const renderSeperator = () => <View style={styles.seperator} />;
  const handleSearch = text => {
    const filteredList = songData.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setFilter(filteredList);
  };

  return (
    <SafeAreaView>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={filter}
        renderItem={renderSong}
        keyExtractor={renderKey}
        ListHeaderComponent={() => {}}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  seperator: {
    borderWidth: 0.2,
    borderColor: 'gray',
    marginRight: 10,
    marginLeft: 10,
  },
});

export default SongCardFlatList;
