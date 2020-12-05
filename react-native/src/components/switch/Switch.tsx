import * as React from 'react';
import { Animated, TouchableOpacity, StyleSheet } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  State,
} from 'react-native-gesture-handler';

import usePrevious from '../../hooks/previous';

type Props = {
  value: boolean;
  onValueChange: (value: boolean) => void;
};

// 最大的移动距离
const maxTranslateX = 22;

const Switch: React.FunctionComponent<Props> = (props: Props) => {
  const { value, onValueChange } = props;

  /**
   * 当前操作类型(左侧移动到右侧 | 右侧移动到左侧)
   * 根据 props 的 value 属性初始化
   * - false: 从左侧移动到右侧
   * - true: 从右侧移动到左侧
   */
  let actionType: 'left' | 'right' = !value ? 'left' : 'right';

  /**
   * 每当内部小圆点移动的距离发生改变, 保存当前移动的距离
   */
  let currentTranslateX = 0;

  /**
   * 内部小圆点移动的距离动画
   * 根据 props 的 value 属性初始化
   *  - false: 内部小圆点一开始就在左侧
   *  - true: 内部小圆点一开始就在最右侧
   */
  const translateX = React.useRef(new Animated.Value(!value ? 0 : maxTranslateX)).current;

  /**
   *  背景动画
   *  根据小圆点移动的距离而变化
   */
  const backgroundColor = React.useRef(Animated.add(translateX, new Animated.Value(0))).current;

  /**
   * 保留之前的值
   */
  const prevValue = usePrevious(value);

  React.useEffect(() => {
    if (prevValue !== value) {
      // 外部 value 改变了, 更新按钮状态
      toggle(value ? 'right' : 'left');
    }
  }, [value]);

  // ==============================================================================================================
  // ==============================================================================================================
  // methods
  // ==============================================================================================================
  // ==============================================================================================================

  /**
   * 处理手势
   */
  const handleGestureEvent = (event: PanGestureHandlerGestureEvent): void => {
    const { translationX } = event.nativeEvent;
    let toValue = 0;

    // 从左侧移动到右侧
    if (actionType === 'left') {
      toValue = translationX;
    }

    // 从右侧移动到左侧
    if (actionType === 'right') {
      toValue = maxTranslateX + translationX;
    }

    // 保存当前移动的距离
    currentTranslateX = toValue;

    Animated.timing(translateX, {
      toValue,
      useNativeDriver: false,
      duration: 0,
    }).start();
  };

  /**
   * 处理手势状态
   */
  const handleHandlerStateChange = (event: PanGestureHandlerGestureEvent): void => {
    const { state } = event.nativeEvent;

    if (state === State.END) {
      // 当手势结束的时候, 复原按钮状态
      recovery();
    }
  };

  /**
   * 根据当前移动距离, 复原按钮状态
   * 如果内部小圆点当前移动的距离不够, 移动到最左侧
   * 如果内部小圆点当前移动的距离达到阈值, 移动到最右侧
   */
  const recovery = (): void => {
    let toValue = 0;

    if (currentTranslateX < maxTranslateX / 2) {
      // 拉的距离不够, 将移动距离设置为初始位置
      toValue = 0;
    } else {
      // 拉的距离够了, 将移动距离设置为结束位置
      toValue = maxTranslateX;
    }

    // 保存当前移动的距离
    currentTranslateX = toValue;

    // 保存当前操作类型
    if (toValue === 0) {
      actionType = 'left';
      onValueChange(false);
    }
    if (toValue === maxTranslateX) {
      actionType = 'right';
      onValueChange(true);
    }

    Animated.timing(translateX, {
      toValue,
      duration: 233,
      useNativeDriver: false,
    }).start();
  };

  /**
   * 强制切换状态
   */
  const toggle = (toggleType: 'left' | 'right'): void => {
    if (toggleType === 'left') {
      // 强制切换到最左侧
      actionType = 'left';
      currentTranslateX = 0;
      // 设置完状态后, 执行复原操作
      recovery();
    }
    if (toggleType === 'right') {
      // 强制切换到最右侧
      actionType = 'right';
      currentTranslateX = maxTranslateX;
      // 设置完状态后, 执行复原操作
      recovery();
    }
  };

  const handleTouchabePress = (): void => {
    requestAnimationFrame(() => {
      toggle(value ? 'left' : 'right');
    });
  };

  return (
    <TouchableOpacity activeOpacity={0.65} style={styles.touchable} onPress={handleTouchabePress}>
      <Animated.View
        style={[
          styles.switchWrapper,
          {
            backgroundColor: backgroundColor.interpolate({
              inputRange: [0, maxTranslateX],
              outputRange: ['rgba(0, 0, 0, 0.25)', '#06f'],
              extrapolate: 'clamp',
            }),
          },
        ]}>
        <PanGestureHandler
          activeOffsetX={[-0.1, 0.1]}
          onGestureEvent={handleGestureEvent}
          onHandlerStateChange={handleHandlerStateChange}>
          <Animated.View
            style={[
              styles.switchIndicator,
              {
                transform: [
                  {
                    translateX: translateX.interpolate({
                      inputRange: [0, maxTranslateX],
                      outputRange: [0, maxTranslateX],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}
          />
        </PanGestureHandler>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 28 / 2,
  },
  switchWrapper: {
    position: 'relative',
    width: 50,
    height: 28,
    borderRadius: 28 / 2,
  },
  switchIndicator: {
    position: 'absolute',
    top: 2.5,
    left: 2.5,
    width: 23,
    height: 23,
    borderRadius: 23 / 2,
    backgroundColor: '#fff',
  },
});

export default Switch;
