import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
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
    paddingTop: 10,
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
    fontSize: 14,
    fontWeight: '400',
  },
});
