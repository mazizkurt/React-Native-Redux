import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
const ReduxScreen = ({navigation}) => {
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
            <TouchableOpacity style={{padding:20,backgroundColor:'red'}} onPress={()=>ekle()}><Text>Ekle</Text></TouchableOpacity>
            {
                items.map((data,index)=>{
                    return (
                        <Text>{data.note}</Text>
                    )
                })
            }
            <TouchableOpacity style={{padding:20,backgroundColor:'green'}} onPress={()=>navigation.push('List')}><Text>List</Text></TouchableOpacity>
        </View>
    )
}

export default ReduxScreen

const styles = StyleSheet.create({})
