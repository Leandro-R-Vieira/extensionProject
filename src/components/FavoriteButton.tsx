import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MovieItem = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View>
      <Text>{movie.title}</Text>
      <TouchableOpacity onPress={handleFavoritePress}>
        <Text>{isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieItem;