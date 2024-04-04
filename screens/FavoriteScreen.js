import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import OrderStyle from '../styles/OrderStyle'
import FavoriteStyle from '../styles/FavoriteStyle'
import FavoriteItem from '../components/FavoriteItem'
import { AppContext } from '../global/AppContext'
import { Axios } from 'axios'
import AxiosInstance from '../helpers/AxiosInstace'
import { FlatList } from 'react-native-gesture-handler'

const FavoriteScreen = () => {
    const {favorList, removeFavor} = useContext(AppContext)
    const [listFavorCall,setListFavorCall] = useState([])

    const callFavorData = async (id) => {
        try {
            const respone = await AxiosInstance().get('/products/' + id)
            return respone.product
        } catch (error) {
            
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            const newListSp = [];
            console.log('onFecth...')
            for (const id of favorList) {
                console.log(id)
                const product = await callFavorData(id);
                console.log('product: ', product)
                if (product) {
                    newListSp.push(product);
                }
            }

            setListFavorCall(pre => {
                return newListSp
            });
        };

        fetchData();
    }, [favorList]);


    const renderFavorItem = ({item}) => {
        return (
            <FavoriteItem onHeartClick={removeFavor} item={item}/>
        )
    }

    return (
        listFavorCall.length == favorList.length ? (
            <View style={FavoriteStyle.container}>
            <View style={OrderStyle.toolBar}>
                    <TouchableOpacity>
                        <Image source={require('../assets/img/menu_btn.png')} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: '600', lineHeight: 36, color: 'white' }}>Favorite</Text>
                    <TouchableOpacity>
                        <Image source={require('../assets/img/info_btn.png')} />
                    </TouchableOpacity>
                </View>
            <FlatList
                data={listFavorCall}
                keyExtractor={item=> item.name}
                renderItem={renderFavorItem}
            
            />
        </View>
        ) : <Text>Loading...</Text>
    )
}

export default FavoriteScreen