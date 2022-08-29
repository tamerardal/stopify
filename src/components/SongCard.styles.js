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
    paddingTop: 10,
  },
  cardTextContainer: {
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  secondCardTextContainer: {
    paddingTop: 5,
    flexDirection: 'row',
  },
  cardYear: {
    marginLeft: 5,
  },
  cardImage: {
    height: 80,
    width: 80,
    overflow: 'hidden',
    borderRadius: 400 / 2,
  },
  cardImageContainer: {
    flexDirection: 'row',
  },
  secondCardContainer: {
    paddingLeft: 20,
  },
  cardArtist: {
    color: 'black',
    fontWeight: '400',
  },
  soldout: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 3,
  },
});
