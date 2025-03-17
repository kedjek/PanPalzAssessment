import React from 'react';
import { UserProvider } from './src/data/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/screens/Welcome';

const Stack = createNativeStackNavigator();


const Home = () => {

  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
  );
};


export default Home;
