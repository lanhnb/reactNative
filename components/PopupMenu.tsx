import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Modal,
  Text,
  Animated,
  Easing,
} from "react-native";
import { Button, Menu, Divider, PaperProvider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PopupMenu = () => {
  const [visible, setVisible] = React.useState(false);
  const scale = React.useRef(new Animated.Value(0)).current;

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const options = [
    { title: "Publicar", icon: "grid", action: "publicar"},
    { title: "Story", icon: "plus", action: "Story"},
    { title: "Video do Reels", icon: "video", action: "Reels" },
    {
      title: "Transmissao ao vivo",
      icon: "antenna",
      action: "Transmissao",
    },
  ];
function resizeBox(to){
  to === 1 && setVisible(true);
  Animated.timing(scale,{
    toValue: to,
    useNativeDriver:true,
    duration:700,
    easing:Easing.linear,
  }).start(()=> to === 0 && setVisible(false));
}
  return (
    <>
      <TouchableOpacity onPress={()=>resizeBox(1)}>
        <MaterialCommunityIcons
          name="plus-circle-outline"
          size={26}
          color={Colors.black}
        />
      </TouchableOpacity>
      <Modal transparent visible={visible}>
        <SafeAreaView
          style={{ flex: 1 }}
          onTouchStart={() => resizeBox(0)}
        >
          <Animated.View style={[styles.popup,
          {opacity:scale.interpolate({inputRange:[0,1], outputRange:[0,1]})},
            {transform:[{scale}],}]}>
            {options.map((op, i)=>(
              <TouchableOpacity style={[styles.option,{borderBottomWidth:i===options.length-1 ? 0:1}]} key={i} onPress={()=> alert(`${op.action}`)}>
                <Text>{op.title}</Text>
                <MaterialCommunityIcons name={op.icon} size={26} color={'#212121'} style={{marginLeft:10}}/>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </SafeAreaView>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  popup:{
    borderRadius:8,
    borderColor:Colors.primaryColor,
    borderWidth:1,
    backgroundColor:Colors.white,
    paddingHorizontal:10,
    position:'absolute',
    top:85,
    right:20,
  },
  option:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:7,
    borderBottomColor:'#ccc',
  }
})
export default PopupMenu;
