import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [curUser, setCurUser] = useState();
    const [listCart, setListCart] = useState([]);
    const [total, setTotal] = useState(listCart.length * 123);
    const [itemBuy, setItemBuy] = useState()
    const [favorList, setFavorList] = useState([])

    const updateListCart = (id) => {
        console.log('onUpdate');
        var isAppear = false
        listCart.forEach(e => {
            if (e == id) {
                isAppear = true
            }
        })

        if (!isAppear) {
            setListCart((prevList) => [...prevList, id]);
            console.log('sizeListCart: ', listCart.length);
        }
    };

    const updateItemBuy = (item) => {
        console.log('onUpdateItemBuy...')
        setItemBuy(item)
        console.log(itemBuy)
    }


    const removeFavor = (id) => {
        console.log('onRemoveFavor...')
        for(var i = 0; i< favorList.length; i++) {
            if(favorList[i] == id) {
                setFavorList((pre)=> {
                    pre.splice(i, 1)
                    console.log('pre: ', pre)
                    return pre
                })
            }
        }
    }

    const addFavor = (id) => {
        console.log('newFavor...: ', id)
        setFavorList((pre) => {
            return [...pre, id]
        })
    }

    return (
        <AppContext.Provider
            value={{
                listCart,
                setListCart,
                updateListCart,
                curUser,
                setCurUser,
                total,
                setTotal,
                updateItemBuy, itemBuy,
                favorList,setFavorList,
                removeFavor,addFavor
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
