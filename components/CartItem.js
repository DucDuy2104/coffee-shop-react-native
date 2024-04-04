import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import CoffeeItemSyle from './CoffeeItem'
import LinearGradient from 'react-native-linear-gradient'
import SizeItem from './SizeItem'

const CartItem = ({data}) => {

  const getTotal =() => {
    var total = 0
    data.quantities.forEach(element => {
        total += element.quantity * element.price
    });

    return total
  }
  

  const renderSize = ({ item }) => {
    return (
      <SizeItem item={item}/>
    )
  }
  return (
    <View style={CartStyle.cartItem}>
      <LinearGradient
        colors={['rgba(38, 43, 51, 1)', 'rgba(38, 43, 51, 0)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={CartStyle.gradient}
      />


      <View style={CartStyle.headerCart}>
        <Image style={CartStyle.img} source={{uri: data.product_image}} />
        <Text style={CartStyle.headerTxt}>{data.product_name}{'\n'}
          <Text style={CartStyle.toppingTxt}>With Steamed Milk</Text>
        </Text>
        <Text style={{ color: '#D17842', fontSize: 20, fontWeight: 600, lineHeight: 20 }}>
          ${' '}
          <Text ellipsizeMode='tail' style={{ color: 'white', width: 50 }}>{(data.product_price*data.product_quantity).toFixed(2)}</Text>
        </Text>
      </View>
      <SizeItem sluong={data.product_quantity} price={(data.product_price)}/>
    </View>
  )
}

const CartStyle = StyleSheet.create({
  cartItem: {
    marginBottom: 15,
    borderRadius: 23,
    paddingHorizontal: 15,
    paddingTop: 15
  },
  headerCart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  img: {
    width: 57,
    height: 57,
    borderRadius: 16
  },
  headerTxt: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 20
  },
  toppingTxt: {
    fontSize: 9,
    lineHeight: 20
  },
  gradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left:0,
    borderRadius: 23
},
})

export default CartItem