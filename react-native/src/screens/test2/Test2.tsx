import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StackNavigatorParamList } from '../../navigation/stack-navigator/types';

type Props = {
  navigation: StackNavigationProp<StackNavigatorParamList, 'Test2'>;
  route: RouteProp<StackNavigatorParamList, 'Test2'>;
};

const Test2 = (props: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}></View>
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

export default Test2;
