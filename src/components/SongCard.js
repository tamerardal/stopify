import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCard.styles';

const SongCard = ({song}) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={{uri: song.imageUrl}} />
      <Text style={styles.cardTitle}>{song.title}</Text>
      <View style={styles.cardTextContainer}>
        <Text>{song.artist}</Text>
        <Text style={styles.cardYear}>{song.year}</Text>
      </View>
    </View>
  );
};

export default SongCard;
