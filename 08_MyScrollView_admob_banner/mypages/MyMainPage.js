import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, LogBox, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import MyItem from '../mycomponents/MyItem'
import Loading from '../mycomponents/MyLoading';
//import data from '../mydata.json';
import {firebase_db} from '../myfirebaseConfig'
import { Platform } from 'react-native';
import { myInitAdMob } from '../mycomponents/myads';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const main_title = '음식에 대해';
const about_text = '여러가지 음식에 대해서 알아본다';
const background_image = 'https://reactjs.org/logo-og.png';
const main_image = 'https://c.pxhere.com/photos/be/03/fall_flowers_chrysanthemum_flower_wallpaper_free_pictures_autumn_flowers_yellow_chrysanthemums_wildflower-789719.jpg!d';

const adUnitId = Platform.OS == 'android' ? 'ca-app-pub-4423058146401143/8457xxxxx' : 'ca-app-pub-xxxxxx';

export default function MyMainPage() {

  LogBox.ignoreLogs(['Warning: ...']);

    setTimeout(() => {
      myInitAdMob()
    }, 1000)

  //나중에 mydata.json의 데이터를 입력할것이다.
  const [state, setState] = useState([]);
  //초기값은 로딩중으로 입력
  const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
      // setState(data)
      setTimeout(()=>{
        firebase_db.ref('/mydata').once('value').then((snapshot) => {
          if (snapshot.exists()) {
            let list = snapshot.val();
            console.log("firebase list >>>")
            //console.log(list)
            setState(list)
          }
          else {
            console.log('파이어베이스 데이터가 존재하지 않습니다.');
          }
          setIsLoading(false)
        });    
      },1000)
     
    },[]);

  return isLoading ? <Loading/> : (
    
    <View style={{flex:1}}>
      <StatusBar style="black" />
      <ImageBackground 
        source={{uri:background_image}} 
        style={[styles.fixed, styles.containter]}
        resizeMode="cover"/>

        <View style={styles.bannerContainer}>
              <BannerAd 
                unitId={adUnitId}
                size={BannerAdSize.LARGE_BANNER}
                
                onAdFailedToLoad={(err) =>{
                    console.log(err)
                }}
              />  
        </View>             

      <ScrollView style={[styles.fixed, styles.containter]}>
        <Text style={styles.mainTitle}>{main_title}</Text>
        <Image style={styles.mainImage} source={{uri:main_image}}/>
        <View style={styles.itemContainer}>
              <View style={styles.itemAbout}>
                   <Text>{about_text}</Text>
              </View>           
              {state.items.map((value,index) => {
                return (<MyItem key={index} content={value} mykey={index}/>);
              })}                

              <View style={{height:15}}></View>
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
  bannerContainer: {
      width: '100%',             // 전체 너비 기준으로 설정
      alignItems: 'center',      // 가로 가운데 정렬 (핵심!)
      // justifyContent: 'center',  // row 방향일 때 추가 (기본 column이므로 불필요)
    },  
});