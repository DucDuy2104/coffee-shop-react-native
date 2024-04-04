import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import BeanStyle from '../styles/BeanDetail'
import { AppContext } from '../global/AppContext'
import InterImg from '../assets/interImg/InterImg'
import AxiosInstance from '../helpers/AxiosInstace'

const CoffeeBeanDetail = ({ route, navigation }) => {
    const { id } = route.params
    const { updateListCart, addFavor } = useContext(AppContext)
    const listChoseSize = [true, false, false]
    const [stateList, setStateList] = useState(listChoseSize)
    const [curProduct, setCurProduct] = useState()
    const [curPrice, setCurPrice] = useState(0)
    const [isHeart, setIsHeart] = useState(false)
    const getCoffeeById = async (id) => {
        try {
            const response = await AxiosInstance().get('/products/' + id)
            setCurProduct(response.product)
        } catch (error) {
            console.error('Lỗi: ', error.message)

        }
    }

    useEffect(() => {
        getCoffeeById(id)
    }, [])




    const itemSizeClick = (id) => {
        var newChose = [];
        for (var i = 0; i < 3; i++) {
            newChose.push(id == i)
        }

        setCurPrice(sizeList[id].price)

        setStateList(newChose)
    }


    const onAddToCartPress = () => {
        updateListCart(id)
    }

    const onPress = () => {
        addFavor(id)
        setIsHeart(true)
    }



    return (
        <SafeAreaView style={BeanStyle.container}>
            {
                curProduct ?
                    <View style={{ flex: 1 }}>
                        <ScrollView>
                            <View style={BeanStyle.abovePart}>
                                <Image source={{ uri: curProduct.image }} style={[BeanStyle.imgBg, { height: 500 }]} />
                                <TouchableOpacity onPress={onPress} style={{top: 10, left: 10, elevation: 5, position: 'absolute' }}>
                                        <Image source={isHeart? require('../assets/img/heartch.png') : require('../assets/img/heart.png')} />
                                    </TouchableOpacity>
                                <View style={BeanStyle.infoPart}>
                                    <View style={BeanStyle.infoBg} />
                                    <Text style={BeanStyle.nameTxt}>{curProduct.name}</Text>
                                    <Text style={BeanStyle.fromTxt}>From Africa</Text>
                                    <View style={BeanStyle.partRating}>
                                        <Image source={require('../assets/img/star.png')} style={{ width: 18, height: 18 }} />
                                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>  {curProduct.rating.toFixed(1)}</Text>
                                        <Text style={{ color: '#AEAEAE' }}>  {'( ' + curProduct.voting + ' )'}</Text>
                                    </View>
                                    <View style={[BeanStyle.beanLabel, { right: 80 }]}>
                                        <Image style={{ width: 20, height: 20 }} source={require('../assets/img/beanicon.png')} />
                                        <Text style={{ color: '#AEAEAE', fontSize: 10 }}>Coff</Text>
                                    </View>
                                    <View style={BeanStyle.beanLabel}>
                                        <Image style={{ width: 20, height: 20, objectFit: 'contain' }} source={require('../assets/img/position.png')} />
                                        <Text style={{ color: '#AEAEAE', fontSize: 10 }}>Africa</Text>
                                    </View>
                                    <Text style={BeanStyle.toppingTxt}>With Froam</Text>
                                    
                                </View>

                            </View>
                            <View style={BeanStyle.belowPart}>
                                <Text style={{ color: '#AEAEAE' }}>Description</Text>
                                <Text style={{ color: '#fff', marginTop: 20, alignContent: 'center' }}>{curProduct.description}</Text>
                                <Text style={{ color: '#AEAEAE', marginTop: 10 }}>Size</Text>
                            </View>


                        </ScrollView>
                        <View style={BeanStyle.addToCartSection}>
                            <Text style={{ color: '#AEAEAE', fontSize: 12, marginLeft: 20 }}>Price</Text>
                            <View style={BeanStyle.priceSection}>
                                <Text style={{ color: '#D17842', fontSize: 20, fontWeight: 'bold' }}>$</Text>
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>  {curProduct.price}</Text>
                            </View>
                            <TouchableOpacity onPress={onAddToCartPress} style={BeanStyle.btnAddToCart}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View> :
                    <Text>Loading...</Text>
            }
        </SafeAreaView>
    )
}

export default CoffeeBeanDetail