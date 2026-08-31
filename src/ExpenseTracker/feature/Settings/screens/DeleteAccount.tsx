import { Text, TouchableOpacity, View } from "react-native"
import Screen from "../../../components/Screen"
import Colors from "../../../utilities/Colors"
import { MainTabParamList, ProfileParamList, SettingsParamList } from "../../../navigator/types";
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utilities/Constants";
import { GlobalStyles } from "../../../utilities/GlobalStyles";
import { InfoCircle } from "iconsax-react-nativejs";
import FormField from "../../../components/FormField";
import { useState } from "react";
import ReactNativeModal from "react-native-modal";

type Props = CompositeScreenProps<
    NativeStackScreenProps<SettingsParamList, "DeleteAccount">,
    NativeStackScreenProps<MainTabParamList>
>;
function DeleteAccount({navigation}:Props){

    const [password,setPassword] = useState<string|null>()
    const [passwordVisible,setPasswordVisible] = useState(false)
    const [confirmVisible,setConfirmVisible] = useState(false)
    return (
        <Screen title="Delete Account" onBack={() => { navigation.goBack() }} onNotificationPress={() => { navigation.navigate('Notifications') }}>
            <View style={{ flex: 1, backgroundColor: Colors.HoneyDew, borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop: WINDOW_HEIGHT*0.03,paddingHorizontal:WINDOW_WIDTH*0.1, marginTop: 20,gap:20 }}>
                <Text style={{...GlobalStyles.textMedium15,textAlign:'center'}}>Are you sure you want to delete your account?</Text>
                <View style={{backgroundColor:Colors.LightGreen,borderRadius:18,paddingVertical:20}}>
                    <Text style={{...GlobalStyles.textLight13,paddingHorizontal:20}}>
                        This action will permanently delete all of your data, and you will not be able to recover it. Please keep the following in mind before proceeding:
                    </Text>
                    <View style={{paddingHorizontal:30,alignSelf:'center',gap:10,marginTop:10}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{marginTop:8,width:4,height:4,borderRadius:2,backgroundColor:'black',alignItems:'center'}}/>
                            <Text style={{...GlobalStyles.textLight13,marginHorizontal:10}}>
                                All your expenses, income and associated transactions will be eliminated.
                            </Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{marginTop:8,width:4,height:4,borderRadius:2,backgroundColor:'black',alignItems:'center'}}/>
                            <Text style={{...GlobalStyles.textLight13,marginHorizontal:10}}>
                                You will not be able to access your account or any related information.
                            </Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{marginTop:8,width:4,height:4,borderRadius:2,backgroundColor:'black',alignItems:'center'}}/>
                            <Text style={{...GlobalStyles.textLight13,marginHorizontal:10}}>
                                This action cannot be undone.
                            </Text>
                        </View>
                    </View>
                </View>

                <Text style={{...GlobalStyles.textMedium15,textAlign:'center'}}>Please enter your password to confirm deletion of your account.</Text>

                <FormField fieldType="Password" value={password} setValue={setPassword} valueVisible={passwordVisible} setValueVisible={setPasswordVisible} />

                <TouchableOpacity
                       
                        onPress={()=>setConfirmVisible(true)}
                        style={{height: 36, minWidth: 169, borderRadius: 20, backgroundColor: Colors.MainGreen, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 10,paddingHorizontal:5 }}>
                            <Text style={{ ...GlobalStyles.textMedium15 }}>Delete Account</Text>
                        </TouchableOpacity>
            </View>


              <ReactNativeModal
      backdropOpacity={0.3}
      onBackdropPress={()=>setConfirmVisible(false)}
      isVisible={confirmVisible}
      >
        <View style={{width:WINDOW_WIDTH-70,alignSelf:'center',backgroundColor:Colors.HoneyDew,alignItems:'center',justifyContent:'center',borderRadius:10,paddingHorizontal:30,paddingVertical:50,gap:15,}}>
            <Text style={{...GlobalStyles.textBold20}}>Delete Account</Text>

            <Text style={{...GlobalStyles.textMedium15,textAlign:'center'}}>Are you sure you want to delete your account ?</Text>

            <Text style={{...GlobalStyles.textRegular12,textAlign:'center'}}>By deleting your account, you agree that you understand the consequences of this action and that you agree to permanently delete your account and all associated data. </Text>

            <TouchableOpacity
                       
                       
                        style={{height: 36, minWidth: 169, borderRadius: 20, backgroundColor: Colors.MainGreen, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 10,paddingHorizontal:5 }}>
                            <Text style={{ ...GlobalStyles.textMedium15 }}>Yes, Delete Account</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                       
                        onPress={()=>setConfirmVisible(false)}
                        style={{height: 36, minWidth: 169, borderRadius: 20, backgroundColor: Colors.LightGreen, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 10,paddingHorizontal:5 }}>
                            <Text style={{ ...GlobalStyles.textMedium15 }}>Cancel</Text>
                        </TouchableOpacity>
        
        </View>
        </ReactNativeModal>
        </Screen>
    )
}

export default DeleteAccount