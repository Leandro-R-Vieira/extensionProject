import React from 'react';
import { Container } from './styles';
import AllMovies from '../../components/AllMovies/AllMovies';

interface Props {
  navigation: any;
}

const MovieList = (props: Props) => {  
  return (
    <Container>      
      <AllMovies
        title="Popular Movies"
        url="/movie/popular"
        navigation={props.navigation}
      />
    </Container>
  );
};

export default MovieList;