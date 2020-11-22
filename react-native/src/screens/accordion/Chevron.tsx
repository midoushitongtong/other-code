import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { mix } from 'react-native-redash';
import Svg, { Path } from 'react-native-svg';

type Props = {
  transition: Animated.SharedValue<number>;
};

const Chevron: React.FunctionComponent<Props> = ({ transition }: Props) => {
  const style = useAnimatedStyle(() => ({
    transform: [
      {
        rotateZ: mix(transition.value, -Math.PI, 0),
      },
    ],
  }));

  return (
    <Animated.View style={[styles.chevron, style]}>
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M6 9l6 6 6-6" />
      </Svg>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  chevron: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#525251',
    height: 25,
    width: 25,
    borderRadius: 25 / 2,
  },
});

export default Chevron;
