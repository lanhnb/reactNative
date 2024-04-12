import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {useHeaderHeight} from '@react-navigation/elements'
import { SearchBar } from "react-native-screens";
import CategoryButtons from "@/components/CategoryButtons";

const Page = () => {
  const headerHeight = useHeaderHeight();

  return (
    <>
    <Stack.Screen
      options={{
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dxnhv54sl/image/upload/v1695431219/logo/epiu3addc0ing9mk4l2p.png",
              }}
              style={{ width: 40, height: 40, borderRadius: 10 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={()=>{}} 
            style={{
              marginRight:20,
              backgroundColor:Colors.white,
              padding:10,
              borderRadius:10,
              shadowColor:'#171717',
              shadowOffset:{width:2, height:4},
              shadowOpacity:0.2,
              shadowRadius:3,
            }} 
          >
            <Ionicons name="notifications" size={20} color={Colors.black}/>
          </TouchableOpacity>
        ),
      }}
    />
    <View style={[styles.container, {paddingTop: headerHeight}]}>
      <Text style={styles.headingText}>Explore the Beautiful World!</Text>
      <View style={styles.searchSelectionWrapper}>
        <View style={styles.searchBar}>
          <Ionicons name='search' size={18} style={{paddingRight:10, marginTop:6}}/>
          <TextInput placeholder="Search..." style={{color:Colors.black}}/>
        </View>
        <TouchableOpacity onPress={()=>{}} style={styles.filterBtn}>
          <Ionicons name="options" size={28} style={{color:Colors.white}} />

        </TouchableOpacity>
      </View>
      <CategoryButtons/>
    </View>
    </>
  );
};
export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    backgroundColor:Colors.bgColor,
  },
  headingText:{
    fontSize: 28,
    fontWeight:'800',
    color:Colors.black,
    marginTop:10,

  },
  searchSelectionWrapper:{
    flexDirection:'row',
    marginVertical:20,

  },
  searchBar:{
    flex:1,
    flexDirection:'row',
    backgroundColor:Colors.white,
    padding:16,
    borderRadius:10,
  },
  filterBtn:{
    backgroundColor:'#ff8000',
    padding:12,
    borderRadius:10,
    marginLeft:20,
    

  },
});
