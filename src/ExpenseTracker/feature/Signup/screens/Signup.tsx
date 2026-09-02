import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native"
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

type Props = CompositeScreenProps<
  NativeStackScreenProps<BoardingParamList, "SignUpScreen">,
  NativeStackScreenProps<MainTabParamList>
>;
function SignUpScreen({navigation}:Props){

    const [fullname,setFullname] = useState<string|null>()
    const [email,setEmail] = useState<string|null>()
    const [mobile,setMobile] = useState<string|null>()
    const [dob,setDob] = useState<Date>(new Date("2000-01-01"))
    const [password,setPassword] = useState<string|null>()
    const [passwordVisible,setPasswordVisible] = useState<boolean>(false)
    const [confirmPassword,setConfirmPassword] = useState<string|null>()
    const [confirmPasswordVisible,setConfirmPasswordVisible] = useState<boolean>(false)

     
           
    
    return (
      <Screen hasBack={false} hasNotificationBtn={false} >
    
        <View style={{ height: 50,marginBottom:20,justifyContent:'center',alignItems:'center' }}>
            <Text style={{ ...GlobalStyles.textSemiBold20, fontSize: 30 }}>Create Account</Text>
        </View>

        <View style={{ flex: 1, backgroundColor: Colors.HoneyDew, borderTopLeftRadius: 50, borderTopRightRadius: 50, alignItems: 'center' }}>
            
            <View style={{ flex:1,alignSelf:'center',alignItems:'center',paddingVertical:30}}>
                    <ScrollView contentContainerStyle={{width: WINDOW_WIDTH - 60}}  showsVerticalScrollIndicator={false}>      
                        <View style={{gap: 15}}>
                            <FormField  fieldType="TextInput" value={fullname} setValue={setFullname} title="Full Name"/>

                            <FormField  fieldType="TextInput" value={email} setValue={setEmail} title="Email"/>

                            <FormField  fieldType="NumberInput" value={mobile} setValue={setMobile} title="Mobile Number"/>

                            <FormField  fieldType="Date" value={dob} setValue={setDob} title="Date of Birth"/>

                            <FormField  fieldType="Password" value={password} setValue={setPassword} valueVisible={passwordVisible} setValueVisible={setPasswordVisible}  title="Password"/>

                            <FormField  fieldType="Password" value={confirmPassword} setValue={setConfirmPassword} valueVisible={confirmPasswordVisible} setValueVisible={setConfirmPasswordVisible}  title="Confirm Password"/>

                            <Text style={{ ...GlobalStyles.textRegular12, textAlign: 'center',width:'70%',alignSelf:'center' }}>
                                By continuing, you agree to <Text style={{ ...GlobalStyles.textSemiBold12, textAlign: 'center' }}>Terms of Use</Text> and <Text style={{ ...GlobalStyles.textSemiBold12, textAlign: 'center' }}>Privacy Policy</Text>.
                            </Text>

                             <TouchableOpacity
                           
                            style={{ height: 40, minWidth: 197, borderRadius: 20, backgroundColor: Colors.MainGreen, justifyContent: 'center', alignItems: 'center', alignSelf: 'center',paddingHorizontal:5 }}>
                                <Text style={{ ...GlobalStyles.textSemiBold20 }}>Sign Up</Text>
                        </TouchableOpacity>

                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:5}}>
                        <Text style={{ ...GlobalStyles.textLight13,alignSelf:'center' }}>
                                Already have an account? 
                        </Text>
                        <TouchableOpacity onPress={()=>{
                            navigation.goBack()
                        }}>
                                    <Text style={{ ...GlobalStyles.textLight13,color: Colors.OceanBlue }}>Log In</Text>
                                </TouchableOpacity>
                        </View>
                        </View>
                    </ScrollView>  
            </View>
        </View>
      </Screen>
    )
}

export default SignUpScreen