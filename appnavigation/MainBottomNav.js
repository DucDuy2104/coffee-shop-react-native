import { Image } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import CartScreen from '../screens/CartScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const MainBottomNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,  
                tabBarStyle: {
                    backgroundColor: "#0C0F14"
                },

            }}

        >
            <Tab.Screen
                options={
                    {
                        tabBarIcon: ({ focused }) => <Image source={focused ? require('../assets/img/homecheck.png') : require('../assets/img/home.png')} style={{ width: 15, height: 15 }} />,
                        tabBarLabel: () => null
                    }
                }
                name="Home" component={HomeScreen} />
            <Tab.Screen
                options={
                    {
                        tabBarIcon: ({ focused }) => <Image source={focused ? require('../assets/img/cartcheck.png') : require('../assets/img/cart.png')} style={{ width: 15, height: 15 }} />,
                        tabBarLabel: () => null
                    }
                }
                name="Cart" component={CartScreen} />
            <Tab.Screen
                options={
                    {
                        tabBarIcon: ({ focused }) => <Image source={focused ? require('../assets/img/favorcheck.png') : require('../assets/img/favor.png')} style={{ width: 15, height: 15 }} />,
                        tabBarLabel: () => null
                    }
                }
                name="Favorite" component={FavoriteScreen} />
            <Tab.Screen
                options={
                    {
                        tabBarIcon: ({ focused }) => <Image source={focused ? require('../assets/img/ordercheck.png') : require('../assets/img/order.png')} style={{ width: 15, height: 15 }} />,
                        tabBarLabel: () => null
                    }
                }
                name="OrderHistory" component={OrderHistoryScreen} />
        </Tab.Navigator>
    )
}

export default MainBottomNav