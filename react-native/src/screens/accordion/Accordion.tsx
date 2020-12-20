import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { StackNavigatorParamList } from '../../navigation/stack/types';
import List from './List';
import { ListModel } from './listData';

type Props = {
  navigation: StackNavigationProp<StackNavigatorParamList, 'Accordion'>;
  route: RouteProp<StackNavigatorParamList, 'Accordion'>;
};

const list: ListModel = {
  name: 'Accordion 1',
  items: [{ name: 'Accordion item 1' }],
};

const list2: ListModel = {
  name: 'Accordion 2',
  items: [{ name: 'Accordion item 1' }, { name: 'Accordion item 2' }],
};

const list3: ListModel = {
  name: 'Accordion 3',
  items: [{ name: 'Accordion item 1' }, { name: 'Accordion item 2' }, { name: 'Accordion item 3' }],
};

const Accordion: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <List list={list} />
      <List list={list2} />
      <List list={list3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 15,
  },
});

export default Accordion;
