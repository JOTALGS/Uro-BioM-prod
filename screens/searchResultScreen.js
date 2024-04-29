import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Svg, Path } from 'react-native-svg';


const backColor = '#0081a1'
const SearchresultScreen = ({ route, navigation }) => {
    const {protatect, biopsia, resultado, riesgo } = route.params
  
  return (
    <View style={[styles.containerListado, {flex: 1, justifyContent: 'flex-start'}]}>
        { ((!protatect && !biopsia) || (biopsia && resultado === 'Negativo')) && (
        <View style={[styles.backButtonDiv, { padding: 10, paddingLeft: 25, paddingTop: 20, marginTop: '4%', marginLeft: '2%'}]}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('diagnostico')}>
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
        )}
        { ((protatect) || (biopsia && resultado === 'Positivo')) && (
        <View style={[styles.backButtonDiv, { padding: 10, paddingLeft: 25, paddingTop: 20, marginTop: '4%', marginLeft: '2%'}]}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('tratamiento')}>
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
        )}
      <Text style={[styles.title, {marginTop: '20%'}]}>COINCIDENCIAS ENCONTRADAS:</Text>
        { !protatect && !biopsia && (
        <TouchableOpacity
            style={styles.buttonListado}
            onPress={() => navigation.navigate('tests', {
              testName: '4KScore',
              search: true,
              prot: protatect,
              biop: biopsia,
            })}>
            <View style={styles.buttonListadoContent}>
            <Image
                source={require('../assets/4kscore.png')}
                style={[styles.image, { resizeMode: 'contain' }]} // Add resizeMode prop
            />
            <Text style={styles.buttonListadoText}>Calicreínas</Text>
            </View>
        </TouchableOpacity>
        )}
        { !protatect && !biopsia && (
        <TouchableOpacity
            style={styles.buttonListado}
            onPress={() => navigation.navigate('tests', {
              testName: "SelectMDX",
              search: true,
              prot: protatect,
              biop: biopsia,
            })}>
            <View style={styles.buttonListadoContent}>
            <Image
                source={require('../assets/selectmdx.png')}
                style={[styles.image, { resizeMode: 'contain' }]}
            />
            <Text style={styles.buttonListadoText}>Panel genético basado en ARNm</Text>
            </View>
        </TouchableOpacity>
        )}
        { biopsia && resultado === 'Negativo' && (
        <TouchableOpacity
            style={styles.buttonListado}
            onPress={() => navigation.navigate('tests', {
              testName: "ConfirmMDX",
              search: true,
              prot: null,
              biop: biopsia,
              result: resultado,
            })}>
            <View style={styles.buttonListadoContent}>
            <Image
                source={require('../assets/confirmmdx.png')}
                style={[styles.image, { resizeMode: 'contain' }]}
            />
            <Text style={styles.buttonListadoText}>Estudios Epigenéticos</Text>
            </View>
        </TouchableOpacity>
        )}
        { biopsia && resultado === 'Positivo' && (
        <TouchableOpacity
            style={styles.buttonListado}
            onPress={() => navigation.navigate('tests', {
              testName: "Oncotype",
              search: true,
              biop: biopsia,
              result: resultado,
            })}>
            <View style={styles.buttonListadoContent}>
            <Image
                source={require('../assets/oncotype.png')}
                style={[styles.image, { resizeMode: 'contain' }]}
            />
            <Text style={styles.buttonListadoText}>Genomic Prostate Score (GPS)</Text>
            </View>
        </TouchableOpacity>
        )}
        { protatect && (
            <TouchableOpacity
                style={styles.buttonListado}
                onPress={() => navigation.navigate('tests', {
                  testName: "Decipher",
                  search: true,
                  prot: protatect,
                })}>
                <View style={styles.buttonListadoContent}>
                <Image
                    source={require('../assets/decipher.png')}
                    style={[styles.image, { resizeMode: 'contain' }]}
                />
                <Text style={styles.buttonListadoText}>Genomic Classifier (GC)</Text>
                </View>
            </TouchableOpacity>
        )}
    </View>
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
      marginBottom: '13%',
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

  export default SearchresultScreen;