import React from 'react';
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
  title: 'Trending',
  headerStyle: { backgroundColor: theme.colors.baseColor },
  headerTitleStyle: { color: theme.colors.textColor }  
}