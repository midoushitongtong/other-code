import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import Chevron from './Chevron';
import ListItem from './ListItem';
import { ListModel } from './listData';

type Props = {
  list: ListModel;
};

const List: React.FunctionComponent<Props> = ({ list }: Props) => {
  const itemsRef = useAnimatedRef<View>();
  const open = useSharedValue(false);
  const height = useSharedValue(0);
  const transition = useDerivedValue(() => (open.value ? withSpring(1) : withTiming(0)));

  const topStyle = useAnimatedStyle(() => ({
    borderBottomLeftRadius: transition.value === 0 ? 8 : 0,
    borderBottomRightRadius: transition.value === 0 ? 8 : 0,
  }));

  const itemsStyle = useAnimatedStyle(() => ({
    height: height.value * transition.value + 1,
    opacity: transition.value === 0 ? 0 : 1,
  }));

  return (
    <View style={styles.list}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          if (height.value === 0) {
            runOnUI(() => {
              'worklet';
              height.value = measure(itemsRef).height;
            })();
          }
          open.value = !open.value;
        }}>
        {/* top */}
        <Animated.View style={[styles.top, topStyle]}>
          <View style={styles.name}>
            <Text style={styles.nameText}>{list.name}</Text>
          </View>
          <Chevron transition={transition} />
        </Animated.View>
      </TouchableOpacity>
      {/* list item container */}
      <Animated.View style={[styles.items, itemsStyle]}>
        <View ref={itemsRef}>
          {list.items.map((item, index) => (
            <ListItem key={index} name={item.name} isLast={index === list.items.length - 1} />
          ))}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginBottom: 15,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 15,
  },
  name: {
    flex: 1,
  },
  nameText: {
    fontSize: 15,
    fontWeight: '600',
  },
  items: {
    overflow: 'hidden',
  },
});

export default List;
