import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Share } from 'react-native';
import { Linking } from 'react-native';
import { Button, StyleSheet, Text, View, Image, LogBox, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
//import data from '../mydata.json';

const mainImage = 'https://c.pxhere.com/photos/be/03/fall_flowers_chrysanthemum_flower_wallpaper_free_pictures_autumn_flowers_yellow_chrysanthemums_wildflower-789719.jpg!d';

export default function MyDetailPage() {

  LogBox.ignoreLogs(['Warning: ...']);

  const router = useRoute();

  const callFunction = () => {
    alert('아이템을 누를때 불리는 함수입니다.');
  }

  const share = () => {
      Share.share({
           message:`${router.params.title} \n\n${router.params.desc}`,
      });    
  }

  const linkSMS = () => {
    const phoneNumber  = '01012345678';
    const messageContent = '조심해서 오세요';
    Linking.openURL(`sms:${phoneNumber}?body=${messageContent}`);
  }  

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri:mainImage}}/>
        <View key={0} style={styles.itemText} onPress={callFunction}>
          <Text style={styles.itemTitle}>{router.params.title}</Text>
          <Text style={styles.itemDesc} numberOfLines={3}>{router.params.desc}</Text>
        </View>  
        <View style={styles.buttonContainer}>
              <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={share}>
                    <Text style={styles.buttonText}>버튼</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
              <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={linkSMS}>
                    <Text style={styles.buttonText}>SMS 보내기</Text>
              </TouchableOpacity>
        </View>
        <Button title={'이메일 보내기'} onPress={() => Linking.openURL(`mailto:test@mail.com`)} />
        <Button title={'전화 걸기'} onPress={() => Linking.openURL(`tel:01012345678`)} />
        <Button title={'웹페이지 열기'} onPress={() => Linking.openURL(`https://www.google.com`)} />
        <Button title={'빈 버튼'} onPress={() => Linking.openURL(`tel:01012345678`)} />
        
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#000"
  },
  image:{
    height:400,
    margin:10,
    marginTop:40,
    borderRadius:20
  },  
  itemText: {
    padding:20,
    justifyContent:'center',
    alignItems:'center'
  },
  itemTitle: {
    fontSize:25,
    fontWeight:'700',
    color:"#eee",
    alignSelf:"left"
  },
  itemDesc: {
    fontSize:15,
    marginTop:10,
    color:"#eee",
    alignSelf:"left"
  },  
  mainImage: {
    width:'90%',
    height:200,
    borderRadius:10,
    marginTop:20,
    alignSelf:"center"
  }, 
  buttonContainer:{
    marginTop:20,
    justifyContent:'center',
    alignItems:'center'
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth:1,
    borderColor:'deeppink',
    borderRadius:7    
  },
  buttonText: {
    color: "#fff"
  }
});