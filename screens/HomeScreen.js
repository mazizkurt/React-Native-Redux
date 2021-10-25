import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
const HomeScreen = () => {
    const dispatch = useDispatch()
    const items = useSelector((state)=>state.noteReducer.notes.items)
    const ekle = () => {
        dispatch({
            type:"ADD_NOTE",
            payload:{
                note:'Naber',
                id:"Deneme"
            }
        })
    }
    return (
        <View>
            <TouchableOpacity onPress={()=>ekle()}><Text>Ekle</Text></TouchableOpacity>
            {
                items.map((data,index)=>{
                    return (
                        <Text>{data.note}</Text>
                    )
                })
            }
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
