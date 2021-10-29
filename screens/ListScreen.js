import React from 'react'
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import {useSelector} from 'react-redux';
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
const ListScreen = () => {
    const [refreshing, setRefreshing] = React.useState(false);
    const items = useSelector((state)=>state.noteReducer.notes.items)
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, []);
    return (
        <ScrollView  refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>
             {
                items.map((data,index)=>{
                    return (
                        <Text>{data.note}</Text>
                    )
                })
            }
        </ScrollView>
    )
}

export default ListScreen

const styles = StyleSheet.create({})
