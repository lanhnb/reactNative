import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios"

const Page =()=>{
    const [data, setData] = useState([]);
    const getAPIdata = async () => {
        const url = "https://lanhnb.click/api/xklds/";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }
    useEffect(() => {
        getAPIdata()
    })
    return (
        <View style={styles.container}>
            <Text>Bookmarks</Text>
            {
                data.length ?
                <FlatList 
                data={data}
                renderItem={({item})=> <View>
                    <Text>{item.namex}</Text>
                </View>}
                />
                :null
            }
        </View>
    )
}
export default Page

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})
