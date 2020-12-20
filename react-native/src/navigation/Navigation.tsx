import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

import Stack from './stack/Stack';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default Navigation;
