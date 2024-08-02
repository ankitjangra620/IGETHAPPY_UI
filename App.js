import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Components/Home';
import Explore from './Components/Explore';
import GetCare from './Components/GetCare';
import Logs from './Components/Logs';
import Profile from './Components/Profile';

const homeIcon = require("./assets/home.png")
const exploreIcon = require("./assets/explore.png")
const getCare = require("./assets/getcare.png")
const logsIcon = require("./assets/logs.png")
const profileIcon = require("./assets/getcare.png")

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: '#fff',
    width: 381,
    height: 87,
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    source={homeIcon}
                    style={{
                      width: 31,
                      height: 31,
                      left: 5,
                      tintColor: '#5D2AAD',
                    }}
                  />
                  <Text
                    style={{fontSize: 16, color: focused ? '#5D2AAD' : '#000'}}>
                    Home
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    source={exploreIcon}
                    style={{
                      width: 31,
                      height: 31,
                      left: 9,
                      tintColor: '#5D2AAD',
                    }}
                  />
                  <Text style={{fontSize: 16, color: '#5D2AAD'}}>Explore</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="GetCare"
          component={GetCare}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    source={getCare}
                    style={{
                      width: 31,
                      height: 31,
                      left: 14,
                      tintColor: '#5D2AAD',
                    }}
                  />
                  <Text style={{fontSize: 16, color: '#5D2AAD'}}>Get Care</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Logs"
          component={Logs}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    source={logsIcon}
                    style={{
                      width: 31,
                      height: 31,
                      left: 2,
                      tintColor: '#5D2AAD',
                    }}
                  />
                  <Text style={{fontSize: 16, color: '#5D2AAD'}}>Logs</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    source={getCare}
                    style={{
                      width: 31,
                      height: 31,
                      left: 11,
                      tintColor: '#5D2AAD',
                    }}
                  />
                  <Text style={{fontSize: 16, color: '#5D2AAD'}}>Profiles</Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
