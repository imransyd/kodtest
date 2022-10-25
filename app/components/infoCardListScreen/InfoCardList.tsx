import React, {FC, useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GlobalProvider} from '../../context/GlobalState';
import TvShowService from '../../services/SearchService';
import styles from '../../styles';
import {InformationProps, tvProgram} from '../../types';
import TvProgram from '../tvProgram/TvProgram';

const InfoCardList: FC<InformationProps> = props => {
  const [errorLoading, setErrorLoading] = useState<boolean>(false);
  const [tvShowLists, setTvShowLists] = useState<Array<tvProgram>>([]);
  const bcImage = require('../../assets/pexels-ben-mack-6775241.jpeg');

  const dimensionWidth = Dimensions.get('screen').width;

  const getTvShow = (id: number) => {
    props.navigation.navigate('TvShowInfo', {param: id});
  };

  useEffect(() => {
    TvShowService.listTvShows(props.route.params.param)
      .then((result: Array<tvProgram>) => {
        setTvShowLists(result);
        setErrorLoading(false);
      })
      .catch(() => {
        Alert.alert(' There was a error loading the show list');
        setErrorLoading(true);
      });
  }, []);

  return (
    <ImageBackground
      source={bcImage}
      resizeMode="cover"
      style={styles.image}
      blurRadius={1}>
      <View style={[styles.container, {width: dimensionWidth}]}>
        {tvShowLists.length === 0 ? (
          <View>
            <Text>Sorry! no data avalilable</Text>
          </View>
        ) : (
          <ScrollView>
            {tvShowLists.map(({show}) => {
              return (
                <TouchableOpacity
                  key={show.id}
                  onPress={() => getTvShow(show.id)}>
                  <View>
                    <TvProgram
                      key={show.id}
                      name={show.name}
                      rating={show.rating && show.rating.average}
                      imageSrc={show.image && show.image.medium}
                      url={show.url}
                      genres={show.genres}
                      summary={show.summary}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        )}
      </View>
    </ImageBackground>
  );
};
export default InfoCardList;
