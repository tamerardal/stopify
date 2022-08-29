import React from 'react';
import {View, Text} from 'react-native';

function SongCard(song) {
  return (
    <View>
      <Text>{song.title}</Text>
      <Text>{song.artist}</Text>
      <Text>{song.album}</Text>
      <Text>{song.year}</Text>
      <Text>{song.artist}</Text>
    </View>
  );
}
