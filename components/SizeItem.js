import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SizeItem = ({sluong, price}) => {
  return (
    <View style={SizeStyle.item}>
      <View style={SizeStyle.itemSize}>
        <Text style={SizeStyle.sizeTxt}>SL</Text>
        <View style={SizeStyle.line}/>
        <Text style={{color: '#D17842', fontSize: 16, fontWeight: '700'}}>
            ${' '}
            <Text style={{color: 'white'}}>{price}</Text>
        </Text>
      </View>
      <Text style={{color: '#D17842', fontSize: 16, fontWeight: '700'}}>
            X
            <Text style={{color: 'white'}}>{sluong}</Text>
        </Text>

        <Text  style={{color: '#D17842', fontSize: 16, fontWeight: '700'}}>{(sluong * price).toFixed(2)}</Text>
    </View>
  )
}

const SizeStyle = StyleSheet.create({
    item: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom: 15
    },
    sizeTxt: {
        fontSize: 16,
        color: 'white'
    },
    itemSize: {
        backgroundColor: '#0C0F14',
        flexDirection: 'row',
        alignSelf: 'baseline',
        width: 141,
        justifyContent: 'space-around',
        padding: 8,
        borderRadius: 10
    },
    line: {
        width: 1,
        height: 20,
        backgroundColor: 'white'
    },
    
})

export default SizeItem