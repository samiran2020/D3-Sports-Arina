import React from 'react';
import { SafeAreaView,StyleSheet,View,Text} from 'react-native';


import { SafeAreaProvider } from 'react-native-safe-area-context';
import Tabs from './navigation/Tab';

function App(){
  return (
    <SafeAreaProvider>
      <Tabs/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
});

export default App;
