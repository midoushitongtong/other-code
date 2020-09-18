import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path, Circle } from 'react-native-svg';

import { StackNavigatorParamList } from '../../navigation/stack-navigator/types';

type Props = {
  navigation: StackNavigationProp<StackNavigatorParamList, 'Test1'>;
  route: RouteProp<StackNavigatorParamList, 'Test1'>;
};

const SIZE = Dimensions.get('window').width;
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Test1 = (props: Props) => {
  const data = {
    from: { x: 0, y: 0 },
    c1: { x: 0.25, y: 0.25 },
    c2: { x: 0.75, y: 0.5 },
    to: { x: 1, y: 1 },
  };

  const { from, c1, c2, to } = data;

  const path = `M ${from.x} ${from.y} C ${c1.x} ${c2.y} ${c2.x} ${c2.y} ${to.x} ${to.y} L 1 1 L 0 1 Z`;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Svg width={SIZE} height={SIZE} viewBox="0 0 1 1">
          <Path fill="blue" d={path} />
        </Svg>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eee',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Test1;
