import { FlatList, ListRenderItem, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { GroupType } from '@/types/groupType';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';



const GroupListings = ({listings}: {listings:GroupType[]}) => {
    const renderItem:ListRenderItem<GroupType> = ({item})=>{
        return(
           
            <View style={styles.item}>
                <Image
              style={styles.image}
              source={{
                uri: item.image,
              }}
            />
            <View>
                <Text style={styles.itemTxt}>{item.name}</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Ionicons name='star' size={15} color={Colors.primaryColor}/>
                    <Text style={styles.itemRating}>{item.rating}</Text>
                    <Text style={styles.itemReviews}>({item.reviews})r</Text>
                </View>
            </View>
            </View>

        )

    }

  return (
    <View style={{marginVertical:20}}>
      <Text style={styles.title}>Top Travel Groups</Text>
      <FlatList data={listings} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false}/>
    </View>
  )
}

export default GroupListings

const styles = StyleSheet.create({
    title:{
        fontSize:22,
        fontWeight:'600',
        color:Colors.black,
        marginBottom:10
        


    },
    item:{
        backgroundColor:Colors.white,
        padding:10,
        borderRadius:10,
        marginRight:20,
        flexDirection:'row',
        alignItems:'center',


    },
    image:{
        width:80,
        height:100,
        borderRadius:10,
        marginRight:10
    },
    itemTxt:{
        fontSize:8,
        fontWeight:'600',
        color:Colors.black
    },
    itemRating:{
        fontSize:8,
        fontWeight:'600',
        color:Colors.black,
        marginLeft:5


    },
    itemReviews:{
        fontSize:8,
        fontWeight:'600',
        color:'#999',
        marginLeft:5

    }

})
