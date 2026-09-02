import { Button, Text, TouchableOpacity, View } from "react-native"
import Colors from "../../../utilities/Colors"
import { CompositeScreenProps, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BoardingParamList, MainTabParamList } from "../../../navigator/types";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utilities/Constants";
import Screen from "../../../components/Screen";
import { GlobalStyles } from "../../../utilities/GlobalStyles";
import FormField from "../../../components/FormField";
import { useCallback, useState } from "react";
import EncryptedStorage from "react-native-encrypted-storage";
import { useExpenseStore } from "../../../context/useTransactionStore";
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'
import { Message } from "iconsax-react-nativejs";

type Props = CompositeScreenProps<
  NativeStackScreenProps<BoardingParamList, "LoginScreen">,
  NativeStackScreenProps<MainTabParamList>
>;
function LoginScreen({navigation}:Props){

    const {login} = useExpenseStore()
    const [username,setUsername] = useState<string|null>()
    const [password,setPassword] = useState<string|null>()
    const [passwordVisible,setPasswordVisible] = useState<boolean>(false)

    const rnBiometrics = new ReactNativeBiometrics()


    const CheckBio = (msg:any) => {
        
        rnBiometrics.simplePrompt({ promptMessage: msg })
            .then(async (resultObject) => {
                const { success } = resultObject
                if(success) {
                setUsername("mahmoud@s.com")
                setPassword("123456")

                setTimeout(async()=>{
                    await login(username!)
                },1000)
                
                }


            })
            .catch(() => {
                console.log('biometrics failed')
            })



      





   
        
    }
     const UseBiometricAuth = useCallback(() => {

        try{
       rnBiometrics.isSensorAvailable()
            .then((resultObject) => {
                const { available, biometryType } = resultObject

                 if (available && biometryType === BiometryTypes.TouchID) {
                    console.log('TouchID is supported')
                } else if (available && biometryType === BiometryTypes.FaceID) {
                    console.log('FaceID is supported')
                    CheckBio('Confirm your FaceID to access your account')
                } else if (available && biometryType === BiometryTypes.Biometrics) {
                    console.log('Biometrics is supported')
                } else {
                    console.log('Biometrics not supported')
                }
               
            })
        }catch(err){
            console.log('biometrics error',err)
        }
    }, [])
           
    
    return (
      <Screen hasBack={false} hasNotificationBtn={false} >
    
        <View style={{ height: 100,justifyContent:'center',alignItems:'center' }}>
            <Text style={{ ...GlobalStyles.textSemiBold20, fontSize: 30 }}>Welcome</Text>
        </View>

        <View style={{ flex: 1, backgroundColor: Colors.HoneyDew, borderTopLeftRadius: 50, borderTopRightRadius: 50, alignItems: 'center' }}>
            <View style={{ flex:1,width: WINDOW_WIDTH - 60,alignSelf:'center',alignItems:'center',justifyContent:'center',gap:50 }}>
                    
                    <View style={{gap: 20}}>
                        <FormField  fieldType="TextInput" value={username} setValue={setUsername} title="Username Or Email"/>

                        <FormField  fieldType="Password" value={password} setValue={setPassword} valueVisible={passwordVisible} setValueVisible={setPasswordVisible}  title="Password"/>
                    </View>

                    <View style={{alignItems:'center',gap:10}}>
                        <TouchableOpacity
                            onPress={async ()=>{
                                await login(username!)
                            }}
                            disabled={!password || !username}
                            style={{ height: 40, minWidth: 197, borderRadius: 20,opacity : !password || !username ? 0.5 : 1, backgroundColor: Colors.MainGreen, justifyContent: 'center', alignItems: 'center', alignSelf: 'center',paddingHorizontal:5 }}>
                                <Text style={{ ...GlobalStyles.textSemiBold20 }}>Log In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={{...GlobalStyles.textSemiBold12,fontSize:14}}>Forgot Password ?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={()=>{
                                navigation.navigate("SignUpScreen")
                            }}
                            style={{ height: 40, minWidth: 197, borderRadius: 20, backgroundColor: Colors.LightGreen, justifyContent: 'center', alignItems: 'center', alignSelf: 'center',paddingHorizontal:5 }}>
                                <Text style={{ ...GlobalStyles.textSemiBold20 }}>Sign Up</Text>
                        </TouchableOpacity>

                         <TouchableOpacity onPress={()=>{
                            UseBiometricAuth()
                         }}>

                            <Text style={{...GlobalStyles.textSemiBold12,fontSize:14}}>Use <Text style={{...GlobalStyles.textSemiBold12,fontSize:14,color:Colors.OceanBlue}}>Fingerprint</Text> To Access</Text>
                        </TouchableOpacity>
                    </View>

            </View>
        </View>
      </Screen>
    )
}

export default LoginScreen