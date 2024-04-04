import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CategoryStyle from '../styles/CategoryStyle'

const CategoryItem = ({onItemPress, item }) => {
    return (
        <TouchableOpacity style={CategoryStyle.container} onPress={onItemPress}>
            <Text style={[CategoryStyle.nameText, { color: item.state ? '#D17842' : '#52555A' }]}>{item.name}</Text>
            <View style={[CategoryStyle.selectedNode, { display: item.state ? 'flex' : 'none' }]}></View>
        </TouchableOpacity>
    )
}

export default CategoryItem