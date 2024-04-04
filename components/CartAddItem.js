import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import CartAddItemStyle from '../styles/CartAddItemStyle'
import LinearGradient from 'react-native-linear-gradient'
import InterImg from '../assets/interImg/InterImg'
import { AppContext } from '../global/AppContext'
import CartItem from './CartItem'


const CartAddItem = ({CartItemC, updateTotal}) => {
    
    const id =  CartItemC._id

    //id, size, type, num

    const [sizeS, setSizeS] = useState(1)
    
    const addSizeS = () => {
        updateTotal(id, 'add', CartItemC.price, sizeS + 1)
        setSizeS((prevSize) => prevSize + 1);
    }
    
    const minSizeS = () => {

        if (sizeS> 0) {
            updateTotal(id, 'min', CartItemC.price, sizeS -1)
        }
        setSizeS((prevSize) => Math.max(prevSize - 1, 0));
    }

    
    return (
        <View style={CartAddItemStyle.container}>
            <LinearGradient
                colors={['rgba(38, 43, 51, 1)', 'rgba(38, 43, 51, 0)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={CartAddItemStyle.gradient}
            />

            <View style={CartAddItemStyle.header}>
                <Image style={CartAddItemStyle.img} source={{uri: CartItemC.image}} />
                <View style={CartAddItemStyle.headerContent}>
                    <Text style={CartAddItemStyle.txtName}>{CartItemC.name}</Text>
                    <Text style={CartAddItemStyle.txtTopping}>Froam Milk</Text>
                    <Text style={CartAddItemStyle.txtAbout}>Medium Roasted</Text>
                </View>
            </View>

            <View style={CartAddItemStyle.addContent}>
                <View style={[CartAddItemStyle.addItem]}>
                    <Text style={CartAddItemStyle.txtSize}>SL</Text>
                    <Text style={CartAddItemStyle.txtPrice}>
                        ${' '}
                        <Text style={{color: '#fff'}}>{CartItemC.price}</Text>
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={minSizeS} style={CartAddItemStyle.maBtn}>
                        <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>-</Text>
                    </TouchableOpacity>
                    <Text style={CartAddItemStyle.input} >{sizeS}</Text>
                    <TouchableOpacity onPress={addSizeS} style={CartAddItemStyle.maBtn}>
                        <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>+</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </View>
    )
}

export default CartAddItem