import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import Switch from '../../components/switch/Switch';
import { StackNavigatorParamList } from '../../navigation/stack-navigator/types';

type Props = {
  navigation: StackNavigationProp<StackNavigatorParamList, 'SwitchTest'>;
  route: RouteProp<StackNavigatorParamList, 'SwitchTest'>;
};

const SwitchTest: React.FunctionComponent<Props> = () => {
  const [active, setActive] = React.useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Switch value={active} onValueChange={(active) => setActive(active)} />

        <View style={styles.buttonWrapper}>
          <BorderlessButton
            activeOpacity={0.65}
            rippleColor="#999"
            onPress={() => {
              setActive(!active);
            }}>
            <View style={styles.button}>
              <Text>Toggle</Text>
              <Text>{active ? 'true' : 'false'}</Text>
            </View>
          </BorderlessButton>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  buttonWrapper: {
    marginTop: 100,
    backgroundColor: '#eee',
    borderRadius: 15,
  },
  button: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
  },
});

export default SwitchTest;
