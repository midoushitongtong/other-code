import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Accordion from '../../screens/accordion/Accordion';
import MaskView from '../../screens/mask-view/MaskView';
import SwitchTest from '../../screens/switch-test/SwitchTest';
import { StackNavigatorParamList } from './types';

const Stack = createStackNavigator<StackNavigatorParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Accordion">
      <Stack.Screen name="MaskView" component={MaskView} />
      <Stack.Screen name="SwitchTest" component={SwitchTest} />
      <Stack.Screen name="Accordion" component={Accordion} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
