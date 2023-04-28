import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import theme from '../global/theme';
import { IMAGE_POSTER_URL } from '../config';
import { GET, ResponseData } from '../services/api';

interface Movie {
  id: number;
  backdrop_path: string;
}
interface DiscoverMoviesProps {
  navigation: any;
}

const DiscoverMovies: React.FC<DiscoverMoviesProps> = props => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const response: ResponseData<{ results: Movie[] }> = await GET('/discover/movie');
      console.log(response)
      setMovies(response.results);

      const images = response.results.map(data => `${IMAGE_POSTER_URL}${data.backdrop_path}`);
      const backImages = images.slice(0, 10);
      setImages(backImages);
    };
    getMovies();
  }, []);

  return (
    <View>
      <SliderBox
        images={images}
        dotColor={theme.colors.secondaryColor}
        onCurrentImagePressed={index => props.navigation.navigate('movieDetails', { movieId: movies[index].id })}
      />
    </View>
  );
};

export default DiscoverMovies;


