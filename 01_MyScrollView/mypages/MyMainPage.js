import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, LogBox, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Loading from '../mycomponents/MyLoading';
import data from '../mydata.json';

const main_title = data.title;
const about_text = data.desc;
const background_image = data.backgroundImage;
const main_image = data.mainImage;

export default function MyMainPage() {

  LogBox.ignoreLogs(['Warning: ...']);

  //나중에 mydata.json의 데이터를 입력할것이다.
  const [state,setState] = useState([]);
  //초기값은 로딩중으로 입력
  const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
      setState(data)
      setTimeout(()=>{
            setIsLoading(false);
      },1000)
     
    },[]);

  const navigation = useNavigation();

  const callFunction = (title, desc) => {
    //alert(`title: ${title}, desc: ${desc}`);
    navigation.navigate("DetailPage",{
      title: title,
      desc:desc
    })    
  }

  const items = [];  
  data.items.map((value, index) => {
      items.push(
          <TouchableOpacity key={index} style={styles.itemUnit} onPress={() => callFunction(value.itemTitle, value.itemDesc)}>
              <Image style={styles.itemImage} source={{uri:value.itemImage}}/>
              <View style={styles.itemText}>
                        <Text style={styles.itemTitle}>{value.itemTitle}</Text>
                        <Text style={styles.itemDesc} numberOfLines={3}>{value.itemDesc}</Text>
              </View>
          </TouchableOpacity>
      );
  });

  return isLoading ? <Loading/> : (
    
    <View style={{flex:1}}>

      <StatusBar style="black" />
      <ImageBackground 
        source={{uri:background_image}} 
        style={[styles.fixed, styles.containter]}
        resizeMode="cover"/>

      <ScrollView style={[styles.fixed, styles.containter]}>
        <Text style={styles.mainTitle}>{main_title}</Text>
        <Image style={styles.mainImage} source={{uri:main_image}}/>
        <View style={styles.itemContainer}>
              <View style={styles.itemAbout}>
                   <Text>{about_text}</Text>
              </View>           
              {items}      
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containter: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },  
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  itemContainer: {
    width:'90%',
    alignSelf:"center"
  },   

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
  mainTitle: {
    color: 'yellow',
    fontSize: 30,
    fontWeight: '700',
    marginTop:100,
    marginLeft:20
  },  
  mainImage: {
    width:'90%',
    height:200,
    borderRadius:10,
    marginTop:20,
    alignSelf:"center"
  }, 
  itemAbout: {
    borderWidth: 2,
    borderColor:"#333",
    borderRadius:10,
    borderStyle:"dotted",
    marginTop:15,
    height:70,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
    opacity:0.5
  },   
});