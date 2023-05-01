import { Dimensions, StyleSheet } from 'react-native';
import theme from './theme';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: theme.colors.baseColor,
    height: deviceHeight,
  },
  trendingPeopleImage: {
    height: 70,
    width: 70,
    borderRadius: 500,
  },
  trendingPeopleName: {
    width: 60,
    color: theme.colors.textColor,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  trendingPeopleContainer: {
    margin: 10,
  },
  heading: {
    fontSize: 19,
    color: theme.colors.fadedColor,
    margin: 10,
  },
  posterImage: {
    height: 250,
    width: 150,
    borderRadius: 10,
  },
  movieTitle: {
    color: theme.colors.textColor,
    width: 150,
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
  },
  imageBg: {
    width: deviceWidth,
    height: 250,
  },
  detailsMovieTitle: {
    fontSize: 28,
    color: theme.colors.textColor,
    textAlign: 'center',
    marginTop: -40,
  },
  linkContainer: {
    backgroundColor: theme.colors.secondaryColor,
    borderRadius: 100,
    position: 'absolute',
    padding: 10,
    width: 45,
    top: 250,
    marginLeft: 10,
    marginTop: -20,
  }, sharingContainer: {
    alignSelf: 'flex-end',
    position: 'absolute',
    backgroundColor: theme.colors.secondaryColor,
    borderRadius: 100,
    padding: 10,    
    width: 45,
    right: 10,
    marginTop: 230,
  },
  overview: {
    color: theme.colors.textColor,
    marginHorizontal: 10,
    textAlign: 'justify',
    fontSize: 16,
  },
  details: {
    color: theme.colors.secondaryColor,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  genreContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.textColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  genre: {
    color: theme.colors.textColor,
    fontSize: 16,
  },
});

export default Styles;