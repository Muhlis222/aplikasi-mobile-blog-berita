import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'
import Home from './index'
import Kategori from './kategori'
import Rekomendasi from './rekomendasi'


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();
export default function Layout() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> }} />
        <Tab.Screen name="Rekomendasi" component={Rekomendasi} options={{ tabBarIcon: ({ color }) => <Ionicons name="heart" size={24} color={color} /> }} />
        <Tab.Screen name="Kategori" component={Kategori} options={{ tabBarIcon: ({ color }) => <Ionicons name="list" size={24} color={color} /> }} />
      </Tab.Navigator>
    </NavigationContainer >
  )
}

