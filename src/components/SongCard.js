import React from 'react';
import {View, Text} from 'react-native';
import styles from './SongCard.styles';

const SongCard = ({song}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{song.title}</Text>
      <Text>{song.artist}</Text>
    </View>
  );
};

export default SongCard;
