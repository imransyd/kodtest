/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const searchScreenStyles = StyleSheet.create({
  form: {
    alignItems: 'center',
    flexDirection: 'column',
    padding: 18,
    marginHorizontal: '10%',
    color: 'white',
  },

  txtInput: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: 'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  labels: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  bottonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
export default searchScreenStyles;
