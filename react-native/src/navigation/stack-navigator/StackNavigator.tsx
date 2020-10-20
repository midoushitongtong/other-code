import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Test1 from '../../screens/test1/Test1';
import Test2 from '../../screens/test2/Test2';
import { StackNavigatorParamList } from './types';

const Stack = createStackNavigator<StackNavigatorParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Test2">
      <Stack.Screen name="Test1" component={Test1} />
      <Stack.Screen name="Test2" component={Test2} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
