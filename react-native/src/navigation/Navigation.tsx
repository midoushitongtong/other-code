import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

import Stack from './stack-navigator/StackNavigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default Navigation;
