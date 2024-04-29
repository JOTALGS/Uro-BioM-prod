import React, {  useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Svg, Path } from 'react-native-svg';


const backColor = '#0081a1'
const ListadoScreen = ({ navigation }) => {
    const [translateY] = useState(new Animated.Value(1000));// Initial offset from bottom (adjust as needed)
    const tests = [
      { testName: "4KScore", text: "Calicreínas", image: require('../assets/4kscore.png') },
      { testName: "SelectMDX", text: "Panel genético basado en ARNm", image: require('../assets/selectmdx.png') },
      { testName: "ConfirmMDX", text: "Estudios Epigenéticos", image: require('../assets/confirmmdx.png') },
      { testName: "Oncotype", text: "Genomic Prostate Score (GPS)", image: require('../assets/oncotype.png') },
      { testName: "Decipher", text: "Genomic Classifier (GC)", image: require('../assets/decipher.png') }
    ];
  
    useEffect(() => {
      Animated.timing(translateY, {
        toValue: 0, // Animate to the center (adjust offset for precise centering)
        duration: 600, // Animation duration (adjust as desired)
        useNativeDriver: true, // Optimize performance (optional)
      }).start();
    }, []);
  
    const renderButton = (test) => (
      <TouchableOpacity
        key={test.testName}
        style={styles.buttonListado}
        onPress={() => navigation.navigate('tests', { testName: test.testName })}>
        <View style={styles.buttonListadoContent}>
          <Image
            source={test.image}
            style={[styles.image, { resizeMode: 'contain' }]}
          />
          <Text style={styles.buttonListadoText}>{test.text}</Text>
        </View>
      </TouchableOpacity>
    );
  
    return (
      <SafeAreaView style={styles.containerListado}>
        <View style={[styles.backButtonDiv, { paddingLeft: 20, paddingTop: 30, marginLeft: '2%'}]}>
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
          <Text style={[styles.title, {color: '#fff'}]}>Listado de biomarcadores</Text>
          <Animated.View  style={{ transform: [{ translateY }] }}>
            {tests.map(test => renderButton(test))}
          </Animated.View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
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
    containerListado: {
      flex: 1,
      alignItems: "center",
      backgroundColor: backColor
    },
    buttonListado: {
      width: '80%',
      padding: 8,
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
    buttonListadoText: {
      fontSize: 16,
      color: 'black',
      flex: 1, // Take up remaining space
      textAlign: 'auto',
    },
    title: {
      textAlign: 'center',
      color: backColor,
      fontSize: 20,
      fontWeight: "bold",
      marginTop:'10%',
      marginBottom: '8%',
    },
    image: {
      width: 80,
      height: 60,
      marginRight: 10,
      marginLeft: 10,
      minWidth: 90,
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
  });

  export default ListadoScreen;