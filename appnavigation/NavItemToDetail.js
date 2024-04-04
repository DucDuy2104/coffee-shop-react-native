import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import MainBottomNav from './MainBottomNav'
import CoffeeBeanDetail from '../screens/CoffeeBeanDetail'
import { createStackNavigator } from '@react-navigation/stack'
import SettingScreen from '../screens/SettingScreen'
import InfoSetting from '../screens/InfoSetting'
import SignInScreen from '../screens/SignInScreen'
import RegisterScreen from '../screens/RegisterScreen'
import PaymentScreen from '../screens/PaymentScreen'
import { AppContext } from '../global/AppContext'
const Stack = createStackNavigator()

const NavItemToDetail = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >

      <Stack.Screen name='signin' component={SignInScreen} />
      <Stack.Screen name="main" component={MainBottomNav} />
      <Stack.Screen name='register' component={RegisterScreen} />
      <Stack.Screen name="detail" component={CoffeeBeanDetail} />
      <Stack.Screen name="setting" component={SettingScreen} />
      <Stack.Screen name='info' component={InfoSetting} />
      <Stack.Screen name='payment'  component={PaymentScreen}/>
    </Stack.Navigator>
  )
}

export default NavItemToDetail