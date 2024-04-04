import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import OrderStyle from '../styles/OrderStyle'
import OrderList from '../data/OrderHistoryData'
import OrderHistoryItem from '../components/OrderHistoryItem'
import { AppContext } from '../global/AppContext'
import AxiosInstance from '../helpers/AxiosInstace'
import CartItem from '../components/CartItem'
import { useIsFocused } from '@react-navigation/native'

const OrderHistoryScreen = () => {
    const OrderListCopy = [...OrderList]
    const { curUser } = useContext(AppContext)
    const [listOrderHistory, setListOrderHistory] = useState([])
    const isFocus = useIsFocused();

    const getOrderData = async () => {
        try {
            const respone = await AxiosInstance().post('/users/login', {
                email: curUser.email,
                password: "123"
            })
            console.log('cart: ', respone.user.carts)
            setListOrderHistory(respone.user.carts)
        } catch (error) {
            console.error('Lỗi: ', error.message)
        }
    }

    useEffect(() => {
        if (curUser) {
            getOrderData()
        }
    }, [isFocus,curUser])




    const renderItem = ({ item }) => {
        return (
            <OrderHistoryItem data={item} />
        )
    }

    return (
        listOrderHistory ? (
            <View style={OrderStyle.container}>
                <View style={OrderStyle.toolBar}>
                    <TouchableOpacity>
                        <Image source={require('../assets/img/menu_btn.png')} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: '600', lineHeight: 36, color: 'white' }}>Order History</Text>
                    <TouchableOpacity>
                        <Image source={require('../assets/img/info_btn.png')} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={listOrderHistory}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                />
                <TouchableOpacity style={{ backgroundColor: '#D17842', padding: 20, alignItems: 'center', borderRadius: 23 }}>
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 16, textAlign: 'center' }}>Download</Text>
                </TouchableOpacity>
            </View>
        ) : <Text>Loading...</Text>
    )
}

export default OrderHistoryScreen