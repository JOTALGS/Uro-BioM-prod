import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, PanResponder, Image, SafeAreaView } from 'react-native';


const backColor = '#0081a1'


//Principal Screens
const HomeScreen = ({navigation}) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
          useNativeDriver: false,
        }),
        onPanResponderRelease: () => {
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
          }).start();
        }
      })
    ).current;

    const pan2 = useRef(new Animated.ValueXY()).current;
    const panResponder2 = useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, {dx: pan2.x, dy: pan2.y}], {
          useNativeDriver: false,
        }),
        onPanResponderRelease: () => {
          Animated.spring(pan2, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
          }).start();
        }
      })
    ).current;

    return (
      <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Uro-BioM</Text>
        <Animated.View
          style={[
            styles.square,
            {transform: [{translateX: pan.x}, {translateY: pan.y}]},
          ]}
          {...panResponder.panHandlers}>
            <Image
                source={require("../assets/icon.png")}
                style={styles.logoImage}
            />
        </Animated.View>
        <Text style={[styles.title, {marginBottom: '5%',}]}>BIOMARCADORES MOLECULARES EN CÁNCER DE PRÓSTATA</Text>
        <TouchableOpacity
          style={[styles.buttonIniciar, { marginTop: '1%' }]}
          onPress={() => navigation.navigate('inicio')}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
        <Animated.View
          style={[
            styles.div2,
            {transform: [{translateX: pan2.x}, {translateY: pan2.y}]},
          ]}
          {...panResponder2.panHandlers}>
            <Text style={styles.subTitle}>Dr. Levin Martinez</Text>
            <Text style={styles.content}>Prof. Titular Cátedra de Urología</Text>
            <Text style={styles.subTitle}>Dr. Fermin Domenech</Text>
            <Text style={styles.content}>Asistente Titular Cátedra de Urología</Text>
              <Text style={styles.subTitle}>Hospital de Clínicas</Text>
              <Text style={[styles.subTitle, { marginTop: '0%' }]}>Dr. Manuel Quintana</Text>
              <Text style={styles.content}>Cátedra de Urología Prof. Dr. Levin Martinez</Text>
              <Text style={styles.content}>Universidad de la República</Text>
              <Text style={styles.content}>Montevideo, Uruguay</Text>
        </Animated.View>
      </View>
      </SafeAreaView>
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
      height: '50%',
      paddingTop: '10%',
      marginTop: '5%',
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
    buttonText: {
      color: 'white',
      fontSize: 17,
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
      textAlignVertical: 'center',
    },
    square: {
      width: 200,
      height: 200,
      borderRadius: 150,
      alignSelf: 'center',
    },
    logoImage: {
      width: 200,
      height: 200,
      borderRadius: 150,
    }
  });
  
export default HomeScreen;