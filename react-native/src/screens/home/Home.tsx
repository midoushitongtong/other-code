import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { StackNavigatorParamList } from '../../navigation/stack/types';

type Props = {
  navigation: StackNavigationProp<StackNavigatorParamList, 'Home'>;
  route: RouteProp<StackNavigatorParamList, 'Home'>;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const nativeToScreen = React.useCallback((screen: keyof StackNavigatorParamList) => {
    navigation.navigate(screen);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.button}>
          <RectButton onPress={() => nativeToScreen('MaskView')}>
            <View style={styles.buttonInner}>
              <Text style={styles.buttonText}>mask view</Text>
            </View>
          </RectButton>
        </View>
        <View style={styles.button}>
          <RectButton onPress={() => nativeToScreen('SwitchTest')}>
            <View style={styles.buttonInner}>
              <Text style={styles.buttonText}>switch</Text>
            </View>
          </RectButton>
        </View>
        <View style={styles.button}>
          <RectButton onPress={() => nativeToScreen('Accordion')}>
            <View style={styles.buttonInner}>
              <Text style={styles.buttonText}>accordion</Text>
            </View>
          </RectButton>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  button: {
    marginBottom: 15,
    backgroundColor: '#ccc',
  },
  buttonInner: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontSize: 50.5,
    color: '#000',
  },
});

export default Home;
