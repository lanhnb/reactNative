import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Stack, router, useLocalSearchParams, useRouter } from "expo-router";
import { xkldType } from "@/types/xkldType";
import lisData from "@/data/xkld.json";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import Animated, { SlideInDown, interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from "react-native-reanimated"
import React, { useEffect, useState } from "react";


const { width } = Dimensions.get("window");
const IMG_HEIGHT = 300;

const ListingDetails = () => {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState([]);

      const getAPIdata = async () => {
          const url = "https://lanhnb.click/api/xklds";
//           const url = "https://jsonplaceholder.typicode.com/posts/2";
          let result = await fetch(url);
          result = await result.json();
          setData(result)
      }
      useEffect(() => {
          getAPIdata()
      }, [])

 


  const listing: xkldType = (lisData as xkldType[]).find(
    (item) => item._id === id
  );

const listing1= data.find(
    (item) => item._id === id
  );
  console.log("listing1", listing1)

  const router = useRouter();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef)
  const imageAnimatedStyle = useAnimatedStyle(()=>{
    return{
        transform:[
            {
            translateY: interpolate(
                scrollOffset.value,
                [-IMG_HEIGHT, 0, IMG_HEIGHT],
                [-IMG_HEIGHT/2, 0, IMG_HEIGHT * 0.75]
            ),
        },
        {
            scale:interpolate(
                scrollOffset.value,
                [-IMG_HEIGHT, 0, IMG_HEIGHT],
                [2, 1, 1]
            ),
        }
        ],
    };
  });
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                borderRadius: 10,
                padding: 4,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <Feather name="arrow-left" size={20} />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                borderRadius: 10,
                padding: 4,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <Ionicons name="bookmark-outline" size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Animated.ScrollView ref={scrollRef} contentContainerStyle={{paddingBottom:150}}>
        <Animated.Image
            source={{ uri: listing.image[0].url }}
            style={[styles.image, imageAnimatedStyle]} />
        <View style={styles.contentWrapper}>
          <Text style={styles.listingName}>{listing.namex}</Text>
          <View style={styles.listingLocationWrapper}>
            <FontAwesome5
              name="map-marker-alt"
              size={18}
              color={Colors.primaryColor}
            />
            <Text style={styles.listingLocationTxt}>{listing.categoryx}</Text>
          </View>
          <View style={styles.hightlightWrapper}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.hightlightIcon}>
                <Ionicons name="time" size={18} color={Colors.primaryColor} />
              </View>
              <View>
                <Text style={styles.hightlightTxt}>Duration</Text>
                <Text style={styles.hightlightTxtValue}>
                  {listing.reviewsx} Days
                </Text>
              </View>
            </View>
            {/* End View duration */}
            <View style={{ flexDirection: "row" }}>
              <View style={styles.hightlightIcon}>
                <FontAwesome
                  name="users"
                  size={18}
                  color={Colors.primaryColor}
                />
              </View>
              <View>
                <Text style={styles.hightlightTxt}>Person</Text>
                <Text style={styles.hightlightTxtValue}>{listing.salaryx}</Text>
              </View>
            </View>
            {/* End View  Person*/}
            <View style={{ flexDirection: "row" }}>
              <View style={styles.hightlightIcon}>
                <Ionicons name="star" size={18} color={Colors.primaryColor} />
              </View>
              <View>
                <Text style={styles.hightlightTxt}>Rating</Text>
                <Text style={styles.hightlightTxtValue}>{listing.starsx}</Text>
              </View>
            </View>
            {/* End View  Rating*/}
          </View>
          <Text style={styles.listingDetails}>{listing.description}</Text>
        </View>
        </Animated.ScrollView>
      </View>

      <Animated.View style={styles.footer} entering={SlideInDown.delay(200)}>
        <TouchableOpacity onPress={()=>{}} style={[styles.footerBtn, styles.footerBtn2]}>
          <Text style={styles.footerBtnTxt}>Book Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}} style={styles.footerBtn}>
          <Text style={styles.footerBtnTxt}>${listing.salaryx}</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentWrapper: {
   padding:20,
   backgroundColor:Colors.white
},
  listingLocationWrapper: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10,
    alignItems: "center",

  },
  listingName: {
    fontSize: 24,
    fontWeight: "500",
    color: Colors.black,
    letterSpacing: 0.5,
  },
  listingLocationTxt: {
    fontSize: 14,
    color: Colors.black,
    marginLeft: 5,
  },
  image: {
    width: width,
    height: IMG_HEIGHT,
  },
  hightlightWrapper: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  hightlightIcon: {
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 5,
    alignItems: "center",
  },
  hightlightTxt: {
    fontSize: 12,
    color: "#999",
  },
  hightlightTxtValue: {
    fontSize: 14,
    fontWeight: "600",
  },
  listingDetails: {
    fontSize: 16,
    color: Colors.black,
    lineHeight: 25,
    letterSpacing: 0.5,
  },
  footer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    padding: 20,
    paddingBottom: 30,
    justifyContent: "space-between",
  },
  footerBtn: {
    flex:1,
    backgroundColor: Colors.black,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  footerBtn2: {
    flex:2,
    backgroundColor: Colors.primaryColor,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginRight:20
  },
  footerBtnTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
