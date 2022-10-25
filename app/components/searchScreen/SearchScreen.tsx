import React, {FC, useState} from 'react';
import {
  Alert,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../../styles';
import {SearchScreenProps} from '../../types';
import searchScreenStyles from './searchScreenStyles';

const SearchScreen: FC<SearchScreenProps> = props => {
  const [searchQuery, setSearchQuery] = useState('');


  const bcImage = require('../../assets/pexels-mario-cuadros-2805182.jpeg');

  const submit = () => {
    if (!searchQuery) {
      Alert.alert('please enter info in the search feild');
    } else {
      props.navigation.navigate('InfoCardList', {param: searchQuery});
    }
  };


  return (
    <View style={styles.container}>
      <ImageBackground
        source={bcImage}
        resizeMode="cover"
        style={styles.image}
        blurRadius={10}>
        <View>
          <Text style={styles.titleHeader}>TVMAZE</Text>
        </View>
        <View style={searchScreenStyles.form}>
          <TextInput
            style={searchScreenStyles.txtInput}
            onChangeText={name => setSearchQuery(name)}
            value={searchQuery}
            autoCapitalize="words"
            selectTextOnFocus={true}
            placeholderTextColor="white"
          />
          <TouchableOpacity
            onPress={submit}
            style={[searchScreenStyles.button]}>
            <Text style={searchScreenStyles.bottonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View></View>
      </ImageBackground>
    </View>
  );
};
export default SearchScreen;
