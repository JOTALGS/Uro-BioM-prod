import React, {  useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking, Image, SafeAreaView } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { useFonts } from 'expo-font';


const backColor = '#0081a1'
const TestScreen = ({navigation, route}) =>{
    const { testName, search, prot, biop, result } = route.params
    const [selectedTab, setSelectedTab] = useState(1); // State to track the selected tab
    const [test, setTest] = useState("");
    const [fontsLoaded, fontError] = useFonts({
      'Raleway': require('../assets/fonts/Raleway-Medium.ttf'),
    });
  
  
    if (!fontsLoaded && !fontError) {
      return null;
    }
  
  
    const handleTabPress = (tabNumber) => {
      setSelectedTab(tabNumber); // Update the selected tab state
    };
  
    let tabContent;
    switch (selectedTab) {
      case 1:
        tabContent = (
        <>
          <View style={[styles.tabContentText, {fontFamily: 'Raleway'}]}>
              {(testName === '4KScore') && (
                <View style={{ width: '100%' ,}}>
                  <Text style={[styles.tabContentText, {fontFamily: 'Raleway'}]}>
                    El test 4Kscore mide los valores del PSA, PSA libre, PSA intacto y la Calicreína Humana 2 (H2K) en sangre, y confiere un score basado en estas medidas, así como en la edad del paciente y los hallazgos del último tacto rectal.
                    {"\n\n"}
                      <Text>
                      • Mejora el PPV del PSA
                      {"\n"}
                      • Disminuye el número de biopsias innecesarias
                      </Text>
                      {"\n\n"}
                  </Text>
                  <View style={styles.graphDiv}>
                    <Image
                        source={require("../assets/4k-1.png")}
                        style={[styles.graphImage, { resizeMode: 'contain' }]}
                    />
                    <Image
                        source={require("../assets/4k-2.png")}
                        style={[styles.graphImage, { resizeMode: 'contain' }]}
                    />
                  </View>
                    <Text style={[styles.infoSubTitle, {color: 'black'}]}>
                      {"\n"}
                      Ventajas:
                    </Text>
                    <Text style={[styles.tabContentText, {fontFamily: 'Raleway'}]}>
                      {"\n"}
                      • Método no invasivo (muestra de sangre).
                      {"\n"}
                      • Evita biopsias innecesaria (30%-60%).
                      {"\n"}
                      • Superior al PSA, PSAlibre/PSAtotal y PSA D para diagnosticar CaP.
                      {"\n"}
                      • Capacidad de predecir CaP Gleason ≥ 7.
                      {"\n\n"}
                    </Text>
                    <Text style={styles.infoSubTitle}>
                      Desventajas:
                    </Text>
                    <Text style={[styles.tabContentText, {fontFamily: 'Raleway'}]}>
                      {"\n"}
                      • Mayores costos
                      {"\n"}
                      • Los resultados son interferidos por inhibidores de la 5-α-reductasa. Requiere de interrupción del tratamiento por al menos 6 meses.
                      {"\n\n\n\n"}
                    </Text>
                    <Text style={styles.infoSubTitle}>
                      Referencias:
                    </Text>
                  <Text
                      style={{ color: 'blue', textDecorationLine: 'underline' }}
                      onPress={() => Linking.openURL('https://suo--abstracts-secure--platform-com.translate.goog/a/gallery/rounds/1/details/387?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=sc')}
                      >
                      {"\n"}
                      1.
                      Society of Urologic Oncology - THE 4KSCORE TEST AND SELECTMDX DO NOT INFORM DECISION WHETHER TO OBTAIN A MULTI-PARAMETRIC MRI IN MEN WITH  ELEVATED PSA
                  </Text>
                  <Text
                      style={{ color: 'blue', textDecorationLine: 'underline' }}
                      onPress={() => Linking.openURL('https://www.auajournals.org/doi/10.1097/JU.0000000000002102.19')}
                      >
                      {"\n\n"}
                      2.
                      MP62-19 THE PERFORMANCE OF MPMRI AND THE 4KSCORE FOR PREDICTING PROGRESSION ON ACTIVE SURVEILLANCE: RESULTS FROM A SINGLE INSTITUTION PROSPECTIVE STUDY
                    {"\n"}
                  </Text>
                </View>
              )}
              { (testName === 'SelectMDX') && (
                <View style={{ width: '100%' ,}}>
                  <Text style={[styles.tabContentText, {fontFamily: 'Raleway'}]}>
                    • Estudio genético en orina{"\n"}
                    • Modelo multimodal que incorpora como biomarcadores urinarios:{"\n"}
                      → Los genes HOXC6 y DLX1{"\n"}
                      → La edad del paciente{"\n"}
                      → El valor y la densidad del último PSA{"\n"}
                      → Historia personal de biopsias prostáticas{"\n"}
                      → Historia familiar{"\n"}
                      {"\n"}
                  </Text>
                  <View style={styles.graphDiv}>
                    <Image
                        source={require("../assets/select-3.png")}
                        style={[styles.graphImage, { resizeMode: 'contain' }]}
                    />                
                    <Image
                        source={require("../assets/select-1.png")}
                        style={[styles.graphImage, { resizeMode: 'contain' }]}
                    />
                    <Image
                        source={require("../assets/select-2.png")}
                        style={[styles.graphImage, { resizeMode: 'contain' }]}
                    />
                  </View>
                  <Text style={styles.infoSubTitle}>
                      {"\n"}
                      Ventajas:
                  </Text>
                  <Text style={[styles.tabContentText, {fontFamily: 'Raleway'}]}>
                    {"\n"}
                    • Alto VPN para tumores clínicamente significativos.{"\n"}
                    • Método no invasivo (muestra de orina).{"\n"}
                    • Evita repetición de biopsias innecesarias.{"\n\n"}
                  </Text>
                  <Text style={styles.infoSubTitle}>
                    Desventajas:
                  </Text>
                  <Text style={[styles.tabContentText, {fontFamily: 'Raleway'}]}>
                    {"\n"}
                    • Mayores costos.{"\n"}
                    • No existe un punto de corte establecido que facilite el accionar del urólogo.{"\n"}
                    {"\n\n\n\n"}
                  </Text>
                  <Text style={styles.infoSubTitle}>
                    Referencias:
                  </Text>
                  <Text
                      style={{ color: 'blue', textDecorationLine: 'underline' }}
                      onPress={() => Linking.openURL('https://mdxhealth.com/select-mdx-for-physicians/')}
                      >
                      {"\n"}
                      1.      
                      Select mdx for Physicians - mdxhealth
                  </Text>
                  <Text
                      style={{ color: 'blue', textDecorationLine: 'underline' }}
                      onPress={() => Linking.openURL('http://www.cancer.gov/types/prostate/psa-fact-sheet3')}
                      >
                      {"\n\n"}
                      2.
                      American Cancer Society. PSA Test National Cancer Institute 
                  </Text>
                  <Text
                      style={{ color: 'blue', textDecorationLine: 'underline' }}
                      onPress={() => Linking.openURL('http://www.seer.cancer.gov/statfacts/html/prost.html')}
                      >
                      {"\n\n"}
                      3.
                      Loeb et al.;  J Urol. 2011.6- NCI Seer Data 2015.
                    {"\n"}                      
                  </Text>
                </View>
              )}
              { (testName === 'ConfirmMDX') && (
                <View style={{ width: '100%' ,}}>
                  <Text style={[styles.tabContentText, {fontFamily: 'Raleway'}]}>
                  • Estudia patrones de metilación anormales en los genes GSTP1, APC y RAFFF1, asociados a la presencia de CaP.{"\n"}
                  • Analiza todos los cilindros de la última biopsia prostática{"\n"}
                  {"\n"}
                  </Text>
                  <View style={styles.graphDiv}>
                    <Image
                        source={require("../assets/confirm-2.png")}
                        style={[styles.graphImage, { resizeMode: 'contain' }]}
                    />
                    <Image
                        source={require("../assets/confirm-1.png")}
                        style={[styles.graphImage, { resizeMode: 'contain' }]}
                    />
                    <Image
                        source={require("../assets/confirm-3.png")}
                        style={[styles.graphImage, { resizeMode: 'contain' }]}
                    />
                  </View>
                  <Text style={styles.infoSubTitle}>
                    {"\n"}
                      Ventajas:
                  </Text>
                  <Text style={[styles.tabContentText, {fontFamily: 'Raleway'}]}>
                    • Método no invasivo (se analiza el material de la biopsia).{"\n"}
                    • Evita la rebiopsia innecesaria cuando los resultados son negativos.{"\n"}
                    • Guía la rebiopsia a la zona donde se encontraron patrones de metilación aberrantes.{"\n\n"}
                    {"\n"}
                  </Text>
                  <Text style={styles.infoSubTitle}>
                    Desventajas:
                  </Text>
                  <Text style={[styles.tabContentText, {fontFamily: 'Raleway'}]}>
                    {"\n"}
                      • Mayores costos.{"\n"}
                    {"\n\n\n\n"}
                  </Text>
                  <Text style={styles.infoSubTitle}>
                    Referencias:
                  </Text>              
                  <Text
                    style={{ color: 'blue', textDecorationLine: 'underline' }}
                    onPress={() => Linking.openURL('https://mdxhealth.com/select-mdx-for-physicians/')}
                  >
                    {"\n"}
                    1. 
                    Select mdx for Physicians - mdxhealth
                  </Text>
  
                  <Text
                    style={{ color: 'blue', textDecorationLine: 'underline' }}
                    onPress={() => Linking.openURL('http://www.cancer.gov/types/prostate/psa-fact-sheet3')}
                  >
                    {"\n\n"}
                    2. American Cancer Society. PSA Test National Cancer Institute 
                  </Text>
                  <Text
                    style={{ color: 'blue', textDecorationLine: 'underline' }}
                    onPress={() => Linking.openURL('http://www.seer.cancer.gov/statfacts/html/prost.html')}
                  >
                    {"\n\n"}
                    3. Loeb et al.;  J Urol. 2011.6- NCI Seer Data 2015.
                    {"\n"}                      
                  </Text>
                </View>
              )}
  
              { (testName === 'Oncotype') && (
                <View style={{ width: '100%' ,}}>
                  <Text style={[styles.tabContentText, {fontFamily: 'Raleway',}]}>                  
                    Análisis genómico que evalúa la expresión de 17 genes, incluidos 12 genes relacionados con cáncer representativos de 4 vías biológicas clave, y 5 genes de referencia.{"\n"}
                    Se indica en pacientes con CaP de bajo o muy bajo riesgo, en los que se quiere optar por una vigilancia activa.{"\n"}{"\n"}
                  </Text>
                  <Text style={styles.infoSubTitle}>
                    Predictor de:{"\n"}
                  </Text>
                  <Text style={[styles.tabContentText, {fontFamily: 'Raleway',}]}>        
                      • Tumores con Gleason ≥ 7{"\n"}
                      • Tumores no confinados a la próstata{"\n"}
                      • Recurrencia bioquímica{"\n"}
                      • Metástasis a distancia{"\n"}
                      • Muerte por cáncer de próstata{"\n"}{"\n"}
                  </Text>
                  <Text style={styles.infoSubTitle}>
                    Ventajas:{"\n"}
                  </Text>
                  <Text style={[styles.tabContentText, {fontFamily: 'Raleway',}]}>
                      • Método no invasivo (se analiza el tejido de la última biopsia).{"\n"}
                      • Es un buen marcador pronostico; predice patologías adversas y la recurrencia.{"\n"}
                      • Respalda la decisión de vigilancia activa.{"\n"}{"\n"}
                  </Text>
                  <Text style={styles.infoSubTitle}>
                    Desventajas:{"\n"}
                  </Text>
                  <Text style={[styles.tabContentText, {fontFamily: 'Raleway',}]}>
                      • Mayores costos.{"\n"}
                      • El GPS fue validad en pacientes fuera de tratamiento con inhibidores de la 5-α-reductada. NO se conoce si existe un efecto de interferencia de este medicamento con la prueba molecular GPS, por lo que se recomienda no realizar la prueba a estos pacientes.{"\n"}
                      • El tejido biópsico no debe haber recibido radioterapia.
                      {"\n\n\n\n"}
                  </Text>
                  <Text style={styles.infoSubTitle}>
                    Referencias:
                  </Text>     
                  <Text
                      style={{ color: 'blue', textDecorationLine: 'underline' }}
                      onPress={() => Linking.openURL('https://mdxhealth.com/gps-physician/')}
                      >
                      {"\n"}
                      1.
                      GPS Physician - mdxhealth
                      {"\n"}
                  </Text>
                </View>
              )}
  
              { (testName === 'Decipher') && (
                <View style={{ width: '100%' ,}}>
                  <Text style={[styles.tabContentText, {fontFamily: 'Raleway',}]}>
                    Evalúa la expresión de 22 genes vinculados a diferentes vías biológicas del cáncer de próstata.{"\n"}
                    Permite predecir con mayor certeza la probabilidad de que un paciente con un tumor de alto riesgo sometido a una prostatectomía radical presente metástasis luego de la cirugía.{"\n"}
                    El resultado se expresa en bajo, intermedio y alto riesgo.{"\n"}
                    {"\n"}
                  </Text>
                  <Text style={styles.infoSubTitle}>
                    Evalúa:{"\n"}
                  </Text>
                  <Text style={[styles.tabContentText, {fontFamily: 'Raleway',}]}>
                    • Aparición de metástasis a 5 años, 10 y 15 años.{"\n"}
                    • Patología adversa.{"\n"}
                    • Muerte por CaP.{"\n"}
                    Y da pautas sobre la respuesta a la radioterapia de rescate, la terapia adyuvante, y hormonoterapia.
                    {"\n"}
                  </Text>
                  <View style={styles.graphDiv}>
                    <Image
                        source={require("../assets/decipher-1.png")}
                        style={[styles.graphImage, { resizeMode: 'contain' }]}
                    />
                  </View>
                  <Text style={styles.infoSubTitle}>
                    {"\n"}
                    Ventajas:{"\n"}
                  </Text>
                  <Text style={[styles.tabContentText, {fontFamily: 'Raleway',}]}>
                    • Posee un importante valor pronóstico.{"\n"}
                    • Evita tratamientos adyuvantes innecesario en aquellos pacientes con bajo riesgo a metástasis.{"\n"}
                    • Permite optar por el tratamiento con adyuvante en aquellos pacientes con riesgo de metástasis elevados, en los cuales una conducta conservadora luego de la cirugía puede ser perjudicial..{"\n"}
                    {"\n"}
                  </Text>
                  <Text style={styles.infoSubTitle}>
                    Desventajas:{"\n"}
                  </Text>
                  <Text style={[styles.tabContentText, {fontFamily: 'Raleway',}]}>
                    • Mayores costos.{"\n"}
                    {"\n\n\n\n"}
                  </Text>
                  <Text style={styles.infoSubTitle}>
                    Referencias:
                  </Text>     
                  <Text
                      style={{ color: 'blue', textDecorationLine: 'underline' }}
                      onPress={() => Linking.openURL('https://www.veracyte.com/decipher-prostate/')}
                      >
                      {"\n"}
                      1. Decipher Prostate - Veracyte
                  </Text>
                </View>
              )}
              <Text
                  style={{ color: 'blue', textDecorationLine: 'underline' }}
                  onPress={() => Linking.openURL('mailto:infouy@southgenetics.com')}
                  >
                  {"\n\n\n"}
                  Para solicitar más información de esta prueba por mail, click aquí.
              </Text>
          </View>
        </>
        );
        break;
      case 2:
        tabContent = (
          <>
            <View style={[styles.tabContentText, {fontFamily: 'Raleway'}]}>
              {(testName === '4KScore') && (
              <View style={{ width: '100%' ,}}>
                <Text style={[styles.tabContentText, {fontFamily: 'Raleway'}]}>
                    Postura recomendada ante los resultados:{"\n\n\n"}
                    Score {"≤"} 7,5%:{"\n"}
                    {"    →"}control evolutivo, bajo riesgo de tumor significativo.{"\n\n"}
                    Score {"≥"} 7,5%:{"\n"}
                    {"    →"}se recomienda realizar biopsia.
                </Text>
              </View>
              )}
              {(testName === 'SelectMDX') && (
              <View style={{ width: '100%' ,}}>
                <Text style={[styles.tabContentText, {fontFamily: 'Raleway'}]}>
    
                  • Informa el resultado como la probabilidad (en %) de padecer un tumor de alto y bajo riesgo.{"\n"}
                  • Con estos datos se debe decidir si realizar una biopsia prostática, u otros estudios.
                </Text>
              </View>
              )}
              {(testName === 'ConfirmMDX') && (
              <View style={{ width: '100%' ,}}>
                <Text style={[styles.tabContentText, {fontFamily: 'Raleway'}]}>
                  • Indicar biopsia prostática dirigida hacia los cilindros con metilación aberrante positiva.
                </Text>
              </View>
              )}
              {(testName === 'Oncotype') && (
              <View style={{ width: '100%' ,}}>
                <Text style={[styles.tabContentText, {fontFamily: 'Raleway'}]}>
                  <Text style={styles.infoSubTitle}>
                    Postura recomendada ante los resultados:{"\n"}{"\n"}
                  </Text>          
                  • GPS de bajo o muy bajo riesgo: sugerir vigilancia activa.{"\n"}
                  • GPS de riesgo intermedio: sugerir Prostatectomía o Radioterapia (en casos particulares puede considerarse terapia focal o vigilancia activa).
                  {"\n"}
                </Text>
              </View>
              )}
              { (testName === 'Decipher') && (
              <View style={{ width: '100%' ,}}>
                <Text style={[styles.tabContentText, {fontFamily: 'Raleway',}]}>
                  {"\n"}   
                  Postura recomendada ante los resultados:{"\n"}{"\n"}
                  El score va de 0 a 1{"\n"}
                </Text>
                <View style={[styles.graphDiv]}>
                    <Image
                        source={require("../assets/decipher-3.png")}
                        style={[styles.graphImage, { resizeMode: 'contain' }]}
                    />
                    <Image
                        source={require("../assets/decipher-7.png")}
                        style={[styles.graphImage, { resizeMode: 'contain'}]}
                    />
                    <Image
                        source={require("../assets/decipher-4.png")}
                        style={[styles.graphImage, { resizeMode: 'contain'}]}
                    />
                  </View>
              </View>
              )}
            </View>
          </>
        );
        break;
      case 3:
        tabContent = (
        <>
          <View style={[styles.tabContentText, {fontFamily: 'Raleway'}]}>
            {(testName === '4KScore') && (
              <View style={{ width: '100%' ,}}>
                <View style={styles.graphDiv}>
                    <Image
                        source={require("../assets/4k-5.png")}
                        style={[styles.graphImage, { resizeMode: 'contain' }]}
                    />
                    <Image
                        source={require("../assets/4k-4.png")}
                        style={[styles.graphImage, { resizeMode: 'contain' }]}
                    />
                    <Image
                        source={require("../assets/4k-6.png")}
                        style={[styles.graphImage, { resizeMode: 'contain' }]}
                    />
                </View>
                <Text style={[styles.tabContentText, {fontFamily: 'Raleway',}]}>
                  {"\n"}
                  • Reporte gráfico en español y reporte clínico en inglés.{"\n"}
                  • El paciente no debe estar bajo tratamiento con inhibidores de la 5-α-reductasa.{"\n"}
                  • No se puede haber realizado un TR en las 96 hs previas, mantenido relaciones sexuales o haber realizado actividad física de alto rendimiento.{"\n"}
                </Text>
                </View>
              )}
              
              { (testName === 'SelectMDX') && (
              <View style={{ width: '100%' ,}}>
                <View style={styles.graphDiv}>
                  <Image
                      source={require("../assets/select-4.png")}
                      style={[styles.graphImage, { resizeMode: 'contain'}]}
                  />
                  <Image
                      source={require("../assets/select-5.png")}
                      style={[styles.graphImage, { resizeMode: 'contain'}]}
                  />
                    <Image
                        source={require("../assets/4k-3.png")}
                        style={[styles.graphImage, { resizeMode: 'contain' }]}
                    />
                </View>
                <Text style={[styles.tabContentText, {fontFamily: 'Raleway',}]}>
                  {"\n"}
                  • El paciente no debe estar bajo tratamiento con inhibidores de la 5-α-reductasa.{"\n"}
                  • Fecha del último PSA ≤ 6 meses.{"\n"}
                  • Fecha de la última biopsia (en caso de corresponder) ≤ 3 meses.{"\n"}
                  • Se requiere aportar valor del último PSA, volumen prostático, antecedentes familiares de CaP y raza.{"\n"}
                  {"\n"}
                </Text>
                <Text
                  style={{ color: 'blue', textAlign: 'center'}}
                  onPress={() => navigation.navigate('formulario')}
                >
                  Generar formulario SelectMDX, click aqui.
                </Text>
              </View>
            )}
  
            { (testName === 'ConfirmMDX') && (
              <View style={{ width: '100%' ,}}>
                <View style={styles.graphDiv}>
                  <Image
                      source={require("../assets/confirm-4.png")}
                      style={[styles.graphImage, { resizeMode: 'contain',}]}
                  />
                  <Image
                      source={require("../assets/confirm-5.png")}
                      style={[styles.graphImage, { resizeMode: 'contain',}]}
                  />
                  <Image
                      source={require("../assets/4k-3.png")}
                      style={[styles.graphImage, { resizeMode: 'contain',}]}
                  />
                </View>
                <Text style={[styles.infoSubTitle]}>
                  → Fecha de la última biopsia ≤ 24 meses
                  {"\n"}
                </Text>
                <Text style={[styles.infoSubTitle]}>
                  → Sólo se aceptan muestras de biopsia trans rectal.
                  {"\n"}
                </Text>
              </View>

            )}
            
            { (testName === 'Oncotype') && (
              <View style={{ width: '100%' ,}}>
                <View style={styles.graphDiv}>
                    <Image
                        source={require("../assets/gps-1.png")}
                        style={[styles.graphImage, { resizeMode: 'contain'}]}
                    />
                    <Image
                        source={require("../assets/gps-2.png")}
                        style={[styles.graphImage, { resizeMode: 'contain'}]}
                    />
                    <Image
                        source={require("../assets/4k-3.png")}
                        style={[styles.graphImage, { resizeMode: 'contain'}]}
                    />
                </View>
                <Text style={[styles.infoSubTitle]}>
                  {"\n"}
                  • Fecha de la biopsia ≤ 3 años.{"\n"}
                  • No se acepta tejido de RTU.{"\n"}
                  • No se puede realizar sobre tejido que fue sometido a Redioterapia.{"\n\n\n\n"}
                  Criterios de inclusión:{"\n"}
                </Text>
                <Text style={[styles.tabContentText, {fontFamily: 'Raleway',}]}>
                  NCCN Muy bajo riesgo (debe presentar TODOS los siguientes criterios):{"\n"}
                  → Gleason Score ≤ 6.{"\n"}
                  → PSA {"<"} 10 ng/mL.{"\n"}
                  → Estadio clínico T1c.{"\n"}
                  → Menos de 3 cilindros/filamentos positivos, ≤ 50% compromiso tumoral en cualquier cilindro/filamento\n.{"\n"}
                  → PSA densidad {"<"} 0.15 ng/mL/g{"\n"}
                    {"\n\n"}
                  NCCN Bajo riesgo (debe presentar TODOS los siguientes criterios):{"\n"}
                  → Gleason Score ≤ 6\n- PSA {"<"} 10 ng/mL\n.{"\n"}
                  → Estadio Clínico T1c-T2a{"\n"}
                  {"\n\n"}
                  NCCN Riesgo intermedio (debe cumplir UNO de los siguientes criterios):{"\n"}
                  → Gleason Score ≤ 6, Y{"\n"}
                  {"    "}* Estadio Clínico T2b-T2c, O{"\n"}
                  {"    "}* PSA 10-20 ng/mL{"\n"}
                  → Gleason Score 3+4, Y todo lo siguiente:{"\n"}
                  {"    "}* Estadio Clínico T1c-T2c{"\n"}
                  {"    "}* PSA ≤ 20 ng/mL{"\n"}
                  → Gleason Score 4+3, Y todo los siguiente:{"\n"}
                  {"    "}* Estadio Clínico T1c-T2c{"\n"}
                  {"    "}* PSA ≤ 20 ng/mL{"\n"}
                  {"\n"}
                </Text>
                <Text
                    style={{ color: 'blue', textDecorationLine: 'underline' }}
                    onPress={() => Linking.openURL('https://mdxhealth.com/gps-physician/')}
                >
                    GPS Physician - mdxhealth
                {"\n"}
                </Text>
              </View>
            )}
            { (testName === 'Decipher') && (
              <View style={{ width: '100%' ,}}>
                <View style={styles.graphDiv}>
                  <Image
                      source={require("../assets/decipher-5.png")}
                      style={[styles.graphImage, { resizeMode: 'contain'}]}
                  />
                  <Image
                      source={require("../assets/decipher-6.png")}
                      style={[styles.graphImage, { resizeMode: 'contain'}]}
                  />
                  <Image
                      source={require("../assets/4k-3.png")}
                      style={[styles.graphImage, { resizeMode: 'contain'}]}
                  />
                </View>
                <Text style={[styles.infoSubTitle]}>
                  → Fecha de la última biopsia ≤ 5 años
                  {"\n"}
                </Text>
                <Text style={[styles.infoSubTitle]}>
                  → No se puede realizar sobre tejido que fue sometido a Redioterapia.
                  {"\n"}
                </Text>
              </View>            
            )}
          </View>
        </>
        );
        break;
      default:
        tabContent = (
        <Text style={styles.tabContentText}>No Content</Text>
        );
    }
  
    return (
      <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.containerTabs}>
        <View style={[styles.backButtonDiv, { padding: 10, paddingLeft: 25, paddingTop: 20, marginRight: '90%'}]}>
            { !search &&(
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.navigate('listado')}>
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
              </View>
            </TouchableOpacity>
            )}
          { search && (
            <>
              <TouchableOpacity
                style={[styles.backButton, {marginRight: '200%'}]}
                onPress={() => navigation.navigate('SearchResult', {protatect: prot, biopsia: biop, resultado: result})}>
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
                </View>
              </TouchableOpacity>
            </>
          )}
        </View>
          { (testName === '4KScore') && (
            <>
              <Image
                source={require("../assets/4kscore.png")}
                style={[styles.imageForTest]} // Add resizeMode prop
              />
              <Text style={[styles.title, { color: '#0081a1' }]}>Marcadores diagnósticos previos a la primera biopsia prostática</Text>
            </>
          )}
          { (testName === 'SelectMDX') && (
            <>
              <Image
                source={require("../assets/selectmdx.png")}
                style={[styles.imageForTest, { resizeMode: 'contain', height: 200,}]} // Add resizeMode prop
              />
              <Text style={[styles.title, { color: '#0081a1', marginBottom: 1, }]}>Marcadores diagnósticos previos a la primera biopsia prostática</Text>
              <TouchableOpacity
                style={[{backgroundColor: '#c0bebe60', borderRadius:55, marginVertical: 20,}]}
                onPress={() => navigation.navigate('formulario')}>
                <Text style={[{padding: 10, paddingHorizontal: 15, color: '#0081a1', fontWeight: 'bold', fontSize: 16, }]}>Generar formulario SelectMDX</Text>
              </TouchableOpacity>
            </>
          )}
          { (testName === 'ConfirmMDX') && (
            <>
              <Image
                source={require("../assets/confirmmdx.png")}
                style={[styles.imageForTest, { resizeMode: 'contain', height: 200,}]} // Add resizeMode prop
              />
              <Text style={[styles.title, { color: '#0081a1', padding: 15,}]}>Marcadores diagnósticos posteriores a la primera biopsia prostática</Text>
            </>
          )}
          { (testName === 'Oncotype') && (
          <>
            <Image
              source={require("../assets/oncotype.png")}
              style={[styles.imageForTest, { resizeMode: 'contain', height: 200,}]} // Add resizeMode prop
            />
            <Text style={[styles.title, { color: '#0081a1', marginHorizontal: 5, }]}>Previo al tratamiento en cáncer de próstata localizado, de bajo riesgo</Text>
          </>
          )}
          { (testName === 'Decipher') && (
            <>
              <Image
                source={require("../assets/decipher.png")}
                style={[styles.imageForTest, { resizeMode: 'contain', height: 200,}]} // Add resizeMode prop
              />
              <Text style={[styles.title, { color: '#0081a1', padding: 15,}]}>Previo al tratamiento en cáncer de próstata localizado, mediano o alto riesgo y prostatectomía</Text>
            </>
          )}
          
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[styles.tab, selectedTab === 1 && styles.selectedTab]}
              onPress={() => handleTabPress(1)}>
              <Text style={styles.tabText}>INFORMACIÓN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, selectedTab === 2 && styles.selectedTab]}
              onPress={() => handleTabPress(2)}>
              <Text style={styles.tabText}>CONDUCTA</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, selectedTab === 3 && styles.selectedTab]}
              onPress={() => handleTabPress(3)}>
              <Text style={styles.tabText}>LOGÍSTICA</Text>
            </TouchableOpacity>
          </View>
          <View>
            { testName === '4KScore' && (
              <View style={[styles.tabContent, {backgroundColor: "#e077779d", marginBottom: 260,}]}>{tabContent}</View>
            )}
            {testName === 'SelectMDX' && (
              <View style={[styles.tabContent, {backgroundColor: "#94c2d8d0", marginBottom: 250,}]}>{tabContent}</View>
            )}    
            { testName === 'ConfirmMDX' && (
              <View style={[styles.tabContent, {backgroundColor: "#84b5c4d0"}]}>{tabContent}</View>
            )}
            { testName === 'Oncotype' && (
              <View style={[styles.tabContent, {backgroundColor: "#d6eca1d0"}]}>{tabContent}</View>
            )}
            { testName === 'Decipher' && (
              <View style={[styles.tabContent, {backgroundColor: "#9098da8c"}]}>{tabContent}</View>
            )}
          </View>
        </View>
      </ScrollView>
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
    title: {
      textAlign: 'center',
      color: backColor,
      fontSize: 20,
      fontWeight: "bold",
      marginTop:'10%',
      marginBottom: '13%',
    },
    icon: {
      marginTop: 8,
      alignSelf: 'flex-start',
      paddingRight: 1,
      width: 60,
      height: 35,
    },
    containerTabs: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'top',
      marginTop: '5%',
      marginBottom: '20%'
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
    tabContentText: {
      fontSize: 19,
      padding: 10,
      color: '#3b3b3bfd',
    },
    imageForTest: {
      width: 350,
      height: 250,
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    graphDiv: {
      alignSelf: 'center',
    },
    graphImage: {
      borderRadius: 25,
      marginVertical:20,
      width: 280,
      height: 250,
    }
  });

  export default TestScreen;