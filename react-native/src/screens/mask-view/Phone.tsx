import MaskedView from '@react-native-community/masked-view';
import * as React from 'react';
import { Animated, Easing, Image, StyleSheet } from 'react-native';

import { PhoneModel, SIZE } from './phones';

type Props = {
  phone: PhoneModel;
  isSelected: boolean;
};

const r = SIZE / 2;

const Phone: React.FunctionComponent<Props> = ({ phone, isSelected }: Props) => {
  const [ready, setReady] = React.useState(false);
  const progress = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (ready) {
      if (isSelected) {
        Animated.timing(progress, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }).start(() => {
          Animated.timing(progress, {
            toValue: 1,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start();
        });
      }
    }
  }, [progress, ready, isSelected]);

  const scale = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Math.SQRT2],
  });

  const translateY = Animated.subtract(r, Animated.multiply(r, progress));

  return (
    <MaskedView
      style={StyleSheet.absoluteFill}
      maskElement={
        <Animated.View
          style={[
            {
              ...StyleSheet.absoluteFillObject,
              width: r * 2,
              height: r * 2,
              borderRadius: r,
              backgroundColor: '#fff',
              transform: [
                {
                  translateY,
                },
                {
                  scale,
                },
              ],
            },
          ]}
        />
      }>
      <Image source={phone.image} style={styles.image} onLoadEnd={() => setReady(true)} />
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});

export default Phone;
