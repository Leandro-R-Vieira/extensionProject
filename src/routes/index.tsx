import React from 'react';
import { AppTabRoutes } from './app.tab.routes';
import { NavigationContainer } from '@react-navigation/native';

export function Routes() {  
  return (
    <NavigationContainer>
      <AppTabRoutes /> 
    </NavigationContainer>
  );
}