import React, {useEffect} from 'react';
import NavigationOfAllScreen from './NavigationOfAllScreen';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <NavigationOfAllScreen />;
};

export default App;
