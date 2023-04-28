import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, Text } from 'react-native';
import { GET } from '../services/api';
import Loader from './Loader';
import Styles from '../global/Styles';
import { IMAGE_POSTER_URL } from '../config';

interface Props {
  url: string;
  isForPage?: string;
  title: string;
}

interface Person {
  id: string;
  profile_path: string;
  name: string;
}

const TrendingPeople: React.FC<Props> = props => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState<Person[]>();

  useEffect(() => {
    const getPeople = async () => {
      const data = await GET(props.url);
      setPeople(props.isForPage === 'details' ? data.cast : data.results);
      setLoading(false);
    };

    getPeople();
  }, []);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={Styles.heading}>{props.title}</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={people}
            renderItem={displayPeople}
            horizontal
          />
        </View>
      )}
    </View>
  );
};

const displayPeople = ({ item }: { item: Person }) => {
  return (
    <View style={Styles.trendingPeopleContainer}>
      <Image
        source={{ uri: `${IMAGE_POSTER_URL}${item.profile_path}` }}
        style={Styles.trendingPeopleImage}
      />
      <Text style={Styles.trendingPeopleName}>{item.name}</Text>
    </View>
  );
};

export default TrendingPeople;