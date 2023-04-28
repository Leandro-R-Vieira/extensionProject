import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from '../global/theme';

const Loader = () => {
  return <ActivityIndicator size="large" color={theme.colors.textColor} />;
};

export default Loader;