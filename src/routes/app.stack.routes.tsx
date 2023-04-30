import React from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import theme from '../global/theme';
import Home  from '../screens/Home';
import MovieDetails from '../screens/MovieDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
    screenOptions={{ headerTitleAlign: 'center' }}
    >     
        <Screen name="Home" component={Home}
          options={headerStyle} />
        <Screen
          name="movieDetails"
          component={MovieDetails}
          options={{ headerShown: false }}
        />
     
    </Navigator>
  );
}

const headerStyle = {
  title: 'Movies',
  headerStyle: { backgroundColor: theme.colors.baseColor },
  headerTitleStyle: { color: theme.colors.textColor },  
  headerRight: () => <Icon name="search" size={25} color={theme.colors.textColor} />
}