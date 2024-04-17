import {
  FlatList,
  Image,
  ListRenderItem,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import React from "react";
import { ListingType } from "@/types/listingType";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  listings: any[];
};

const Listings = ({ listings }: Props) => {
  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <>
        <TouchableOpacity>
          <View style={styles.item}>
            <Image
              style={styles.image}
              source={{
                uri: item.image,
              }}
            />
         
          <View style={styles.bookmark}>
            <Ionicons
              name="bookmark"
              size={20}
              style={{ color: Colors.primaryColor }}
            />
          </View>
          <View>
            <Text style={styles.name1}>{item.name}</Text>
          </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <View>
      <FlatList
        data={listings}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        alwaysBounceVertical
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

export default Listings;

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
    borderRadius: 2,
  },
  bookmark: {
    position: "absolute",
    top: 185,
    right: 30,
  },
  name1:{
      fontSize: 18,
      fontWeight:"700",
      color:Colors.black,
      marginTop:10,
  
    },
  
});
