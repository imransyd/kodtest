import axios from 'axios';
import React, {FC, useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Alert,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import TvShowService from '../../services/SearchService';
import {TvShowInfoProps, tvShowProps} from '../../types';
import castStyle from './infoScreenStyle';

const TvShowInfo: FC<TvShowInfoProps> = props => {
  const [tvShowData, setTvShowData] = useState<tvShowProps>();
  const [errorLoading, setErrorLoading] = useState<boolean>();
  const {width} = useWindowDimensions();

  useEffect(() => {
    TvShowService.getTvShowInfo(props.route.params.param)
      .then((result: tvShowProps) => {
        setTvShowData(result);
      })
      .catch(() => {
        Alert.alert(' There was a error loading the show info');
        setErrorLoading(true);
      });
  }, []);

  return (
    <ScrollView>
      {tvShowData && (
        <View style={castStyle.container}>
          <Text style={[castStyle.heading, castStyle.marginBttm20]}>
            {tvShowData.name}
          </Text>
          <Text style={castStyle.marginBttm20}>
            <Text style={[castStyle.secondHeading]}>Language: </Text>
            {tvShowData.language}
          </Text>
          <Text style={castStyle.marginBttm20}>
            <Text style={[castStyle.secondHeading]}>Premiered: </Text>
            {tvShowData.premiered}
          </Text>
          <Text style={castStyle.marginBttm20}>
            <Text style={[castStyle.secondHeading]}>Plot summary: </Text>
            {tvShowData.summary.replace(/<\/?[^>]+(>|$)/g, ' ')}
          </Text>
          <Text style={castStyle.marginBttm20}>
            <Text style={[castStyle.secondHeading]}>runtime: </Text>
            {tvShowData.runtime}min
          </Text>
          <Text style={[castStyle.secondHeading]}>Cast members</Text>
          <View style={[castStyle.castprofileContainer, {width: width}]}>
            {tvShowData._embedded.cast?.map(cast => {
              let imageSrc = {uri: cast.person.image?.medium};
              return (
                <View style={castStyle.castInContainer}>
                  {imageSrc && (
                    <>
                      <Image source={imageSrc} style={castStyle.thumbnail} />
                    </>
                  )}

                  <Text>{cast.person.name}</Text>
                </View>
              );
            })}
          </View>
        </View>
      )}
    </ScrollView>
  );
};
export default TvShowInfo;
