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
import { ListingType } from "@/types/listingType";
import { Colors } from "@/constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

type Props = {
  listings: any[];
  category:string;
};

const Listings = ({ listings, category }: Props) => {
  const [loading, setLoading] = useState(false);
  const [filteredListings, setFilteredListings] = useState<ListingType[]>([]);

  useEffect(()=>{
    console.log('Update Listing:', category );

    if (category){
    const filtered = listings.filter(
    (listing)=>listing.category === category);
    setFilteredListings(filtered);
    if (category === "All"){
    setFilteredListings(listings)
    }

    setLoading(true);
    }

    setTimeout(()=>{
      setLoading(false)
    }, 200);
  }, [listings, category]);
  const renderItems: ListRenderItem<ListingType> = ({ item }) => {

    return (
      <>
      <Link href={`/listing/${item.id}`} asChild>
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
                {item.name}
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
      </>
    );
  };
  return (
    <View>
    {loading ?(
    <Text>Loading...</Text>
    ):(
      <FlatList
        data={filteredListings}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      )}
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
