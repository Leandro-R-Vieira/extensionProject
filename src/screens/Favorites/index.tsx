import React, { useState } from 'react';
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
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

interface Props {
  navigation: NativeStackNavigationProp<{ movieDetails: { movieId: number } }>;
}

interface Movie {
  id: number;
  poster_path: string;
  original_title: string;
}

const Favorites = (props: Props) => {
  const favoriteMovie = useSelector((state: any) => state.favoriteMovie);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const handleRemoveFavorite = (id: number) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: id });
  };

  useFocusEffect(
    React.useCallback(() => {
      const getFavorites = async () => {
        const favoriteMovies = await Promise.all(
          favoriteMovie.map(async (id: number) => {
            const data = await GET(`/movie/${id}`);
            return data;
          })
        );
        setFavorites(favoriteMovies);
        setLoading(false);
      };
      getFavorites();
    }, [favoriteMovie])
  );

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TitleContainer>
            <Title>Favorites</Title>
          </TitleContainer>
          <Container>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={favorites}
              numColumns={2}
              renderItem={(item) =>
                displayMovies(item, props, handleRemoveFavorite)
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
  handleRemoveFavorite: (id: number) => void
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
          onPress={() => handleRemoveFavorite(item.id)}
        >
          <Icon name={'heart'} size={20} color={'red'} />
        </FavoriteButton>
        <PosterImage source={{ uri: `${POSTER_IMAGE}${item.poster_path}` }} />
        <Text style={Styles.movieTitle}>{item.original_title}</Text>
      </Card>
    </Container>
  );
};

export default Favorites;