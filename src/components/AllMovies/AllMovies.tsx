import Modal from 'react-native-modal';
import { GET } from '../../services/api';
import Styles from '../../global/Styles';
import Loader from '../../components/Loader';
import Icon from '@expo/vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, Text, TouchableOpacity, Button, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { POSTER_IMAGE, SEARCH_URL, API_KEY, BASE_URL } from '../../config';
import {
  Card,
  Title,
  Container,
  GenreTitle,
  SearchInput,
  PosterImage,
  ModalButton,
  SeacrhWrapper,
  TitleContainer,
  FavoriteButton,
  ModalContainer,
  GenreSeparator,
  GenreHeadTitle,
  GenreTitleContainer,
} from './styles';
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
  const [query, setQuery] = useState('');
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [initialMovies, setInitialMovies] = useState<Movie[]>();

  const favoriteMovie = useSelector((state: any) => state.favoriteMovie);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    setSelectedGenre(null);
    if (query === '') {
      setMovies(initialMovies);
    } else {
      const response = await fetch(`${SEARCH_URL}${encodeURIComponent(query)}`);
      response.json().then((data) => { setMovies(data.results) });
    }
  };

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

  const handleSelectGenre = (genreId) => {
    setSelectedGenre(genreId);
    setIsModalOpen(false);
  };  

    useEffect(() => {
      const getMovies = async () => {
        const data = await GET(props.url);
        setMovies(data.results);
        setInitialMovies(data.results);
        setLoading(false);
        data.results.forEach(() => { });
      };
      getMovies();
    }, []);

    useEffect(() => {
      const fetchGenres = async () => {
        const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
        const data = await response.json();
        setGenres(data.genres);
      };
      fetchGenres();
    }, []);

    const filteredMovies = selectedGenre ? movies.filter((movie) => movie.genre_ids.includes(selectedGenre)) : movies;

    return (
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <>
            <SeacrhWrapper>
              <ModalButton onPress={() => setIsModalOpen(true)}>
                <Icon name="bars" size={35} color="white" />
              </ModalButton>
              <SearchInput
                placeholder="Search for a movie"
                onChangeText={(text: string) => {
                  setQuery(text);
                  handleSearch();
                }} />
            </SeacrhWrapper>
            <TitleContainer>
              <Title>{props.title}</Title>
            </TitleContainer>            
            <Container>
              <Modal
                visible={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                style={{ margin: 0, justifyContent: 'flex-start', alignItems: 'flex-start' }}
                onBackdropPress={() => setIsModalOpen(false)}
              >
                <ModalContainer>
                  <GenreHeadTitle>Filter by genre</GenreHeadTitle>
                  {genres.map((genre, index) => (
                    <GenreTitleContainer >
                      {index > 0 && <GenreSeparator />}
                      <TouchableOpacity key={genre.id} onPress={() => handleSelectGenre(genre.id)}>
                        <GenreTitle>{genre.name}</GenreTitle>
                      </TouchableOpacity>
                    </GenreTitleContainer>
                  ))}
                </ModalContainer>
              </Modal>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={filteredMovies}
                numColumns={2}                
                renderItem={(item) =>
                  displayMovies(
                    item,
                    props,
                    favoriteMovie,
                    handleFavoritePress,
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
    favoriteMovie: any,
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