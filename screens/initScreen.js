import React, { useState, useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Svg, Path } from 'react-native-svg';


const backColor = '#0081a1'
const InitScreen = ({navigation}) => {
    const [translateY] = useState(new Animated.Value(1000));// Initial offset from bottom (adjust as needed)
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.5)).current;

    const fadeIn = () => {
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      }).start();
      Animated.timing(scaleAnim, {
        toValue: 1.4,
        duration: 2500,
        useNativeDriver: true,
      }).start();
    };
    useEffect(() => {
      fadeIn(); // Call fadeIn function when component mounts
    }, []); 

    useEffect(() => {
      Animated.timing(translateY, {
        toValue: -60, // Animate to the center (adjust offset for precise centering)
        duration: 600, // Animation duration (adjust as desired)
        useNativeDriver: true, // Optimize performance (optional)
      }).start();
    }, []);
  
    return (
    <View style={styles.container}>
      <View style={[styles.backButtonDiv]}>
       <TouchableOpacity
          style={[styles.backButton]}
          onPress={() => navigation.navigate('Home')}>
          <View style={styles.iconTextContainer}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              fill="#000000"
              class="icon"
              version="1.1"
              style={styles.icon}>
              <Path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill="" />
            </Svg>
            <Text style={styles.text}>Atrás</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.backView}>
      </View>
      <View style={[styles.buttonsContainer, {marginTop: '30%'}]}>
        <Animated.View  style={{ transform: [{ translateY }] }}>
          <TouchableOpacity
            style={[styles.buttonInit, { marginTop: '8%' , height: '35%'}]}
            onPress={() => navigation.navigate('listado')}>
            <Text style={styles.buttonText}>Biomarcadores disponibles</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonInit, { height: '35%'}]}
            onPress={() => navigation.navigate('algor')}>
            <Text style={styles.buttonText}>Seleccionar pruebas</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            alignSelf: 'center',
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}>
          <Image
            source={require("../assets/icon.png")}
            style={styles.logoImage}
          />
      </Animated.View>
    </View>
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
    buttonsContainer: {
      flexDirection: 'column',
      height: '40%',
      borderRadius: 55,
      padding: '8%',
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
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
      textAlignVertical: 'center',
    },
    backView: {
      position: 'absolute',
      top: 100,
      left: 0,
      right: 0,
      bottom: 300,
      height: '35%',
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
    logoImage: {
      width: 200,
      height: 200,
      borderRadius: 150,
    }
  });
  

export default InitScreen;