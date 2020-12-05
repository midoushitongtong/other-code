import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

import StackNavigator from './stack-navigator/StackNavigator';

const Navigation: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
