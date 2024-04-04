import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import CoffeeItemSyle from '../styles/CoffeeItemStyle'
import LinearGradient from 'react-native-linear-gradient'


const CoffeeItem = ({ item, onCoffeeItemPress, onBtnAddClick }) => {
    return (
        <TouchableOpacity onPress={onCoffeeItemPress}>
            <View style={CoffeeItemSyle.container}>
                <LinearGradient
                    colors={['rgba(38, 43, 51, 1)', 'rgba(38, 43, 51, 0)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={CoffeeItemSyle.gradient}
                />
                <Image source={{ uri: item.image }} style={CoffeeItemSyle.coffeeImg} />
                <View style={[CoffeeItemSyle.rating]}>
                    <View style={CoffeeItemSyle.ratingBg}></View>
                    <Image source={require('../assets/img/star.png')} style={CoffeeItemSyle.star} />
                    <Text style={CoffeeItemSyle.ratingText}>   {item.rating.toFixed(1)}</Text>
                </View>
                <Text ellipsizeMode='tail' numberOfLines={1} style={CoffeeItemSyle.coffeeName}>{item.name}</Text>
                <Text style={CoffeeItemSyle.topping}>with Froam Milk</Text>
                <View style={CoffeeItemSyle.containerFlex}>
                    <Text style={{ color: '#D17842', fontSize: 20, fontWeight: 'bold' }}>$</Text>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>  {item.price}</Text>
                </View>
                <TouchableOpacity onPress={onBtnAddClick} style={CoffeeItemSyle.btnAdd}>
                    <Text style={{ color: "#fff", fontSize: 20 }}>+</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default CoffeeItem