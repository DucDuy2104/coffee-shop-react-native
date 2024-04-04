import { View, Text, Image } from 'react-native'
import React from 'react'
import WalletPayStyle from '../styles/WalletPayStyle'
import LinearGradient from 'react-native-linear-gradient'
import PayStyle from '../styles/PaymentStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'

const WalletPay = ({ itemWallet, isChoose, onItemPress }) => {

    return (
        <TouchableOpacity onPress={onItemPress}>
            <View style={[WalletPayStyle.container, { borderWidth: 1, borderColor: isChoose ? '#D17842' : 'black', borderRadius: 25 }]}>
                <LinearGradient
                    colors={['rgba(38, 43, 51, 1)', 'rgba(38, 43, 51, 0)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={WalletPayStyle.gradient}
                />

                <Image style={PayStyle.img} source={itemWallet.img} />

                <Text style={{ fontSize: 16, fontWeight: '700', color: '#fff' }}>  {itemWallet.name}</Text>
                <Text style={{ fontSize: 16, fontWeight: '400', color: '#fff', position: 'absolute', right: 20, top: 20 }}>{itemWallet.price ? '$' + itemWallet.price : ''}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default WalletPay