import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LIST_ITEM_HEIGHT = 50;

type Props = {
  name: string;
  isLast?: boolean;
};

const ListItem: React.FunctionComponent<Props> = ({ name, isLast }: Props) => {
  return (
    <View
      style={[
        styles.listItem,
        isLast && {
          borderBottomWidth: 0,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        },
      ]}>
      <Text style={styles.listItemText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: LIST_ITEM_HEIGHT,
    paddingHorizontal: 15,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  listItemText: {
    fontSize: 13.5,
  },
});

export default ListItem;
