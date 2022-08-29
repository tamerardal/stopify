import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCard.styles';

const SongCard = ({song}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.cardImage}
        source={{uri: song.imageUrl}}
        resizeMode="cover"
      />
      <View style={styles.secondCardContainer}>
        <Text style={styles.cardTitle}>{song.title}</Text>
        <View style={styles.cardTextContainer}>
          <View style={styles.secondCardTextContainer}>
            <Text style={styles.cardArtist}>{song.artist}</Text>
            <Text style={styles.cardYear}>{song.year}</Text>
          </View>
          <View style={styles.soldout}>
            <Text>SOLD OUT</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SongCard;
