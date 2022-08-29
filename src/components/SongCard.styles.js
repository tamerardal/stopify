import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    padding: 5,
    margin: 5,
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 20,
    color: 'black',
  },
  cardTextContainer: {
    flexDirection: 'row',
  },
  cardYear: {
    marginLeft: 5,
  },
  cardImage: {
    height: 100,
    width: 100,
    overflow: 'hidden',
    borderRadius: 400 / 2,
  },
  cardImageContainer: {
    flexDirection: 'row',
  },
  secondCardContainer: {
    paddingLeft: 10,
  },
  cardArtist: {
    color: 'black',
    fontWeight: '400',
  },
});
