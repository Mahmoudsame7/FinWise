import { Button, Text, TouchableOpacity, View } from "react-native"
import Colors from "../../../utilities/Colors"
import { CompositeScreenProps, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BoardingParamList, MainTabParamList } from "../../../navigator/types";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utilities/Constants";
import Screen from "../../../components/Screen";
import { GlobalStyles } from "../../../utilities/GlobalStyles";
import FormField from "../../../components/FormField";
import { useState } from "react";
import EncryptedStorage from "react-native-encrypted-storage";
import { useExpenseStore } from "../../../context/useTransactionStore";

type Props = CompositeScreenProps<
  NativeStackScreenProps<BoardingParamList, "LoginScreen">,
  NativeStackScreenProps<MainTabParamList>
>;
function LoginScreen({navigation}:Props){

    const {login} = useExpenseStore()
    const [username,setUsername] = useState<string|null>()
    const [password,setPassword] = useState<string|null>()
    const [passwordVisible,setPasswordVisible] = useState<boolean>(false)

    
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
                            
                            style={{ height: 40, minWidth: 197, borderRadius: 20, backgroundColor: Colors.LightGreen, justifyContent: 'center', alignItems: 'center', alignSelf: 'center',paddingHorizontal:5 }}>
                                <Text style={{ ...GlobalStyles.textSemiBold20 }}>Sign Up</Text>
                        </TouchableOpacity>

                         <TouchableOpacity>
                            <Text style={{...GlobalStyles.textSemiBold12,fontSize:14}}>Use <Text style={{...GlobalStyles.textSemiBold12,fontSize:14,color:Colors.OceanBlue}}>Fingerprint</Text> To Access</Text>
                        </TouchableOpacity>
                    </View>

            </View>
        </View>
      </Screen>
    )
}

export default LoginScreen