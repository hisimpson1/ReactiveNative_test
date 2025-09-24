import { useNavigation } from "@react-navigation/native";
import React from "react"
import {View,Text,Image,StyleSheet, TouchableOpacity} from "react-native";

export default function MyItem({content, mykey}) {

    const navigation = useNavigation();

    const callFunction = (title, desc) => {
        //alert(`title: ${title}, desc: ${desc}`);
        console.log(`title : ${title}, mykey : ${mykey}`);
        navigation.navigate("DetailPage",{
            //title: title,
            //desc:desc,
            mykey:mykey
        })    
    };

    const value = content;
    return (   
        <TouchableOpacity style={styles.itemUnit} onPress={() => callFunction(value.itemTitle, value.itemDesc)}>
            <Image style={styles.itemImage} source={{uri:value.itemImage}}/>
            <View style={styles.itemText}>
                    <Text style={styles.itemTitle}>{value.itemTitle}</Text>
                    <Text style={styles.itemDesc} numberOfLines={3}>{value.itemDesc}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
  itemUnit:{
    flex:1,
    flexDirection:"row",
    marginTop:15

  },
  itemImage: {
    flex:1,
    width:100,
    height:100,
    borderRadius:10,
  },
  itemText: {
    flex:2,
    flexDirection:"column",
    marginLeft:10,
  },
  itemTitle: {
    color: 'yellow',
    fontSize:20,
    fontWeight:"700"
  },
  itemDesc: {
    color: 'yellow',
    fontSize:15
  },    
})    