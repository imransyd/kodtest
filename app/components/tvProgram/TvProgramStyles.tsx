import {StyleSheet} from 'react-native';

const tvProgStyles = StyleSheet.create({
  flexRow: {flexDirection: 'row'},
  justifyContent: {justifyContent: 'flex-start'},
  marginLeft16: {marginLeft: 16},
  bold: {fontWeight: 'bold'},
  thumbnailContainer: {
    shadowColor: '#808080',
    shadowOffset: {width: -2, height: 8},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  thumbnail: {
    width: 100,
    height: 150,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
  },
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    marginHorizontal: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  shadowProperties: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
  },
  underline: {
    width: '80%',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  genreContainer: {
    width: 220,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  paragraph: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  favouriteButton: {
    backgroundColor: 'pink',
    width: 20,
    height: 20,
  },
});
export default tvProgStyles;
