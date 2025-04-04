import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Signin from './screens/signin';
import Signup from './screens/signup';

import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';
import Screen3 from './screens/screen3';
import Screen4 from './screens/screen4';
import Screen5 from './screens/screen5';
import Screen6 from './screens/screen6';

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Signin"
    >
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={BottomStack} />
    </Stack.Navigator>
  );
}

const TopTab = createMaterialTopTabNavigator();

function Top1() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Top1 Screen1" component={Screen1} />
      <TopTab.Screen name="Top1 Screen2" component={Screen2} />
    </TopTab.Navigator>
  )
}

function Top2() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Top2 Screen4" component={Screen4} />
      <TopTab.Screen name="Top2 Screen5" component={Screen5} />
      <TopTab.Screen name="Top2 Screen6" component={Screen6} />
    </TopTab.Navigator>
  )
}

const BottomTab = createBottomTabNavigator();

function BottomStack() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Top1" component={Top1} />
      <BottomTab.Screen name="Bottom" component={Screen3} />
      <BottomTab.Screen name="Top2" component={Top2} />
    </BottomTab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <StackScreen>
        <BottomStack />
      </StackScreen>
    </NavigationContainer>
  );
}

export default Navigation;