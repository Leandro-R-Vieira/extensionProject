import theme from '../global/theme';
import { Platform } from 'react-native';
import  MovieList from '../screens/MovieList';
import  Favorites from '../screens/Favorites';
import Ionicons from '@expo/vector-icons/Ionicons';
import MovieDetails from '../screens/MovieDetails';
import { AppStackRoutes } from './app.stack.routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  return (
    <Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.secondaryColor,
      tabBarInactiveTintColor: theme.colors.textColor,
      tabBarLabelStyle: {
        fontSize: 12,
      },
      tabBarStyle: {
        height: 78,
        backgroundColor: theme.colors.baseColor,
        paddingBottom: Platform.OS === 'ios' ? 20 : 12,
      },
    }}
    >
      <Screen 
        name="Trending"
        component={AppStackRoutes} 
        listeners={({ navigation }) => ({
          tabPress: e => {
            navigation.navigate('Home');
          },
        })}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="star" size={30} color={color} />
          ),
        }}
      />
      <Screen
        name="Movies"
        component={MovieList}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="film-outline" size={37} color={color} />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={37} color={color} />
          ),
        }}
      />       
      <Screen
        name="Movie Details"
        component={MovieDetails}
        options={{
          tabBarButton: () => null,
        }}
      />     
    </Navigator>
  );
}