/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// import React, {type PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Dimensions, View} from 'react-native';
import InfoCardList from './app/components/infoCardListScreen/InfoCardList';
import TvShowInfo from './app/components/infoScreen/TvShowInfo';

import SearchScreen from './app/components/searchScreen/SearchScreen';
import {GlobalProvider} from './app/context/GlobalState';
import {RootStackParamList} from './app/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const dimensionWidth = Dimensions.get('screen').width;
  const dimensionHeight = Dimensions.get('screen').height;
  return (
    <NavigationContainer>
      <View style={{width: dimensionWidth, height: dimensionHeight}}>
        <Stack.Navigator>
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="InfoCardList" component={InfoCardList} />
          <Stack.Screen name="TvShowInfo" component={TvShowInfo} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default App;
