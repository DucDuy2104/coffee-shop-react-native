import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, FlatList, ToastAndroid } from 'react-native'
import HomeStyle from '../styles/HomeStyle'
import CategoryItem from '../components/CategoryItem'
import InterImg from '../assets/interImg/InterImg'
import CoffeeItem from '../components/CoffeeItem'
import { AppContext } from '../global/AppContext'
import AxiosInstance from '../helpers/AxiosInstace'
import Toast from 'react-native-toast-message'

const HomeScreen = ({ navigation }) => {
    const [listCategoryCall, setListCategoryCall] = useState()
    const [listProCall, setListProCall] = useState()
    const [listProFilter, setListProFilter] = useState()
    const {updateListCart} = useContext(AppContext)

    const getDataCategories = async () => {
        try {
            const response = await AxiosInstance().get('/categories');
            
            response.categories.unshift({
                "_id": '1',
                "name": 'All'
            })
            const newArr = response.categories.map((e,i)=> {
                return {...e, "state": e._id == '1', "_eid": i}
            })
            setListCategoryCall(newArr)
        } catch (error) {
            console.error('Error during request:', error.message);
        }
    };

    const getDataProducts = async () => {
        try {
            const response =  await AxiosInstance().get('/products');
            setListProCall(response.products)
        } catch (error) {
            console.error('Error during request:', error.message);
        }
    }

    const getDataProductsFilter = async () => {
        try {
            const response =  await AxiosInstance().get('/products');
            setListProFilter(response.products)
        } catch (error) {
            console.error('Error during request:', error.message);
        }
    }

    useEffect(()=>{
        getDataCategories()
        getDataProducts()
        getDataProductsFilter()
    },[])



    //FlatList Category
    const flatListRef = useRef(null)
    const { cofList, cofBeanList } = useContext(AppContext)
    const [cofListFilter, setCofListFilter] = useState(cofList)


    const onCatPress =(id, eid) => {
        const newCatList = listCategoryCall.map(e=> {
            return {...e, "state" : e._id == id}
        })

        console.log('eid', eid)
        

        flatListRef.current.scrollToIndex({
            animated: true,
            index:  eid,
            viewPosition: 0.5, 
          });

        const newProList = id == '1'? listProCall: listProCall.filter(el => {
            return el.category == id
        }) 

        setListProFilter(newProList)
        setListCategoryCall(newCatList)
    }



    const renderItem = ({ item }) => {
        return (
            <CategoryItem item={item} onItemPress={() => onCatPress(item._id, item._eid)} />
        )
    }

    const onCoffeeItemClick =(id) => {
        navigation.navigate('detail', {
            id
        })
    }
    const onAddClick = (id) => {
        console.log('On Btn Add Press')
        updateListCart(id)
        console.log('success!')
    }

    //FlatList Coffee
    const renderCoffeeItem =({item})=> <CoffeeItem onBtnAddClick={()=>onAddClick(item._id)} onCoffeeItemPress={()=> onCoffeeItemClick(item._id)} item={item}/>

    const onSettingClick = () => {
        navigation.navigate('setting')
    }



    return (
        <View style={HomeStyle.container}>
                <View style={HomeStyle.toolBarContainer}>
                    <TouchableOpacity>
                        <Image style={HomeStyle.menuBtn} source={require('../assets/img/menu_btn.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onSettingClick}>
                        <Image style={HomeStyle.infoBtn} source={require('../assets/img/info_btn.png')} />
                    </TouchableOpacity>
                </View>
                <Text style={HomeStyle.header}>Find the best coffee for you</Text>
                <TextInput placeholder='Find your coffee...' placeholderTextColor={'#52555A'} style={HomeStyle.searchInput} />
                <Image style={HomeStyle.imgSearch} source={require('../assets/img/search.png')} />
                <FlatList
                    data={listCategoryCall}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                    horizontal
                    ref={flatListRef}
                    style={{ flexGrow: 0, marginLeft: 25,}}
                />

                <FlatList
                    data={listProFilter}
                    keyExtractor={item=> item._id}
                    renderItem={renderCoffeeItem}
                    numColumns={2}
                    style={{ flexGrow: 0, marginLeft: 25 , marginTop: 10}}
                    />
            </View>
    )
}


export default HomeScreen