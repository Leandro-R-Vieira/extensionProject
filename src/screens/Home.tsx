import React from 'react';
import { View } from 'react-native';
import Styles from '../global/Styles';
import DiscoverMovies from '../components/DiscoverMovies';
import TrendingPeople from '../components/TrendingPeople';
import TrendingMovies from '../components/TrendingMovies';

const Home = props => {
  return (
    <View style={Styles.sectionBg}>
      <DiscoverMovies navigation={props.navigation} />
      <TrendingPeople title="Trending People" url="/trending/person/week" />
      <TrendingMovies
        title="Trending Movies"
        url="/movie/top_rated"
        navigation={props.navigation}
      />
    </View>
  );
};

export default Home;