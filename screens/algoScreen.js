import React, {  useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';


const backColor = '#0081a1'


const AlgoScreen = ({navigation}) => {
    const [translateY1] = useState(new Animated.Value(1000)); // Initial offset from top for first button (adjust as needed)
    const [translateY2] = useState(new Animated.Value(1000)); // Initial offset from bottom for second button (adjust as needed)
  
    useEffect(() => {
      Animated.parallel([ // Use parallel animation for simultaneous movement
        Animated.timing(translateY1, {
          toValue: 100, // Animate to the center (adjust offset for precise centering)
          duration: 300, // Animation duration (adjust as desired)
          useNativeDriver: true, // Optimize performance (optional)
        }),
        Animated.timing(translateY2, {
          toValue: 100, // Animate to the center (adjust offset for precise centering)
          duration: 300, // Animation duration (adjust as desired)
          useNativeDriver: true, // Optimize performance (optional)
        }),
      ]).start();
    }, []);
  
  
    return (
    <View style={styles.container}>
      <View style={styles.backButtonDiv}>
       <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('inicio')}>
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
      <View style={[styles.buttonsContainer , { justifyContent: 'space-around'}]}>
      <Text style={[styles.title, { marginBottom: '1%', marginTop: '10%' }]}>Usos en la práctica clínica:</Text>
        <Animated.View  style={{ transform: [{ translateY: translateY1 }] }}>
          <TouchableOpacity
            style={styles.buttonInit}
            onPress={() => navigation.navigate('diagnostico')}>
            <Text style={styles.buttonText}>Diagnóstico</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View  style={{ transform: [{ translateY: translateY2 }] }}>
          <TouchableOpacity
            style={styles.buttonInit}
            onPress={() => navigation.navigate('tratamiento')}>
            <Text style={styles.buttonText}>Pronóstico/Terapéutico</Text>
          </TouchableOpacity>
        </Animated.View >
      </View>
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
      width: '100%',
      height: '50%',
      marginVertical: 15,
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
    title: {
      textAlign: 'center',
      color: backColor,
      fontSize: 20,
      fontWeight: "bold",
      marginTop:'10%',
      marginBottom: '13%',
    },
  });

  export default AlgoScreen;