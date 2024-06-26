import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from "react-native";
import React from "react";
import MenuRe from "@/components/PopupMenu";
import { Colors } from "@/constants/Colors";
import { Icon } from "react-native-paper";
import PopupMenu from "@/components/PopupMenu";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import Xkld from "@/components/Xkld";


const Page = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "Settings",
         
          
          headerLeft: () => (
            <View>
              <MaterialCommunityIcons
                onPress={router.back}
                name="arrow-left"
                size={26}
                color={"#212121"}
              />
            </View>
          ),
          headerRight: () => (
            <View>
              <PopupMenu />
            </View>
          ),
        }}
      />
      <View style={styles.xkld}>
       <Xkld/>
      </View>

      {/* for one */}
      {/* <View style={styles.container}>
            <Text>Call Api</Text>
         {
            data ?
            <View>
                <Text>{data.id}</Text>
                <Text>{data.title}</Text>
            </View>
            :null
         }   
        </View> */}
    </>
  );
};
export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  xkld:{
    top:80,

  }
});
