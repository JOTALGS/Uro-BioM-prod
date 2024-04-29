import { Animated, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Linking, Image, Modal } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { TextureLoader } from 'three';
import pngTexture from './assets/logo_texture.png';

import { Svg, Path } from 'react-native-svg';
import Router from './router/router';



const backColor = '#0081a1'


export default function App() {
  return (
    <Router />
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
    backgroundColor: '#eaeaea',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    fontSize: 30,
    padding: 10,
    alignSelf: 'center',
    color: backColor,
    fontWeight: 'bold',
  },
  canvasContainer: {
    marginTop: 10,
    height: '30%',
    borderRadius: 180,
    padding: 15,
    width: '65%',
    marginHorizontal: '17.5%',
    backgroundColor: backColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  canvas: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backButtonDiv: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  backButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginRight: '80%',
    marginTop: '1%',
    height: 50,
  },
  iconTextContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginTop: 8,
    alignSelf: 'flex-start',
    paddingRight: 1,
    width: 60,
    height: 35,
  },
  text: {
    fontSize: 16,
    marginTop: 13,
    marginRight: 50,
    alignSelf: 'flex-start',

  },
  backView: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    bottom: 300,
    height: '35%',
  },
  containerTabs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
    marginTop: '5%',
    marginBottom: '20%'
  },
  containerListado: {
    flex: 1,
    alignItems: "center",
    backgroundColor: backColor
  },
  button: {
    backgroundColor: backColor,
    padding: 10,
    borderRadius: 55,
    marginTop: '10%',
    width: '100%',
    height: '25%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // This is for Android shadow
  },
  buttonInit: {
    backgroundColor: backColor,
    padding: 10,
    borderRadius: 55,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
    marginTop: '8%',
    width: '100%',
    height: '30%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'column',
    height: '40%',
    borderRadius: 55,
    padding: '8%',
  },
  title: {
    textAlign: 'center',
    color: backColor,
    fontSize: 20,
    fontWeight: "bold",
    marginTop:'10%',
    marginBottom: '13%',
  },
  subTitle: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 15,
    fontWeight: "bold",
    marginTop: '3%',
    marginHorizontal: '1%',
  },
  content: {
    color: '#fff',
    textAlign: 'right',
    padding: 2,
  },
  div2: {
    backgroundColor: backColor,
    alignItems: 'flex-end',
    width: '100%',
    marginRight: '15%',
    padding: 5,
    paddingEnd: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop: 20,
    flex: 1,
  },
  buttonListado: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 55,
    backgroundColor: 'white',
    elevation: 3, // Add shadow on Android
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ translateY: 0 }], // Start the buttons off-screen    
  },
  buttonListadoContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 60,
    marginRight: 10,
    marginLeft: 10,
    minWidth: 90,
  },
  imageForTest: {
    width: '80%',
    maxWidth:300,
    height: '15%',
    alignSelf: 'center',
  },
  buttonIniciar: {
    backgroundColor: backColor,
    width: '50%',
    height: '7%',
    alignSelf: 'center',
    borderRadius: 55,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 25,
  },
  buttonListadoText: {
    fontSize: 16,
    color: 'black',
    flex: 1, // Take up remaining space
    textAlign: 'auto',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
  },
  tab: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 25,
      borderColor: "grey",
  },
  tabButton: {
    maxWidth: '45%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#b6b5b5",
},
  selectedTab: {
      backgroundColor: 'lightblue',
  },
  tabText: {
      fontSize: 13,
      fontWeight: 'bold',
      color: backColor,
      textAlign: 'auto',
  },
  tabContent: {
    backgroundColor: '#cfcfcffd',
    margin: 10,
    padding: 20,
    borderRadius: 40,
    marginBottom: 50,
  },
  scrollContainer: {
    backgroundColor: '#d8d7d7fd',
    justifyContent: 'flex-start',
    borderRadius: 10,
  },
  scrollContainerFromul: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 15,
    paddingBottom: 50,
    marginBottom: 60,
  },
  tabContentText: {
      fontSize: 19,
      padding: 10,
      color: '#3b3b3bfd',
  },
  dataContainer: {
    backgroundColor: backColor,
    fontSize: 16,
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    width: '90%',
    height: '55%',
    alignSelf: 'center',
  },
  divSearch: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#cfcfcffd',
  },
  divSearch2: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 55,
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    marginVertical: 5,
    flexDirection: 'column',
    borderRadius: 55,
  },
  label: {
    alignSelf: 'center',
    color: '#006781',
    fontSize: 16,
    fontWeight: 'bold',
  },
  picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    borderColor: 'grey',
  },
  pickerSearch: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 55,
    borderColor: 'grey',
  },
  selectedButton: {
    color: '#4CAF50', // Positive green
  },
  unselectedButton: {
    color: '#F44336', // Negative red
  },
  pdfContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  inputText: {
    width: '90%',
    height: '3.3%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 55,
    padding: 8,
    marginTop: 15,
    marginBottom: 20,

    marginBottom: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    marginBottom: 0,
    marginVertical:10,
    padding: 10,
    borderRadius: 55,
    minWidth: '25%',
    minHeight: '5%',
    backgroundColor: '#2196F3',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonInput: {
    marginBottom: 0,
    marginTop:15,
    padding: 10,
    height: '85%',
    borderRadius: 55,
    borderWidth: 1,
    borderColor: '#ccc',
    minWidth: '40%',
  },
  formText: {
    fontWeight: 'bold',
    fontSize:15,
    color: '#010a5c'
  },
  horizontalLine:{
    borderBottomColor: '#454645',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
  },
  graphDiv: {
    width: 100,
    paddingRight: 15,
  },
  graphImage: {
    borderRadius: 25,
    marginVertical:20,
    width: 310,
    height: 250,
  },
  infoSubTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black'
  },
});
