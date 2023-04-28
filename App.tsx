import * as React from 'react';
import Home from './src/screens/Home';
import MovieDetails from './src/screens/MovieDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from './src/global/theme';
import Icon from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Home" component={Home}
          options={headerStyle} />
        <Stack.Screen
          name="movieDetails"
          component={MovieDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerStyle = {
  title: 'Movies',
  headerStyle: { backgroundColor: theme.colors.baseColor },
  headerTitleStyle: { color: theme.colors.textColor },
  headerLeft: () => <Icon name="menu" size={34} color={theme.colors.textColor} />,
  headerRight: () => <Icon name="search" size={25} color={theme.colors.textColor} />
}

export default App;
