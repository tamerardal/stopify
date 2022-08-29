import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    marginTop: 2,
    marginBottom: 2,
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 22,
    color: 'black',
    paddingTop: 2,
  },
  cardTextContainer: {
    flexDirection: 'row',
  },
  secondCardTextContainer: {
    paddingTop: 5,
    flexDirection: 'row',
    flex: 1,
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
    flex: 1,
  },
  cardArtist: {
    color: 'black',
    fontWeight: '400',
  },
  soldout: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 3,
    textAlign: 'right',
    paddingLeft: 2,
    paddingRight: 2,
  },
  soldoutText: {
    fontSize: 12,
    paddingTop: 3,
    fontWeight: '400',
    color: 'red',
    paddingLeft: 3,
    paddingRight: 3,
  },
});
