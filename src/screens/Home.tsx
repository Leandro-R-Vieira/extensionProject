import React from 'react';
import { ScrollView, View } from 'react-native';
import Styles from '../global/Styles';
import DiscoverMovies from '../components/DiscoverMovies';
import TrendingPeople from '../components/TrendingPeople';
import TrendingMovies from '../components/TrendingMovies';

interface Props {
  navigation: any;
}

const Home = (props: Props) => {
  return (
    <ScrollView>
    <View style={Styles.sectionBg}>
      <DiscoverMovies navigation={props.navigation} />
      <TrendingPeople title="Trending People" url="/trending/person/week" />
      <TrendingMovies
        title="Trending Movies"
        url="/movie/top_rated"
        navigation={props.navigation}
      />
    </View>
    </ScrollView>
  );
};

export default Home;