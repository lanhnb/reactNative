import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import {useCameraPermission} from 'react-native-vision-camera'



const category =()=>{
    const { hasPermission, requestPermission } = useCameraPermission()
    const device = useCameraDevice('back')
    console.log(hasPermission)
    if (!hasPermission) return <PermissionsPage />
    if (device == null) return <NoCameraDeviceError />
    return (
        <View>
            <Stack.Screen options={{headerShown: false}}/>
            <Text>Camera</Text>

        </View>
        <Camera
              style={StyleSheet.absoluteFill}
              device={device}
              isActive={true}
            />
       
    )
}
export default category;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})
