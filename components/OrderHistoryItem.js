import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import CartItem from './CartItem'

const OrderHistoryItem = ({data}) => {
    const renderItem=({item})=> {
        return (
            <CartItem data={item}/>
        )
    }

    const getTotal = () => {
        var total = 0;
        data.products.forEach(element => {
            total += element.product_price * element.product_quantity
        });
        return total
    }
    return (
        <View>
            <View style={OrderStyle.orderHeader}>
                <Text style={{ fontSize: 14, fontWeight: '600', color: 'white' }}>Order Date{'\n'}
                    <Text style={{ fontWeight: '300', lineHeight: 20 }}>{data.created_at}</Text>
                </Text>

                <Text style={{ fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'right' }}>Total Price{'\n'}
                    <Text style={{ fontWeight: '300', lineHeight: 20, color: '#D17842', flex: 1 }}>${' '}
                        <Text >{getTotal().toFixed(2)}</Text>
                    </Text>
                </Text>
            </View>

            <FlatList 
            data={data.products}
            renderItem={renderItem}
            keyExtractor={(item)=>item._id}/>
        </View>
    )
}

const OrderStyle = StyleSheet.create({
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    }
})

export default OrderHistoryItem