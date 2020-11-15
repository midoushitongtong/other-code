import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import MaskView from '../../screens/mask-view/MaskView';
import { StackNavigatorParamList } from './types';

const Stack = createStackNavigator<StackNavigatorParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="MaskView">
      <Stack.Screen name="MaskView" component={MaskView} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
