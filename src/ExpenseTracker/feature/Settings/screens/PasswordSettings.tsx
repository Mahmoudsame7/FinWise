import { Switch, Text, TouchableOpacity, View } from "react-native"
import Screen from "../../../components/Screen"
import Colors from "../../../utilities/Colors"
import { MainTabParamList, ProfileParamList, SettingsParamList } from "../../../navigator/types";
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ProfileTile from "../../Profile/components/ProfileTile";
import ProfileSvg from "../../../assets/svg/ProfileSvg";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utilities/Constants";
import NotificationSvg from "../../../assets/svg/NotificationSvg";
import { Key } from "iconsax-react-nativejs";
import { useState } from "react";
import { GlobalStyles } from "../../../utilities/GlobalStyles";
import FormField from "../../../components/FormField";



type Props = CompositeScreenProps<
    NativeStackScreenProps<SettingsParamList, "PasswordSettings">,
    NativeStackScreenProps<MainTabParamList>
>;
function PasswordSettings({navigation}:Props){

    const [currentPassword,setCurrentPassword] = useState<string|null>()
    const [currentPasswordVisible,setCurrentPasswordVisible] = useState<boolean>(false)

    const [newPassword,setNewPassword] = useState<string|null>()
    const [newPasswordVisible,setNewPasswordVisible] = useState<boolean>(false)

    const [confirmPassword,setConfirmPassword] = useState<string|null>()
    const [confirmPasswordVisible,setConfirmPasswordVisible] = useState<boolean>(false)


    return (
        <Screen title="Password Settings" onBack={() => { navigation.goBack() }} onNotificationPress={() => { navigation.navigate('Notifications') }}>
            <View style={{ flex: 1, backgroundColor: Colors.HoneyDew, borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop: WINDOW_HEIGHT*0.07,paddingHorizontal:WINDOW_WIDTH*0.09, marginTop: 20,gap:30}}>
                <FormField valueVisible={currentPasswordVisible} setValueVisible={setCurrentPasswordVisible}   fieldType="Password" title="Current Password" value={currentPassword} setValue={setCurrentPassword}/>


                 <FormField valueVisible={newPasswordVisible} setValueVisible={setNewPasswordVisible}   fieldType="Password" title="New Password" value={newPassword} setValue={setNewPassword}/>

                  <FormField valueVisible={confirmPasswordVisible} setValueVisible={setConfirmPasswordVisible}   fieldType="Password" title="Confirm Password" value={confirmPassword} setValue={setConfirmPassword}/>
            

                  <TouchableOpacity
                       
                       
                        style={{height: 36, minWidth: 169, borderRadius: 20, backgroundColor: Colors.MainGreen, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 10,paddingHorizontal:5 }}>
                            <Text style={{ ...GlobalStyles.textMedium15 }}>Change Password</Text>
                        </TouchableOpacity>
            </View>
        </Screen>
    )
}

export default PasswordSettings