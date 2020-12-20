import * as Updates from 'expo-updates';
import React from 'react';
import { Alert } from 'react-native';

import Navigation from './navigation/Navigation';

const App: React.FC = () => {
  React.useEffect(() => {
    Alert.alert(Updates.releaseChannel);
    const otaCheck = async () => {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          Alert.alert('update');

          setTimeout(async () => {
            await Updates.fetchUpdateAsync();
            await Updates.reloadAsync();
          }, 500);
        }
      } catch (e) {
        // handle or log error
      }
    };

    otaCheck();
  }, []);

  return <Navigation />;
};

export default App;
