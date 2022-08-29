import React from 'react';
import {View, Text} from 'react-native';

const SongCard = ({song}) => {
  return (
    <View>
      <Text>{song.title}</Text>
    </View>
  );
};

export default SongCard;
