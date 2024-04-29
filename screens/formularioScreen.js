import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import React, { useState } from 'react';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import DatePicker from 'react-native-modern-datepicker';


const backColor = '#0081a1'


const FormularioScreen = () => {
    let [nombre, setNombre] = useState("")
    let [cedula, setCedula] = useState("")
    let [medico, setMedico] = useState("")
    let [biopsia, setBiopsia] = useState("")
    let [num_biop, setNumBiop] = useState("")
    let [resultados, setResultados] = useState("")
    let [result_tact, setResTacto] = useState("")
    let [val_psa, setValPsa] = useState("")
    let [volumen, setVolumen] = useState("")
    let [unidad, setUnidad] = useState("")
    let [raza, setRaza] = useState("")
    
    let [fecha, setFecha] = useState(null)
    const [open, setOpen] = useState(false)
    const [hora, setHora] = useState(null)
    const [openHora, setOpenHora] = useState(false)
    let [born, setBorn] = useState(null)
    const [openBorn, setOpenBorn] = useState(false)
    let [fech_psa, setFechPsa] = useState(null)
    const [openPsa, setOpenPsa] = useState(false)  
    let [fech_tact, setFechaTacto] = useState(null)
    const [openTact, setOpenTact] = useState(false) 
    let [openInfo, setOpenInfo] = useState(false)
  
  
    const html = `
      <html>
        <body>
          <img src='./assets/selectmdx.png' />
          <h3 style="text-align: center; margin-top: 40; margin-bottom: 2%;">Dia y hora de la extracción de la muestra: ${fecha} ${hora}</h3>
          <h2 style="margin-bottom: 1.5%; margin-left: 50;">Informacion del Paciente:</h2>
          <p style="color: #313131; padding: 10; margin-left: 80;"><strong>Nombre del paciente:</strong>&nbsp;&nbsp;<u>${nombre}</u></p>
          <p style="color: #313131; padding: 10; margin-left: 80;"><strong>Fecha de Nacimiento:</strong>&nbsp;&nbsp;<u>${born}</u></p>
          <p style="color: #313131; padding: 10; margin-left: 80;"><strong>C.I.:</strong>&nbsp;&nbsp;<u>${cedula}</u></p>
          <p style="color: #313131; padding: 10; margin-left: 80;"><strong>Médico Urólogo:</strong>&nbsp;&nbsp;<u>${medico}</u></p>
  
          <h2 style="margin-bottom: 1.5%; margin-top: 50; margin-left: 50;">Informacion Clínica:</h2>
          <p style="color: #313131; padding: 10; margin-left: 80;"><strong>Ha habido biopsias previas:</strong>&nbsp;&nbsp;<u>${biopsia}</u>&nbsp;&nbsp;<strong>Cuantas?</strong>&nbsp;&nbsp;<u>${num_biop}</u></p>
          <p style="color: #313131; padding: 10; margin-left: 80;"><strong>Resultados:</strong>&nbsp;&nbsp;<u>${resultados}</u></p>
          <p style="color: #313131; padding: 10; margin-left: 80;"><strong>Fecha del último tacto rectal:</strong>&nbsp;&nbsp;<u>${fech_tact}</u></p>
          <p style="color: #313131; padding: 10; margin-left: 80;"><strong>Resultado:</strong>&nbsp;&nbsp;<u>${result_tact}</u></p>
          <p style="color: #313131; padding: 10; margin-left: 80;"><strong>Fecha del último PSA:</strong>&nbsp;&nbsp;<u>${fech_psa}</u>&nbsp;&nbsp;<strong>Valor del último PSA:</strong>&nbsp;&nbsp;<u>${val_psa}</u></p>
          <p style="color: #313131; padding: 10; margin-left: 80;"><strong>Volumen de la próstata:</strong>&nbsp;&nbsp;<u>${volumen} ${unidad}</u></p>
          <p style="color: #313131; padding: 10; margin-left: 80;"><strong>Raza:</strong>&nbsp;&nbsp;<u>${raza}</u></p>
          <p style="color: #313131; padding: 10; margin-left: 80;"><strong>Firma del médico de la extracción: ________________________</p>
          <p style="text-align: center; position: fixed; bottom: 0; width: 100%;">Av. Italia 2364 of. 304, Tel: 598 2487 89 95 / Email: infouy@southgenetics.com</p>
        </body>
      </html>
    `
    
  
    const handleChange = (fecha) => {
      setFecha(fecha)
    }
    const handleChangeHora = (hora) => {
      setHora(hora)
      setOpenHora(false)
    }
  
    const GeneratePDF = async () =>{
      if (fecha, hora, nombre, born, cedula, medico, biopsia){
        const file = await printToFileAsync({
          html: html,
          base64: false,
        });
        
        await shareAsync(file.uri);
      }
      console.warn("Advertencia: Faltan datos importantes.");
    };
  
    return(
      <View>
        <ScrollView contentContainerStyle={styles.scrollContainerFromul}>
          <Image
              source={require('../assets/selectmdx.png')}
              style={[styles.image, { resizeMode: 'contain', width:200, height:150, alignSelf: 'center', }]}
          />  
        <View styles={styles.pdfContainer}>
          <View style={styles.horizontalLine}/>
          <Text style={styles.formText}>Día y hora de extracción de muestra :</Text>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={styles.buttonInput}
              onPress={() => setOpen(true)}
            >
              {fecha && (
                <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start', marginTop: '4%'}]}>{fecha}</Text>
              )}
              {!fecha && (
                <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start', marginTop: '4%'}]}>Fecha</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonInput, {marginLeft:'10%'}]}
              onPress={() => setOpenHora(true)}
            >
              {hora && (
                <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start', marginTop: '4%'}]}>{hora}</Text>
              )}
              {!hora && (
                <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start', marginTop: '4%'}]}>Hora</Text>
              )}
            </TouchableOpacity>
          </View>
            <View style={styles.rowContainer}>
              <View style={styles.centeredView}>
                <Modal
                  animationType='slide'
                  transparent={true}
                  visible={open}
                  style={{marginTop: '20%'}}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <DatePicker
                        mode='calendar'
                        selected={fecha}
                        onDateChange={handleChange}
                      />
                      <TouchableOpacity
                        style={[styles.buttonClose, {marginBottom:'5%'}]}
                        onPress={() => setOpen(false)}
                      >
                        <Text style={styles.buttonText}>Listo</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
                <Modal
                  animationType='slide'
                  transparent={true}
                  visible={openHora}
                  style={{marginTop: '20%'}}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <DatePicker
                        mode='time'
                        selected={hora}
                        onTimeChange={handleChangeHora}
                        />
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
            <View style={styles.horizontalLine}/>
          
          <Text style={styles.formText}>Nombre del paciente:</Text>
          <TextInput style={styles.inputText} value={nombre} placeholder='Nombre del paciente' onChangeText={(value) => setNombre(value)} />
          <View style={styles.horizontalLine}/>
          
          <Text style={styles.formText}> Fecha de nacimiento:</Text>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[styles.buttonInput, {width:'90%'}]}
              onPress={() => setOpenBorn(true)}
            >
              {born && (
                <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start', marginTop: '3%'}]}>{born}</Text>
              )}
              {!born && (
                <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start', marginTop: '3%'}]}>Fecha de nacimiento</Text>
              )}
            </TouchableOpacity>
          </View>
            <View style={styles.rowContainer}>
              <View style={styles.centeredView}>
                <Modal
                  animationType='slide'
                  transparent={true}
                  visible={openBorn}
                  style={{marginTop: '20%'}}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <DatePicker
                        mode='calendar'
                        selected={born}
                        onDateChange={(born) => setBorn(born)}
                      />
                      <TouchableOpacity
                        style={[styles.buttonClose, {marginBottom:'5%'}]}
                        onPress={() => setOpenBorn(false)}
                      >
                        <Text style={styles.buttonText}>Listo</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          <View style={styles.horizontalLine}/>
  
          <Text style={styles.formText}>Documento de identidad:</Text>
          <TextInput style={styles.inputText} value={cedula} placeholder='C.I sin puntos ni guiones' keyboardType="numeric" onChangeText={(value) => setCedula(value)} />
          <View style={styles.horizontalLine}/>
          
          <Text style={styles.formText}>Médico Urólogo:</Text>
          <TextInput style={styles.inputText} value={medico} placeholder='Médico Urólogo' onChangeText={(value) => setMedico(value)} />
          <View style={styles.horizontalLine}/>
  
          <Text style={styles.formText}>Biopsias previas:</Text>
          <View style={[styles.picker, {flexDirection: 'row',}]}>
            <TouchableOpacity
              style={[styles.tabButton, {width: '50%', marginTop: 15}, biopsia === 'Si' && styles.selectedTab]}
              onPress={() => setBiopsia('Si')}
            >
              <Text style={styles.tabText}>Si</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, {width: '50%', marginTop: 15}, biopsia === 'No' && styles.selectedTab]}
              onPress={() => setBiopsia('No')}
            >
              <Text style={styles.tabText}>No</Text>
            </TouchableOpacity>
          </View>
          { biopsia==='Si' &&(
          <TextInput style={styles.inputText} value={num_biop} placeholder='Cantidad de biopsias' keyboardType="numeric" onChangeText={(value) => setNumBiop(value)} />
          )}
          <View style={styles.horizontalLine}/>
  
          <Text style={styles.formText}>Resultado biopsia:</Text>        
          <View>
              <View style={[styles.picker, {flexDirection: 'row',}]}>
                <TouchableOpacity
                  style={[styles.tabButton, {width: '40%', marginTop: 15}, resultados === 'Benigna' && styles.selectedTab]}
                  onPress={() => setResultados('Benigna')}
                >
                  <Text style={[styles.tabText, {fontSize: 15}]}>Benigna</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.tabButton, {width: '40%', marginTop: 15}, resultados === 'HGPIN' && styles.selectedTab]}
                  onPress={() => setResultados('HGPIN')}
                >
                  <Text style={[styles.tabText, {fontSize: 14}]}>HGPIN</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.picker, {flexDirection: 'row',}]}>
                <TouchableOpacity
                  style={[styles.tabButton, {width: '30%', marginHorizontal: 1, marginBottom: 15}, resultados === 'ASAP' && styles.selectedTab]}
                  onPress={() => setResultados('ASAP')}
                >
                  <Text style={[styles.tabText, {fontSize: 14}]}>ASAP</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.tabButton, {width: '30%', marginBottom: 15, marginHorizontal: 1}, resultados === 'PIA' && styles.selectedTab]}
                  onPress={() => setResultados('PIA')}
                >
                  <Text style={[styles.tabText, {fontSize: 14}]}>PIA</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.tabButton, {width: '30%', marginBottom: 15, marginHorizontal: 1}, resultados === 'Otro' && styles.selectedTab]}
                  onPress={() => setResultados('Otro')}
                >
                  <Text style={[styles.tabText, {fontSize: 14}]}>Otro</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.horizontalLine}/>
  
          <Text style={styles.formText}>Tacto rectal:</Text>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[styles.buttonInput, {width:'90%'}]}
              onPress={() => setOpenTact(true)}
            >
              {fech_tact && (
                <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start', marginTop: '3%'}]}>{fech_tact}</Text>
              )}
              {!fech_tact && (
                <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start', marginTop: '3%'}]}>Fecha del último tacto rectal</Text>
              )}
            </TouchableOpacity>
          </View>
            <View style={styles.rowContainer}>
              <View style={styles.centeredView}>
                <Modal
                  animationType='slide'
                  transparent={true}
                  visible={openTact}
                  style={{marginTop: '20%'}}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <DatePicker
                        mode='calendar'
                        selected={fech_tact}
                        onDateChange={(fech_tact) => setFechaTacto(fech_tact)}
                      />
                      <TouchableOpacity
                        style={[styles.buttonClose, {marginBottom:'5%'}]}
                        onPress={() => setOpenTact(false)}
                      >
                        <Text style={styles.buttonText}>Listo</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
  
          <View style={[styles.picker, {flexDirection: 'row',}]}>
            <TouchableOpacity
              style={[styles.tabButton, {width: '50%', marginBottom: 15}, result_tact === 'Sospechoso' && styles.selectedTab]}
              onPress={() => setResTacto('Sospechoso')}
            >
              <Text style={styles.tabText}>Sospechoso para Ca Próstata</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, {width: '50%', marginBottom: 15}, result_tact === 'No sospechoso' && styles.selectedTab]}
              onPress={() => setResTacto('No sospechoso')}
            >
              <Text style={styles.tabText}>No sospechoso para Ca Próstata</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalLine}/>
  
          <Text style={styles.formText}>PSA:</Text>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[styles.buttonInput, {width:'90%'}]}
              onPress={() => setOpenPsa(true)}
            >
              {fech_psa && (
                <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start', marginTop: '3%'}]}>{fech_psa}</Text>
              )}
              {!fech_psa && (
                <Text style={[{color: '#b6b5b5', alignSelf: 'flex-start', marginTop: '3%'}]}>Fecha del último PSA</Text>
              )}
            </TouchableOpacity>
          </View>
            <View style={styles.rowContainer}>
              <View style={styles.centeredView}>
                <Modal
                  animationType='slide'
                  transparent={true}
                  visible={openPsa}
                  style={{marginTop: '20%'}}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <DatePicker
                        mode='calendar'
                        selected={fech_psa}
                        onDateChange={(fech_psa) => setFechPsa(fech_psa)}
                      />
                      <TouchableOpacity
                        style={[styles.buttonClose, {marginBottom:'5%'}]}
                        onPress={() => setOpenPsa(false)}
                      >
                        <Text style={styles.buttonText}>Listo</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          <TextInput style={styles.inputText} value={val_psa} placeholder='Valor del último PSA' keyboardType="numeric" onChangeText={(value) => setValPsa(value)} />
          <View style={styles.horizontalLine}/>
  
          <Text style={styles.formText}>Volúmen de la próstata:</Text>
          <TextInput style={styles.inputText} value={volumen} placeholder='Volúmen' keyboardType="numeric" onChangeText={(value) => setVolumen(value)} />
          
          <Text style={styles.formText}>Unidad:</Text>
          <View style={[styles.picker, {flexDirection: 'row',}]}>
            <TouchableOpacity
              style={[styles.tabButton, {width: '50%', marginVertical: 15}, unidad === 'cc' && styles.selectedTab]}
              onPress={() => setUnidad('cc')}
            >
              <Text style={styles.tabText}>cc</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, {width: '50%', marginVertical: 15}, unidad === 'grs' && styles.selectedTab]}
              onPress={() => setUnidad('grs')}
            >
              <Text style={styles.tabText}>grs</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalLine}/>
  
          <Text style={styles.formText}>Etnia:</Text>
          <View>
            <View style={[styles.picker, {flexDirection: 'row',}]}>
              <TouchableOpacity
                style={[styles.tabButton, {width: '45%', marginTop: 15, marginBottom: 5}, raza === 'Caucásico' && styles.selectedTab]}
                onPress={() => setRaza('Caucásico')}
              >
                <Text style={[styles.tabText, {fontSize: 12}]}>Caucásico</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tabButton, {width: '45%', marginTop: 15, marginBottom: 5}, raza === 'Nativo Americano' && styles.selectedTab]}
                onPress={() => setRaza('Nativo Americano')}
              >
                <Text style={[styles.tabText, {fontSize: 12}]}>Nativo Americano</Text>
              </TouchableOpacity>
  
            </View>
            <View style={[styles.picker, {flexDirection: 'row',}]}>
              <TouchableOpacity
                style={[styles.tabButton, {width: '45%', marginBottom: 15, marginTop: 5,}, raza === 'Afrodescendiente' && styles.selectedTab]}
                onPress={() => setRaza('Afrodescendiente')}
              >
                <Text style={[styles.tabText, {fontSize: 12}]}>Afrodescendiente</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tabButton, {width: '45%', marginBottom: 15, marginTop: 5,}, raza === 'Asiático' && styles.selectedTab]}
                onPress={() => setRaza('Asiático')}
              >
                <Text style={[styles.tabText, {fontSize: 12}]}>Asiático</Text>
              </TouchableOpacity>
            </View>
          </View>
        <View style={styles.horizontalLine}/>
  
        <Text style={styles.formText}>¿El paciente esta bajo tratamiento de 5-α-reductasa?</Text>
          <View style={[styles.picker, {flexDirection: 'row',}]}>
            <TouchableOpacity
              style={[styles.tabButton, {width: '50%', marginVertical: 15}, openInfo === true && styles.selectedTab]}
              onPress={() => setOpenInfo(true)}
            >
              <Text style={styles.tabText}>Si</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, {width: '50%', marginVertical: 15}, openInfo === false && styles.selectedTab]}
              onPress={() => setOpenInfo(false)}
            >
              <Text style={styles.tabText}>No</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.centeredView, { height: 1,}]}>
                <Modal
                  animationType='slide'
                  transparent={true}
                  visible={openInfo}
                  style={{marginTop: '20%'}}
                >
                  <View style={styles.centeredView}>
                    <View style={[styles.modalView, { textAlign: 'center'}]}>
                      <Text style={{ padding: 5, fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: '#fd1b1b',}}>Atención.</Text>
                      <Text style={{ padding: 15, fontSize: 18, textAlign: 'center', fontWeight: 'bold', color: '#c23737',}}>Los resultados de esta prueba son afectado por inhibidores de la 5-α-reductasa. Requiere interrupcción del tratamiento por al menos 6 meses.</Text>
                      <TouchableOpacity
                        style={[styles.buttonClose, {marginBottom:'5%', backgroundColor: '#c23737'}]}
                        onPress={() => setOpenInfo(false)}
                      >
                        <Text style={styles.buttonText}>Listo</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
          <View style={styles.horizontalLine}/>
  
        </View>
        <View style={{marginBottom: '30%',}}>
          <TouchableOpacity
            style={[styles.buttonIniciar, { height: '17%', marginTop: '4%' }]}
            onPress={GeneratePDF}>
            <Text style={[styles.buttonText, { marginTop: '10%' }]}>Generar PDF</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    buttonText: {
      color: 'white',
      fontSize: 17,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    image: {
      width: 80,
      height: 60,
      marginRight: 10,
      marginLeft: 10,
      minWidth: 90,
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
    scrollContainerFromul: {
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      padding: 15,
      paddingBottom: 50,
      marginBottom: 60,
    },
    picker: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 5,
      borderColor: 'grey',
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
  });
  

  export default FormularioScreen;