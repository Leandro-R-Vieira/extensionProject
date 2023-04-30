import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { POSTER_IMAGE } from '../../config';
import Styles from '../../global/Styles';
import Icon from '@expo/vector-icons/FontAwesome';
import {
  PosterImage,
  Card,
  Container,
  Title,
  TitleContainer,
  FavoriteButton,
} from './styles';
import Loader from '../../components/Loader';
import { GET } from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';

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

const AllMovies = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>();
  const favoriteMovie = useSelector((state: any) => state.favoriteMovie);
  const dispatch = useDispatch();

  const handleAddFavorite = (id: number) => {
    dispatch({ type: 'ADD_FAVORITE', payload: id });
  };

  const handleRemoveFavorite = (id: number) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: id });
  };

  const handleFavoritePress = (id: number) => {
    if (favoriteMovie.includes(id)) {
      handleRemoveFavorite(id);
    } else {
      handleAddFavorite(id);
    }
  };

  useEffect(() => {
    const getMovies = async () => {
      const data = await GET(props.url);
      setMovies(data.results);
      setLoading(false);
    };
    getMovies();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TitleContainer>
            <Title>{props.title}</Title>
          </TitleContainer>
          <Container>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={movies}
              numColumns={2}
              renderItem={(item) =>
                displayMovies(
                  item,
                  props,
                  favoriteMovie,
                  handleFavoritePress
                )
              }
            />
          </Container>
        </>
      )}
    </Container>
  );
};

const displayMovies = (
  { item }: { item: Movie },
  props: Props,
  favoriteMovie,
  handleFavoritePress: (id: number) => void
) => {
  return (
    <Container>
      <Card
        onPress={() => {
          props.navigation.navigate('movieDetails', { movieId: item.id });
        }}
      >
        <FavoriteButton
          style={{ zIndex: 1 }}
          onPress={() => handleFavoritePress(item.id)}
        >
          <Icon
            name={favoriteMovie.includes(item.id) ? 'heart' : 'heart-o'}
            size={20}
            color={favoriteMovie.includes(item.id) ? 'red' : '#fff'}
          />
        </FavoriteButton>
        <PosterImage source={{ uri: `${POSTER_IMAGE}${item.poster_path}` }} />
        <Text style={Styles.movieTitle}>{item.original_title}</Text>
      </Card>
    </Container>
  );
};

export default AllMovies;