import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import BeanStyle from '../styles/BeanDetail'

const FavoriteItem = ({ item,  onHeartClick}) => {

    return (
        <View style={{ backgroundColor: '#000', marginBottom: 15, borderRadius: 15 }}>
            <View style={[BeanStyle.abovePart, { height: 400, borderRadius: 15 }]}>
                <Image source={{ uri: item.image }} style={[BeanStyle.imgBg, { height: 400 }]} />
                <View style={[BeanStyle.infoPart]}>
                    <View style={BeanStyle.infoBg} />
                    <Text style={BeanStyle.nameTxt}>{item.name}</Text>
                    <Text style={BeanStyle.fromTxt}>From Africa</Text>
                    <View style={BeanStyle.partRating}>
                        <Image source={require('../assets/img/star.png')} style={{ width: 18, height: 18 }} />
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>  {item.rating.toFixed(2)}</Text>
                        <Text style={{ color: '#AEAEAE' }}>  {`(${item.voting})`}</Text>
                    </View>
                    <View style={[BeanStyle.beanLabel, { right: 95 }]}>
                        <Image style={{ width: 20, height: 20 }} source={require('../assets/img/beanicon.png')} />
                        <Text style={{ color: '#AEAEAE', fontSize: 10 }}>Bean</Text>
                    </View>
                    <View style={BeanStyle.beanLabel}>
                        <Image style={{ width: 20, height: 20, objectFit: 'contain' }} source={require('../assets/img/position.png')} />
                        <Text style={{ color: '#AEAEAE', fontSize: 10 }}>Africa</Text>
                    </View>
                    <Text style={BeanStyle.toppingTxt}>Medium Roasted</Text>
                </View>
                
                <TouchableOpacity  onPress={()=> onHeartClick(item._id)} style={{position: 'absolute', left: 10, top: 10}}>
                    <Image source={require('../assets/img/heartch.png')}/>
                </TouchableOpacity>
            </View>
            <View style={BeanStyle.belowPart}>
                <Text style={{ color: '#AEAEAE' }}>Description</Text>
                <Text style={{ color: '#fff', marginTop: 5, alignContent: 'center' }}>{item.description}</Text>
            </View>
        </View>
    )
}

export default FavoriteItem