import React, { useEffect, useState } from 'react';
import { GET } from '../services/api';
import { View, Image, FlatList, Text, TouchableOpacity, ScrollView } from 'react-native';
import { POSTER_IMAGE } from '../config';
import Styles from '../global/Styles';
import Loader from './Loader';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
interface Props {
  url: string;
  title: string;
  navigation: NativeStackNavigationProp<{ movieDetails: { movieId: number } }>;
}
interface Movie {
  id: number;
  poster_path: string;
  original_title: string;
}
const TrendingMovies = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    const getMovies = async () => {
      const data = await GET(props.url);
      setMovies(data.results);
      setLoading(false);
    };

    getMovies();
  }, []);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={Styles.heading}>{props.title}</Text>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={movies}
            horizontal
            renderItem={item => displayMovies(item, props)}
          />
        </View>
      )}
    </View>
  );
};

const displayMovies = ({ item }: { item: Movie }, props: Props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.push('movieDetails', { movieId: item.id });
      }}
      style={{ marginHorizontal: 10 }}>
      <Image
        source={{ uri: `${POSTER_IMAGE}${item.poster_path}` }}
        style={Styles.posterImage}
      />
      <Text style={Styles.movieTitle}>{item.original_title}</Text>
    </TouchableOpacity>
  );
};

export default TrendingMovies;