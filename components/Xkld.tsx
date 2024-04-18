import {
    FlatList,
    Image,
    ListRenderItem,
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  
  import { Colors } from "@/constants/Colors";
  import { FontAwesome5, Ionicons } from "@expo/vector-icons";
  import { Link } from "expo-router";
  
  type Props = {
    xkld: any[];
    image:any[];
   
  };
  
  const Xkld = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const getAPIdata = async () => {
        // const url = "https://jsonplaceholder.typicode.com/posts";
        const url = "https://lanhnb.click/api/xklds"
        let result = await fetch(url);
        result = await result.json();
        setData(result);
        setLoading(true);
    }
    useEffect(() => {
        getAPIdata()
    })

  
    
    return (
      <View>
       
       { data.length ?
        <FlatList
          data={data }
          
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item})=>
          
          <Link href={`/xkld/${item._id}`} asChild>
            <TouchableOpacity>
              <View style={styles.item}>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.image[0].url,
                  }}
                />
    
                <View style={styles.bookmark}>
                  <Ionicons
                    name="bookmark-outline"
                    size={20}
                    color={Colors.white}
                  />
                </View>
                <View>
                  <Text
                    style={styles.itemTxt}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item._id}
                  </Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesome5
                      name="map-marker-alt"
                      size={18}
                      color={Colors.primaryColor}
                    />
                    <Text style={styles.itemLocationTxt}>{item.location}</Text>
                  </View>
                  <View>
                    <Text style={styles.itemPriceTxt}>${item.price}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            </Link>
          }
         />
         :null
        }
        
        
      </View>
    );
  };
  
  export default Xkld;
  
  const styles = StyleSheet.create({
    item: {
      backgroundColor: Colors.white,
      padding: 10,
      borderRadius: 10,
      marginRight: 20,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 10,
      marginBottom: 30,
    },
    bookmark: {
      position: "absolute",
      top: 185,
      right: 30,
      backgroundColor: Colors.primaryColor,
      borderRadius: 30,
      padding: 10,
      borderWidth: 2,
      borderColor: Colors.white,
    },
    itemTxt: {
      fontSize: 16,
      fontWeight: "600",
      color: Colors.black,
      marginBottom: 10,
    },
    itemLocationTxt: {
      fontSize: 12,
      marginLeft: 5,
    },
    itemPriceTxt:{
      fontSize:12,
      fontWeight:'600',
      color:Colors.primaryColor
    }
  });
  