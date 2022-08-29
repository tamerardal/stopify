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
          {song.isSoldOut && (
            <View style={styles.soldout}>
              <Text style={styles.soldoutText}>SOLD OUT</Text>
            </View>
          )}
        </View>
        <View>
          <Text>{song.album}</Text>
        </View>
      </View>
    </View>
  );
};

export default SongCard;
