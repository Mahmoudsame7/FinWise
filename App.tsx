/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import ExpenseNavigator from './src/ExpenseTracker/navigator/ExpenseNavigator';
import MultiStoryScreen from './src/StoryExample/MultiStoryScreen';


function App() {
  

  return (
    <SafeAreaProvider>
      
      <StoryNavigator/>
      {/* <ExpenseNavigator /> */}
   
    </SafeAreaProvider>
  );
}

function StoryNavigator(){
  const Stack = createNativeStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          // title: "Test",
          statusBarAnimation:'slide',
          statusBarStyle: isDarkMode ? 'light' : 'dark',
          // contentStyle:{
          //   // backgroundColor:'red', 
          // },
          
          // animationMatchesGesture: false,
          
          // fullScreenGestureEnabled: false,
          // fullScreenGestureShadowEnabled: true,
          
        }}
        >
          <Stack.Screen 
           name='Login'
           component={StoryLoginScreen}
          />
          <Stack.Screen 
         
           name='Home'
           component={MultiStoryScreen}
          />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export type RootStackParamList = {
  Home: undefined;
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
function StoryLoginScreen(){
  const navigation = useNavigation<NavigationProp>()
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20}}>Login Screen</Text>
        <Button  title='Next' onPress={()=>{
              navigation.navigate("Home")
          }}/>
    </View>
  )
}







export default App;
