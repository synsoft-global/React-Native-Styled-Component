/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
    Button,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useColorScheme } from 'react-native';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/theme';
import { Store } from './redux';

import ListView from './pages/listview';
import ListDetail from './pages/detail';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  // get current theme scheme of device
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme);

  /* handle switch theme action */
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
    <SafeAreaView style={{flex:1}}>
      <StatusBar />
      <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ListView} options={{
          headerRight: () => (
            <Button
              onPress={themeToggler}
              title="Switch Theme"
            />
          ),
        }}/>
        <Stack.Screen name="Details" component={ListDetail} />
      </Stack.Navigator>
      </NavigationContainer>
     </Provider>
    </SafeAreaView>
    </ThemeProvider>
  );
}


export default App;
