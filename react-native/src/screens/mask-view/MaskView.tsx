import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StackNavigatorParamList } from '../../navigation/stack-navigator/types';
import Phone from './Phone';
import { phones, SIZE } from './phoneData';

type Props = {
  navigation: StackNavigationProp<StackNavigatorParamList, 'MaskView'>;
  route: RouteProp<StackNavigatorParamList, 'MaskView'>;
};

const MaskView: React.FunctionComponent<Props> = () => {
  const [displayPhones, setDisplayPhones] = React.useState([phones[0]]);
  const currentDisplayPhone = displayPhones[displayPhones.length - 1];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.phoneImageContainer}>
          {displayPhones.map((item) => (
            <Phone key={item.id} phone={item} isSelected={item.id === currentDisplayPhone.id} />
          ))}
        </View>
        <View style={styles.phoneColorList}>
          {phones.map((item) => (
            <RectButton
              key={item.id}
              style={styles.phoneColorButton}
              onPress={() => {
                if (item.id !== currentDisplayPhone.id) {
                  setDisplayPhones([currentDisplayPhone, item]);
                }
              }}>
              <View
                style={[
                  styles.phoneColorButtonIndicator,
                  {
                    backgroundColor: item.color,
                  },
                ]}
              />
            </RectButton>
          ))}
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
    backgroundColor: '#fff',
  },
  phoneImageContainer: {
    width: SIZE,
    height: SIZE,
  },
  phoneColorList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  phoneColorButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    height: '50%',
    paddingVertical: 35,
    opacity: 0.75,
    borderRadius: 20,
  },
  phoneColorButtonIndicator: {
    width: 30,
    height: 30,
    borderRadius: 30,
    opacity: 0.75,
  },
});

export default MaskView;
