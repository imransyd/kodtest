import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {GlobalProvider} from '../../context/GlobalState';
import tvProgStyles from './TvProgramStyles';

const TvProgram: FC<any> = props => {
  let imageSrc = {uri: props.imageSrc};
  let summury = props.summary?.replace(/<\/?[^>]+(>|$)/g, ' ');
  return (
    // <SafeAreaView style={styles.container}>
    <View style={tvProgStyles.container}>
      <View
        style={[
          tvProgStyles.card,
          tvProgStyles.shadowProperties,
          tvProgStyles.flexRow,
          tvProgStyles.justifyContent,
        ]}>
        <View style={tvProgStyles.thumbnailContainer}>
          <Image
            source={imageSrc}
            style={tvProgStyles.thumbnail}
            borderRadius={5}
          />
        </View>
        <View style={tvProgStyles.marginLeft16}>
          <Text style={tvProgStyles.heading}>{props.name}</Text>
          <View style={tvProgStyles.underline}></View>
          <Text>{props.rating}</Text>

          <View style={tvProgStyles.paragraph}>
            <View
              style={[
                tvProgStyles.justifyContent,
                tvProgStyles.genreContainer,
              ]}>
              <Text style={tvProgStyles.bold}>Genres: </Text>
              {props.genres.map((x: string) => (
                <Text style={{marginRight: 4}}>{x},</Text>
              ))}
            </View>
            <Text style={tvProgStyles.bold}>Summary: </Text>
            <Text
              numberOfLines={4}
              ellipsizeMode="tail"
              style={{width: 200}}
              lineBreakMode="clip">
              {summury ? summury : 'Their is no summary present'}
            </Text>

            {/* replace(/<\/?[^>]+(>|$)/g, " ") */}
          </View>
        </View>
      </View>
    </View>
    // </SafeAreaView>
  );
};
export default TvProgram;
