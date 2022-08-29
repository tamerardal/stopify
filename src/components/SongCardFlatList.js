import React from 'react';
import {FlatList} from 'react-native';
import SongCard from './SongCard';
import songData from '../music-data.json';

const SongCardFlatList = song => {
  const renderSong = ({item}) => <SongCard song={item} />;
  const renderKey = item => item.id.toString();

  return (
    <FlatList
      data={songData}
      renderItem={renderSong}
      keyExtractor={renderKey}
      ListHeaderComponent={() => {}}
    />
  );
};

export default SongCardFlatList;
