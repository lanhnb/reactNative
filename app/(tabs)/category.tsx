import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";



const Page =()=>{
    const [data, setData] = useState();
    const getAPIdata = async () => {
        // const url = "https://lanhnb.click/api/products/1";
        const url = "https://jsonplaceholder.typicode.com/posts/2";
        let result = await fetch(url);
        result = await result.json();
        setData(result)
    }
    useEffect(() => {
        getAPIdata()
    }, [])
    return (
        <View style={styles.container}>
            <Text>Call Api</Text>
         {
            data ?
            <View>
                <Text>{data.id}</Text>
                <Text>{data.title}</Text>
            </View>
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
