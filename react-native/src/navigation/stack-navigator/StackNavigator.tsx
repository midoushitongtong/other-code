import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Test1 from '../../screens/test1/Test1';
import { StackNavigatorParamList } from './types';

const Stack = createStackNavigator<StackNavigatorParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Test1" component={Test1} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
