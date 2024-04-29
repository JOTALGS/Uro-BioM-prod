import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import InitScreen from '../screens/initScreen';
import AlgoScreen from '../screens/algoScreen';
import DiagnosticoScreen from '../screens/diagnosticoScreen';
import FormularioScreen from '../screens/formularioScreen';
import ListadoScreen from '../screens/listadoScreen';
import TestScreen from '../screens/testScreen';
import TratamientoScreen from '../screens/tratamientoScreen';
import SearchresultScreen from '../screens/searchResultScreen';


const Stack = createNativeStackNavigator();



export default function Router() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ 
                title: 'Uro-BioM', 
                headerShown: false ,
                }}
            />
            <Stack.Screen
                name="inicio"
                component={InitScreen}
                options={{ 
                title: '', 
                headerShown: false ,
                headerTintColor: 'red',
                }}
            />
            <Stack.Screen
                name="listado"
                component={ListadoScreen}
                options={{ 
                title: '', 
                headerShown: false ,
                }}/// Set the title of the header
            />
            <Stack.Screen
                name="SearchResult"
                component={SearchresultScreen}
                options={{ 
                title: '', 
                headerShown: false ,
                }}// Set the title of the header
            />
            <Stack.Screen
                name="formulario"
                component={FormularioScreen}
                options={{ title: 'Generar Formulario' }} // Set the title of the header
            />
            <Stack.Screen
                name="tests"
                component={TestScreen}
                options={{ 
                title: '', 
                headerShown: false ,
                }}// Set the title of the header
            />
            <Stack.Screen
                name="algor"
                component={AlgoScreen}
                options={{ 
                title: '', 
                headerShown: false ,
                }}// Set the title of the header
            />
            <Stack.Screen
                name="tratamiento"
                component={TratamientoScreen}
                options={{ 
                title: '', 
                headerShown: false ,
                }}// Set the title of the header
            />
            <Stack.Screen
                name="diagnostico"
                component={DiagnosticoScreen}
                options={{ 
                title: '', 
                headerShown: false ,
                }}// Set the title of the header
            />
          </Stack.Navigator>
        </NavigationContainer>
    )
}