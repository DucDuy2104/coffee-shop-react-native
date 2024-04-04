import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SettingItem = ({ settingItem, onItemPress }) => {
    return (
        <TouchableOpacity onPress={onItemPress}>
            <View style={ItemStyle.container}>
                <View style={ItemStyle.icon}>
                    <View style={ItemStyle.backgrIcon}></View>
                    <Image style={ItemStyle.itemImg} source={settingItem.icon} />
                </View>
                <Text style={ItemStyle.name}>{settingItem.name}</Text>
                <Image style={ItemStyle.arrow} source={require('../assets/img/rarround.png')} />
            </View>
        </TouchableOpacity>
    )
}


const ItemStyle = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'baseline',
        position: 'relative'
    },
    backgrIcon: {
        backgroundColor: "#D17842",
        opacity: 0.2,
        width: 30,
        height: 30,
        borderRadius: 15,
        position: 'absolute'
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        flex: 1,
        paddingLeft: 30
    },
    arrow: {
        width: 11,
        height: 20
    }
})

export default SettingItem