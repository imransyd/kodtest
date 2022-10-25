import {StyleSheet} from 'react-native';

const castStyle = StyleSheet.create({
  container: {
    padding: 20,
  },
  marginBttm20: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 13,
  },
  secondHeading: {
    fontSize: 18,
    fontWeight: '600',
  },
  thumbnail: {
    width: 100,
    height: 150,
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  castprofileContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  castInContainer: {
    margin: 5,
  },
});

export default castStyle;